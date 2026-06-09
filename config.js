module.exports = {
    bot_token: '7515293027:AAG9ICbs_XMlYnJCGUW7dpu8Aea3USAMn6E',
    owner_ids: ['1147324679'],
    cs_admins: [], // Ganti dengan ID Telegram CS Admin
    channel: '@achaimutt',
    aboutzalfa: "@aboutzalfa",
    aboutzyyfa: "@aboutzyyfa",
    channel_script: "@achaimutt",         // Ganti dengan channel script Anda
    aboutmilaa: "@zalfamokoagow",
    namaStore: "ACHA STORE",
    type_ewallet_RUMAHOTP: "DANA",
    nomor_pencairan_RUMAHOTP: "",
    domain: 'https://www.rumahotp.io/api',
    apikey: 'rk-dev-NJEoOm3yPuOwc5KXESlU3eibvo3Tu8iG',
    premium_api_key: '4c9beea1d0ff98d859b0a49113617bfb', // Ganti dengan API key premium store Anda
    premium_api_url: 'https://premku.com/api',
    UNTUNG_NOKOS: 1000,
    pakasirApiKey: 'hlXtjkZt9HETnukJjboxvG2jrSYTCMGZ',
    pakasirProject: 'api-milaaofficial',
    pakasirExpireMinutes: 60,
    pakasirGraceSec: 20,
    SCRIPT_PRICE: 5000,                                   // Harga default script
    panelDomain: 'https://panel.example.com', // Ganti dengan domain panel Anda
    panelApiKey: 'ptla_xxxxx', // Ganti dengan API key panel
    panelLocation: '1', // ID location panel
    panelEgg: '15', // ID egg untuk NodeJS
    scriptsDir: "./database/scripts",
    
    // ==================== VPS CONFIGURATION ====================
    DO_API_KEYS: [
        '',
        '',
        ''
    ],
    
    linode: {
       token: '267e581f78bb29aa556675fe997dc452de96a33539e7f076a5c91e3c6c3a2049',
       apiUrl: 'https://api.linode.com/v4',
    },
        
    MAX_VPS_PER_ACCOUNT: 10,    // Maksimal VPS per akun DO
    MAX_LINODE_PER_ACCOUNT: 10, // Untuk Linode
    MIN_STOCK_WARNING: 3,            // Notifikasi stok menipis jika kurang dari ini
    // ==================== FREE VPS FOR OWNER ====================
    FREE_VPS_FOR_OWNER: true,    // Aktifkan free VPS untuk owner
    MAX_FREE_VPS_PER_OWNER: 999, // Maksimal free VPS per owner
        
        // Paket VPS berdasarkan kategori
    VPS_CATEGORIES: {
    /*low: {
            name: "LOW VPS",
            garansi: "5 Hari",
            replace: "1x",
            emoji: "🟢"
    },*/
    medium: {
            name: "MEDIUM VPS",
            garansi: "3 Hari",
            replace: "1x",
            emoji: "🟡"
    },
    high: {
             name: "HIGH VPS",
             garansi: "5 Hari",
             replace: "1x",
             emoji: "🔴"
             }
    },
        
        // Daftar produk VPS
    VPS_PRODUCTS: [
        { id: "medium_4c2", category: "medium", name: "4GB VPS", price: 11000, plan: "4c2", label: "4GB RAM | 2 CPU | 120GB SSD", cpu: 2, ram: 4, disk: 120 },
        { id: "medium_8c4", category: "medium", name: "8GB VPS", price: 12000, plan: "8c4", label: "8GB RAM | 4 CPU | 240GB SSD", cpu: 4, ram: 8, disk: 240 },
        { id: "high_4c2p", category: "high", name: "4GB VPS AMD", price: 14000, plan: "4c2p", label: "4GB RAM | 2 CPU | 120GB SSD", cpu: 2, ram: 4, disk: 120 },
        { id: "high_8c4p", category: "high", name: "8GB VPS AMD", price: 15000, plan: "8c4p", label: "8GB RAM | 4 CPU | 240GB SSD", cpu: 4, ram: 8, disk: 240 }
    ],
        
        // OS Options
    VPS_OS_OPTIONS: [
        { name: "🐧 Ubuntu 22.04 LTS", slug: "ubuntu-22-04-x64", value: "ubuntu-22-04-x64" },
        { name: "🐧 Ubuntu 20.04 LTS", slug: "ubuntu-20-04-x64", value: "ubuntu-20-04-x64" },
        { name: "🐧 Debian 12", slug: "debian-12-x64", value: "debian-12-x64" },
        { name: "🐧 Debian 11", slug: "debian-11-x64", value: "debian-11-x64" },
        { name: "🪟 CentOS Stream 9", slug: "centos-stream-9-x64", value: "centos-stream-9-x64" },
        { name: "🪟 Rocky Linux 9", slug: "rockylinux-9-x64", value: "rockylinux-9-x64" },
        { name: "🪟 AlmaLinux 9", slug: "almalinux-9-x64", value: "almalinux-9-x64" }
    ],
        
        // Region Options
    VPS_REGION_OPTIONS: [
        { name: "🇸🇬 Singapore", code: "sgp1", value: "sgp1" },
        { name: "🇺🇸 New York", code: "nyc3", value: "nyc3" },
        { name: "🇺🇸 San Francisco", code: "sfo3", value: "sfo3" },
        { name: "🇳🇱 Amsterdam", code: "ams3", value: "ams3" },
        { name: "🇬🇧 London", code: "lon1", value: "lon1" },
        { name: "🇩🇪 Frankfurt", code: "fra1", value: "fra1" },
        { name: "🇦🇺 Sydney", code: "syd1", value: "syd1" }
    ],
        
    DO_SIZE_MAP: {
       "4c2": "s-2vcpu-4gb",
       "8c4": "s-4vcpu-8gb",
       "16c4": "s-8vcpu-16gb", // untuk regular 
       "4c2p": "s-2vcpu-4gb-intel",
       "8c4p": "s-4vcpu-8gb-intel",
       "16c4p": "s-8vcpu-16gb-intel" // untuk premium intel
    },

    LINODE_OPTIONS: {
        regions: [
            { id: 'ap-south', label: '🇸🇬 Singapore', country: 'SG' },
            { id: 'ap-northeast', label: '🇯🇵 Tokyo, Japan', country: 'JP' },
            { id: 'ap-northeast-1a', label: '🇯🇵 Osaka, Japan', country: 'JP' },
            { id: 'ap-southeast', label: '🇦🇺 Sydney, Australia', country: 'AU' },
            { id: 'us-east', label: '🇺🇸 Newark, USA', country: 'US' },
            { id: 'us-west', label: '🇺🇸 Fremont, USA', country: 'US' },
            { id: 'us-central', label: '🇺🇸 Dallas, USA', country: 'US' },
        { id: 'us-southeast', label: '🇺🇸 Atlanta, USA', country: 'US' },
            { id: 'eu-west', label: '🇬🇧 London, UK', country: 'UK' },
            { id: 'eu-central', label: '🇩🇪 Frankfurt, DE', country: 'DE' },
            { id: 'eu-north', label: '🇸🇪 Stockholm, SE', country: 'SE' },
            { id: 'ap-northeast-2', label: '🇮🇳 Mumbai, India', country: 'IN' },
        ],
        images: [
            { id: 'linode/ubuntu22.04', label: '🐧 Ubuntu 22.04 LTS', type: 'linux' },
            { id: 'linode/ubuntu20.04', label: '🐧 Ubuntu 20.04 LTS', type: 'linux' },
            { id: 'linode/ubuntu24.04', label: '🐧 Ubuntu 24.04 LTS', type: 'linux' },
            { id: 'linode/debian11', label: '🐧 Debian 11', type: 'linux' },
            { id: 'linode/debian12', label: '🐧 Debian 12', type: 'linux' },
            { id: 'linode/centos-stream9', label: '🐧 CentOS Stream 9', type: 'linux' },
            { id: 'linode/almalinux9', label: '🐧 AlmaLinux 9', type: 'linux' },
            { id: 'linode/rockylinux9', label: '🐧 Rocky Linux 9', type: 'linux' },
            { id: 'linode/fedora39', label: '🐧 Fedora 39', type: 'linux' },
            { id: 'linode/fedora40', label: '🐧 Fedora 40', type: 'linux' },
            { id: 'linode/arch', label: '🐧 Arch Linux', type: 'linux' },
            { id: 'linode/alpine3.19', label: '🐧 Alpine 3.19', type: 'linux' },
    ]
},

// Konfigurasi produk VPS Linode untuk ditampilkan di menu
    LINODE_PRODUCTS: [
    { id: 'g6-standard-2', name: 'LINODE 4GB', ram: '4 GB', cpu: '2 Core', disk: '80 GB SSD', price: 17000 },
    { id: 'g6-standard-4', name: 'LINODE 8GB', ram: '8 GB', cpu: '4 Core', disk: '160 GB SSD', price: 18000 },
    { id: 'g6-standard-6', name: 'LINODE 16GB', ram: '16 GB', cpu: '6 Core', disk: '320 GB SSD', price: 20000 },
    { id: 'g6-standard-8', name: 'LINODE 32GB', ram: '32 GB', cpu: '8 Core', disk: '640 GB SSD', price: 25000 },
    { id: 'g6-standard-10', name: 'LINODE 64GB', ram: '64 GB', cpu: '16 Core', disk: '1280 GB SSD', price: 50000 }
],
    pterodactyl: {
       defaultUser: 'admin01',
       defaultEmail: 'achazalfaazzahra@gmail.com',
       defaultLocation: 'Zalfa Official - Jakarta',
       defaultLocationDesc: 'Zalfa Cantik dan Imut'
     },
     // Konfigurasi subdomain
    subdomain: { 
        "achastore.icu": { 
                zone: "68ee877f457ffe61edc9e9ced1fbe6e9",
                apitoken: "nrPWfDBRL0kk_cAJ7BokhDM-i0IyfaK9__T0JpmD",
        },
        "andinofficial.web.id": {
                zone: "8085c418c85717dfe9c4d531b729feee",
                apitoken: "nrPWfDBRL0kk_cAJ7BokhDM-i0IyfaK9__T0JpmD"
        },
        "naaofficial.web.id": {
                zone: "b52e8ffa02bdb776bd01c2e3960f8e8f",
                apitoken: "nrPWfDBRL0kk_cAJ7BokhDM-i0IyfaK9__T0JpmD"
        },
        "naaofficial.me": {
                zone: "5d55633152981a0ef579f619e8a2b848",
                apitoken: "nrPWfDBRL0kk_cAJ7BokhDM-i0IyfaK9__T0JpmD"
        }
    }
};