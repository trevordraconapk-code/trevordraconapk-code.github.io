document.addEventListener("DOMContentLoaded", () => {
  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // 3D Tilt Effect
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
    });
  });

  // --- Translations ---
  const translations = {
    pt: {
      nav_apps: "Apps",
      nav_about: "Sobre",
      nav_privacy: "Privacidade",
      hero_title: "Experiências Digitais<br>Artesanais",
      hero_subtitle:
        "Desenvolvimento mobile focado em performance, imersão e privacidade.",
      tag_util: "Utilitário",
      sd_desc:
        "O controle definitivo. Transforme seu smartphone Android em um trackpad e teclado wi-fi de baixa latência para Windows.",
      sd_feat1: "⚡ Conexão Instantânea (UDP)",
      sd_feat2: "🖱️ Gestos Multi-touch",
      sd_feat3: "⌨️ Teclado Remoto",
      btn_download_pc: "💻 Baixar Server (PC)",
      btn_download_android: "📱 Baixar App (Android)",
      beta_info:
        "⚠️ <strong>Teste Fechado:</strong> Para usar o link acima, seu e-mail deve estar liberado. Cadastre-se abaixo (Acesso em ±4h).",
      tag_game: "RPG Adventure",
      dl_desc:
        "Explore masmorras, domine pets e derrote chefes gigantes neste viciante RPG de Tap (Clicker).",
      dl_feat1: "👆 Jogabilidade Tap Viciante",
      dl_feat2: "🐾 Pets e Montarias",
      dl_feat3: "🛡️ Classes e Itens Raros",
      btn_test: "🧪 Baixar Beta (Android)",
      about_title: "Quem é Trevor Dracon?",
      about_bio:
        'Sou <strong>Anderson Tadeu Alves</strong>, um desenvolvedor independente transformando código em experiências. Operando como um "One-Man Army", crio cada pixel e cada linha de código com paixão e propósito. Minha missão é provar que grandes ideias não precisam de grandes estúdios, apenas de dedicação e foco no usuário.',
      stat_apps: "Apps Lançados",
      stat_user: "Foco no Usuário",
      stat_dev: "Desenvolvedor Indie",
      privacy_title: "Política de Privacidade",
      privacy_intro:
        'A <strong>Trevor Dracon Apks</strong> ("nós") respeita sua privacidade e transparência.',
      privacy_sd_1: "Não coleta, armazena ou transmite dados pessoais.",
      privacy_sd_2:
        "Funciona exclusivamente através da sua rede local (Wi-Fi).",
      privacy_sd_3: "Nenhum dado é enviado para a nuvem.",
      privacy_dl_1:
        "Pode coletar dados anônimos de jogabilidade via Google Play Services apenas para analytics e backup de save na nuvem.",
      privacy_contact: "Para dúvidas: trevordraconapk@gmail.com",
      
      // Privacy Page Keys (PT)
      priv_mm_title: "MiniMentes: Aprenda Brincando",
      priv_mm_desc: "Desenvolvido para crianças e famílias. Nosso compromisso é com a segurança digital dos pequenos.",
      priv_subtitle_collect: "Coleta de Dados",
      priv_mm_collect_1: "<strong>Não coletamos dados pessoais:</strong> O app não pede nome, e-mail, telefone ou localização.",
      priv_mm_collect_2: "<strong>Sem rastreamento:</strong> Não utilizamos rastreadores de publicidade comportamental.",
      priv_mm_collect_3: "<strong>Anúncios Seguros:</strong> Exibimos apenas banners classificados como 'Família' via Google AdMob, sem personalização baseada em dados do usuário.",
      priv_subtitle_perm: "Permissões",
      priv_mm_perm_desc: "O aplicativo pode solicitar acesso à rede apenas para carregar anúncios genéricos e verificar atualizações. Nenhuma outra permissão (câmera, microfone, arquivos) é necessária.",
      
      priv_subtitle_data: "Dados e Conexão",
      priv_sd_1: "<strong>Funcionamento Local:</strong> O app opera exclusivamente via Wi-Fi Local (UDP).",
      priv_sd_2: "<strong>Zero Nuvem:</strong> Nenhum dado do seu teclado ou mouse é enviado para servidores externos.",
      priv_sd_3: "<strong>Sem Coleta:</strong> Não armazenamos logs do que você digita. O app age apenas como um 'controle remoto' direto.",
      
      priv_subtitle_services: "Serviços de Terceiros",
      priv_dl_1: "<strong>Google Play Games:</strong> Utilizamos os serviços do Google para salvar o progresso na nuvem (Cloud Save) e Rankings.",
      priv_dl_2: "<strong>Dados Coletados:</strong> Apenas dados anônimos de jogabilidade (Analytics) para balanceamento do jogo e correção de bugs.",
    },
    en: {
      nav_apps: "Apps",
      nav_about: "About",
      nav_privacy: "Privacy",
      hero_title: "Crafting Digital<br>Experiences",
      hero_subtitle:
        "Mobile development focused on performance, immersion, and privacy.",
      tag_util: "Utility",
      sd_desc:
        "The ultimate remote. Turn your Android smartphone into a low-latency Wi-Fi trackpad and keyboard for Windows.",
      sd_feat1: "⚡ Instant Connection (UDP)",
      sd_feat2: "🖱️ Multi-touch Gestures",
      sd_feat3: "⌨️ Remote Keyboard",
      btn_download_pc: "💻 Download Server (PC)",
      btn_download_android: "📱 Download App (Android)",
      beta_info:
        "⚠️ <strong>Closed Test:</strong> To use the link above, your email must be authorized. Sign up below (Access in ~4h).",
      tag_game: "RPG Adventure",
      dl_desc:
        "Explore dungeons, tame pets, and defeat giant bosses in this addictive Tap RPG (Clicker).",
      dl_feat1: "👆 Addictive Tap Gameplay",
      dl_feat2: "🐾 Pets & Mounts",
      dl_feat3: "🛡️ Classes & Rare Loot",
      btn_test: "🧪 Download Beta (Android)",
      about_title: "Who is Trevor Dracon?",
      about_bio:
        'I am <strong>Anderson Tadeu Alves</strong>, an independent developer turning code into experiences. Operating as a "One-Man Army," I craft every pixel and line of code with passion and purpose. My mission is to prove that big ideas don\'t need big studios, just dedication and user focus.',
      stat_apps: "Apps Released",
      stat_user: "User Focused",
      stat_dev: "Indie Developer",
      privacy_title: "Privacy Policy",
      privacy_intro:
        '<strong>Trevor Dracon Apks</strong> ("we") respects your privacy and transparency.',
      privacy_sd_1: "Does not collect, store, or transmit personal data.",
      privacy_sd_2: "Works exclusively via your local network (Wi-Fi).",
      privacy_sd_3: "No data is sent to the cloud.",
      privacy_dl_1:
        "May collect anonymous gameplay data via Google Play Services solely for analytics and cloud save backups.",
      privacy_contact: "Questions? trevordraconapk@gmail.com",
      
      // Privacy Page Keys (EN)
      priv_mm_title: "MiniMentes: Learn by Playing",
      priv_mm_desc: "Designed for kids and families. We are committed to digital safety for little ones.",
      priv_subtitle_collect: "Data Collection",
      priv_mm_collect_1: "<strong>No Personal Data:</strong> The app does not ask for name, email, phone, or location.",
      priv_mm_collect_2: "<strong>No Tracking:</strong> We do not use behavioral advertising trackers.",
      priv_mm_collect_3: "<strong>Safe Ads:</strong> We only display 'Family' rated banners via Google AdMob, without user-based personalization.",
      priv_subtitle_perm: "Permissions",
      priv_mm_perm_desc: "The app may request network access only to load generic ads and check for updates. No other permission (camera, mic, files) is required.",
      
      priv_subtitle_data: "Data & Connection",
      priv_sd_1: "<strong>Local Operation:</strong> The app operates exclusively via Local Wi-Fi (UDP).",
      priv_sd_2: "<strong>Zero Cloud:</strong> No keyboard or mouse data is sent to external servers.",
      priv_sd_3: "<strong>No Logs:</strong> We do not store logs of what you type. The app acts solely as a direct 'remote control'.",
      
      priv_subtitle_services: "Third-Party Services",
      priv_dl_1: "<strong>Google Play Games:</strong> We use Google services for Cloud Save and Leaderboards.",
      priv_dl_2: "<strong>Collected Data:</strong> Only anonymous gameplay data (Analytics) for game balancing and bug fixing.",

      // MiniMentes
      tag_edu: "Educational",
      mm_desc:
        "Learn shapes, colors, and letters in a fun way! 3D puzzles with voiceovers in Portuguese, English, and Spanish.",
      mm_feat1: "🧩 3D Puzzles",
      mm_feat2: "🗣️ PT / EN / ES Voiceover",
      mm_feat3: "🎨 Kid-Safe & Ad-Free",
      btn_download_apk: "📥 Download APK (v1.0)",
    },
  };

  let currentLang = "pt";
  const langToggle = document.getElementById("lang-toggle");
  const langText = langToggle.querySelector(".lang-text");
  const langIcon = langToggle.querySelector(".lang-icon");

  function updateLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach((element) => {
      const key = element.getAttribute("data-lang");
      if (translations[lang][key]) {
        element.innerHTML = translations[lang][key];
      }
    });

    // Update Button State
    if (lang === "en") {
      langText.textContent = "PT";
      langIcon.textContent = "🇧🇷";
    } else {
      langText.textContent = "EN";
      langIcon.textContent = "🇺🇸";
    }
  }

  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "pt" ? "en" : "pt";
    updateLanguage(currentLang);
  });

  console.log("Trevor Dracon Website Loaded 🚀");
});
