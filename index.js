// Required packages
const { Boom } = require('@hapi/boom');
const { 
    useMultiFileAuthState, 
    makeInMemoryStore, 
    DisconnectReason, 
    makeWASocket 
} = require('@whiskeysockets/baileys');
const { parsePhoneNumber } = require('awesome-phonenumber');
const colors = require('colors');
const axios = require('axios');
const pino = require('pino');
const readline = require('readline');

// Initialize colors
colors.enable();

// Configuration
const config = {
    aiEndpoint: 'https://api.siputzx.my.id/api/ai/meta-llama-33-70B-instruct-turbo?content=',
    botName: 'Y2Beta Ai',
    pairingCodeColor: 'cyan',
    logColor: 'green',
    errorColor: 'red',
    warningColor: 'yellow',
    phoneNumber: '+62856541270715' // Example: '+6281234567890'
};

// Store for messages
const store = makeInMemoryStore({ logger: pino().child({ level: 'debug', stream: 'store' }) });

// Create readline interface for pairing code input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Main bot function
async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState('auth_info');
    
    const sock = makeWASocket({
        logger: pino({ level: 'silent' }),
        auth: state,
        phoneNumber: config.phoneNumber,
        generateHighQualityLinkPreview: true,
        getMessage: async (key) => {
            return store.loadMessage(key.remoteJid, key.id) || {};
        }
    });

    store.bind(sock.ev);

    // Pairing code handler
    sock.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect, qr, isNewLogin } = update;
        
        if (isNewLogin) {
            console.log(`[${config.botName}] WhatsApp is requesting a pairing code`.white);
            rl.question(`[${config.botName}] Enter 6-digit pairing code: `.white, async (code) => {
                if (code.length === 6 && !isNaN(code)) {
                    try {
                        await sock.requestPairingCode(code.trim());
                        console.log(`[${config.botName}] Pairing code submitted successfully!`[config.logColor]);
                    } catch (error) {
                        console.error(`[${config.botName}] Pairing failed:`.white, error.message[config.errorColor]);
                        process.exit(1);
                    }
                } else {
                    console.error(`[${config.botName}] Invalid pairing code. Must be 6 digits.`[config.errorColor]);
                    process.exit(1);
                }
            });
        }

        if (connection === 'close') {
            const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut;
            console.log(`[${config.botName}] Connection closed due to ${lastDisconnect.error} | reconnecting ${shouldReconnect}`[config.warningColor]);
            
            if (shouldReconnect) {
                startBot();
            }
        } else if (connection === 'open') {
            console.log(`[${config.botName}] Successfully connected!`[config.logColor]);
            rl.close();
        }
    });

    // Save credentials
    sock.ev.on('creds.update', saveCreds);

    // Message handler
    sock.ev.on('messages.upsert', async ({ messages }) => {
        const m = messages[0];
        
        if (!m.message || m.key.fromMe) return;

        const sender = parsePhoneNumber(m.key.remoteJid);
        const isGroup = m.key.remoteJid.endsWith('@g.us');
        const text = m.message.conversation || m.message.extendedTextMessage?.text || '';

        console.log(`[${config.botName}] Received message from ${sender.number}: ${text}`[config.logColor]);

        // Skip groups
        if (isGroup) {
            console.log(`[${config.botName}] Message from group ignored`[config.warningColor]);
            return;
        }

        try {
            // Call AI API
            const response = await axios.get(`${config.aiEndpoint}${encodeURIComponent(text)}`);
            
            if (response.data.status && response.data.data) {
                await sock.sendMessage(m.key.remoteJid, { text: response.data.data });
                console.log(`[${config.botName}] AI response sent to ${sender.number}`[config.logColor]);
            } else {
                throw new Error('Invalid AI response');
            }
        } catch (error) {
            console.error(`[${config.botName}] Error:`.white, error.message[config.errorColor]);
            await sock.sendMessage(m.key.remoteJid, { 
                text: 'Maaf, terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi nanti.'
            });
        }
    });
}

// Start the bot
startBot().catch(err => {
    console.error(`[${config.botName}] Initialization error:`.white, err.message[config.errorColor]);
    process.exit(1);
});