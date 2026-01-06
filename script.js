document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 3D Tilt Effect
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });

    // --- Translations ---
    const translations = {
        pt: {
            nav_apps: "Apps",
            nav_about: "Sobre",
            nav_privacy: "Privacidade",
            hero_title: "Experiências Digitais<br>Artesanais",
            hero_subtitle: "Desenvolvimento mobile focado em performance, imersão e privacidade.",
            tag_util: "Utilitário",
            sd_desc: "O controle definitivo. Transforme seu smartphone Android em um trackpad e teclado wi-fi de baixa latência para Windows.",
            sd_feat1: "⚡ Conexão Instantânea (UDP)",
            sd_feat2: "🖱️ Gestos Multi-touch",
            sd_feat3: "⌨️ Teclado Remoto",
            btn_download_pc: "💻 Baixar Server (PC)",
            btn_download_android: "📱 Baixar App (Android)",
            tag_game: "RPG Adventure",
            dl_desc: "Em breve. Explore masmorras perigosas, colete loot lendário e derrote chefes em batalhas épicas.",
            btn_test: "🧪 Participar do Teste (Android)",
            about_title: "Quem é Trevor Dracon?",
            about_bio: "Sou <strong>Anderson Tadeu Alves</strong>, um desenvolvedor independente transformando código em experiências. Operando como um \"One-Man Army\", crio cada pixel e cada linha de código com paixão e propósito. Minha missão é provar que grandes ideias não precisam de grandes estúdios, apenas de dedicação e foco no usuário.",
            stat_apps: "Apps Lançados",
            stat_user: "Foco no Usuário",
            stat_dev: "Desenvolvedor Indie",
            privacy_title: "Política de Privacidade",
            privacy_intro: "A <strong>Trevor Dracon Apks</strong> (\"nós\") respeita sua privacidade e transparência.",
            privacy_sd_1: "Não coleta, armazena ou transmite dados pessoais.",
            privacy_sd_2: "Funciona exclusivamente através da sua rede local (Wi-Fi).",
            privacy_sd_3: "Nenhum dado é enviado para a nuvem.",
            privacy_dl_1: "Pode coletar dados anônimos de jogabilidade via Google Play Services apenas para analytics e backup de save na nuvem.",
            privacy_contact: "Para dúvidas: contato.trevordracon@gmail.com"
        },
        en: {
            nav_apps: "Apps",
            nav_about: "About",
            nav_privacy: "Privacy",
            hero_title: "Crafting Digital<br>Experiences",
            hero_subtitle: "Mobile development focused on performance, immersion, and privacy.",
            tag_util: "Utility",
            sd_desc: "The ultimate remote. Turn your Android smartphone into a low-latency Wi-Fi trackpad and keyboard for Windows.",
            sd_feat1: "⚡ Instant Connection (UDP)",
            sd_feat2: "🖱️ Multi-touch Gestures",
            sd_feat3: "⌨️ Remote Keyboard",
            btn_download_pc: "💻 Download Server (PC)",
            btn_download_android: "📱 Download App (Android)",
            tag_game: "RPG Adventure",
            dl_desc: "Coming soon. Explore dangerous dungeons, collect legendary loot, and defeat bosses in epic battles.",
            btn_test: "🧪 Join Test (Android)",
            about_title: "Who is Trevor Dracon?",
            about_bio: "I am <strong>Anderson Tadeu Alves</strong>, an independent developer turning code into experiences. Operating as a \"One-Man Army,\" I craft every pixel and line of code with passion and purpose. My mission is to prove that big ideas don't need big studios, just dedication and user focus.",
            stat_apps: "Apps Released",
            stat_user: "User Focused",
            stat_dev: "Indie Developer",
            privacy_title: "Privacy Policy",
            privacy_intro: "<strong>Trevor Dracon Apks</strong> (\"we\") respects your privacy and transparency.",
            privacy_sd_1: "Does not collect, store, or transmit personal data.",
            privacy_sd_2: "Works exclusively via your local network (Wi-Fi).",
            privacy_sd_3: "No data is sent to the cloud.",
            privacy_dl_1: "May collect anonymous gameplay data via Google Play Services solely for analytics and cloud save backups.",
            privacy_contact: "Questions? contato.trevordracon@gmail.com"
        }
    };

    let currentLang = 'pt';
    const langToggle = document.getElementById('lang-toggle');
    const langText = langToggle.querySelector('.lang-text');
    const langIcon = langToggle.querySelector('.lang-icon');

    function updateLanguage(lang) {
        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });

        // Update Button State
        if (lang === 'en') {
            langText.textContent = "PT";
            langIcon.textContent = "🇧🇷";
        } else {
            langText.textContent = "EN";
            langIcon.textContent = "🇺🇸";
        }
    }

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'pt' ? 'en' : 'pt';
        updateLanguage(currentLang);
    });

    console.log("Trevor Dracon Website Loaded 🚀");
});
