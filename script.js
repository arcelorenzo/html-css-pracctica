function cambiarIdioma(lang) {
  const textos = {
    es: {
      principal: "¡Hola mundo! Soy Lorenzo",
      sub: "Emprendedor, creador y desarrollador web.",
      datos: "👤 Datos sobre mí:",
      nacimientoLbl: "Nacimiento:",
      nacimientoVal: "9 de diciembre de 1999.",
      ubicacionLbl: "Ubicación:",
      ubicacionVal: "Buenos Aires, Argentina 🇦🇷",
      educacionLbl: "Educación:",
      educacionVal: "E.E.S. N°3.",
      haciendo: "Lo que ando haciendo:",
      hobbiesLbl: "Hobbies:",
      hobbiesVal: "Mirar ▶️ YouTube, 📷 Instagram, 🎵 TikTok o chatear en 🎮 Discord.",
      marketingLbl: "Marketing y Ventas:",
      marketingVal: "Creación de páginas de 🌐 Facebook sobre productos nutricionales, salud y cuidado de la piel, conectando 🔗 enlaces directos a 💬 WhatsApp.",
      metaadsLbl: "Meta Ads:",
      metaadsVal: "Uso del Administrador de Anuncios (campañas) para llegar a personas de mi provincia y ofrecer envíos personalizados.",
      streamingLbl: "Edición y Streaming:",
      streamingVal: "Grabación y edición con 📱 XRecorder y CapCut en el 📱 celu, o directos y videos pro en la 💻 PC usando 🎥 OBS, 👾 Veadotube Mini, Scrcpy por 🔌 depuración USB y 💻 JavaScript para el avatar y la pantalla del celu."
    },
    en: {
      principal: "Hello world! I'm Lorenzo",
      sub: "Entrepreneur, creator, and web developer.",
      datos: "👤 About me:",
      nacimientoLbl: "Birth:",
      nacimientoVal: "December 9, 1999.",
      ubicacionLbl: "Location:",
      ubicacionVal: "Buenos Aires, Argentina 🇦🇷",
      educacionLbl: "Education:",
      educacionVal: "E.E.S. N°3.",
      haciendo: "What I'm doing:",
      hobbiesLbl: "Hobbies:",
      hobbiesVal: "Watching ▶️ YouTube, 📷 Instagram, 🎵 TikTok or chatting on 🎮 Discord.",
      marketingLbl: "Marketing & Sales:",
      marketingVal: "Creating 🌐 Facebook pages about nutritional products, health, and skincare, connecting 🔗 direct links to 💬 WhatsApp.",
      metaadsLbl: "Meta Ads:",
      metaadsVal: "Using Ads Manager (campaigns) to reach people in my province and offer personalized shipping.",
      streamingLbl: "Editing & Streaming:",
      streamingVal: "Recording and editing with 📱 XRecorder and CapCut on the 📱 phone, or live streams and pro videos on the 💻 PC using 🎥 OBS, 👾 Veadotube Mini, Scrcpy via 🔌 USB debugging, and 💻 JavaScript for the avatar and phone screen."
    },
    jp: {
      principal: "ハローワールド！ロレンソです",
      sub: "起業家、クリエイター、ウェブ開発者です。",
      datos: "👤 自己紹介:",
      nacimientoLbl: "生年月日:",
      nacimientoVal: "1999年12月9日。",
      ubicacionLbl: "場所:",
      ubicacionVal: "アルゼンチン、ブエノスアイレス 🇦🇷",
      educacionLbl: "学歴:",
      educacionVal: "E.E.S. N°3。",
      haciendo: "現在の活動:",
      hobbiesLbl: "趣味:",
      hobbiesVal: "▶️ YouTube、📷 Instagram、🎵 TikTokを見ること、または 🎮 Discordでチャットすること。",
      marketingLbl: "マーケティングと販売:",
      marketingVal: "栄養製品、健康、スキンケアに関する 🌐 Facebookページを作成し、💬 WhatsAppへの 🔗 直接リンクを接続します。",
      metaadsLbl: "メタ広告:",
      metaadsVal: "広告マネージャー（キャンペーン）を使用して、自分の州の人々にアプローチし、パーソナライズされた配送を提供します。",
      streamingLbl: "編集と配信:",
      streamingVal: "📱 スマホでの 📱 XRecorderやCapCutを使った録画・編集、または 💻 パソコンでの 🎥 OBS、👾 Veadotube Mini、🔌 USBデバッグによるScrcpy、アバターとスマホ画面用の 💻 JavaScriptを使ったプロ仕様のライブ配信と動画制作。"
    },
    pt: {
      principal: "Olá mundo! Sou o Lorenzo",
      sub: "Empreendedor, criador e desenvolvedor web.",
      datos: "👤 Sobre mim:",
      nacimientoLbl: "Nascimento:",
      nacimientoVal: "9 de dezembro de 1999.",
      ubicacionLbl: "Localização:",
      ubicacionVal: "Buenos Aires, Argentina 🇦🇷",
      educacionLbl: "Educação:",
      educacionVal: "E.E.S. N°3.",
      haciendo: "O que estou fazendo:",
      hobbiesLbl: "Hobbies:",
      hobbiesVal: "Assistir ▶️ YouTube, 📷 Instagram, 🎵 TikTok ou conversar no 🎮 Discord.",
      marketingLbl: "Marketing e Vendas:",
      marketingVal: "Criação de páginas do 🌐 Facebook sobre produtos nutricionais, saúde e cuidados com a pele, conectando 🔗 links diretos para o 💬 WhatsApp.",
      metaadsLbl: "Meta Ads:",
      metaadsVal: "Uso do Gerenciador de Anúncios (campanhas) para alcançar pessoas da minha província e oferecer entregas personalizadas.",
      streamingLbl: "Edição e Streaming:",
      streamingVal: "Gravação e edição com 📱 XRecorder e CapCut no 📱 celular, ou lives e vídeos profissionais no 💻 PC usando 🎥 OBS, 👾 Veadotube Mini, Scrcpy via 🔌 depuração USB e 💻 JavaScript para o avatar e a tela do celular."
    },
    it: {
      principal: "Ciao mondo! Sono Lorenzo",
      sub: "Imprenditore, creatore e sviluppatore web.",
      datos: "👤 Su di me:",
      nacimientoLbl: "Nascita:",
      nacimientoVal: "9 dicembre 1999.",
      ubicacionLbl: "Posizione:",
      ubicacionVal: "Buenos Aires, Argentina 🇦🇷",
      educacionLbl: "Istruzione:",
      educacionVal: "E.E.S. N°3.",
      haciendo: "Cosa sto facendo:",
      hobbiesLbl: "Hobby:",
      hobbiesVal: "Guardare ▶️ YouTube, 📷 Instagram, 🎵 TikTok o chattare su 🎮 Discord.",
      marketingLbl: "Marketing e Vendite:",
      marketingVal: "Creazione di pagine 🌐 Facebook su prodotti nutrizionali, salute e cura della pelle, collegando 🔗 link diretti a 💬 WhatsApp.",
      metaadsLbl: "Meta Ads:",
      metaadsVal: "Utilizzo di Gestione inserzioni (campagne) per raggiungere persone nella mia provincia e offrire spedizioni personalizzate.",
      streamingLbl: "Editing e Streaming:",
      streamingVal: "Registrazione ed editing con 📱 XRecorder e CapCut sul 📱 cellulare, o live e video pro sul 💻 PC usando 🎥 OBS, 👾 Veadotube Mini, Scrcpy tramite 🔌 debug USB e 💻 JavaScript per l'avatar e lo schermo del telefono."
    },
    fr: {
      principal: "Bonjour le monde ! Je suis Lorenzo",
      sub: "Entrepreneur, créateur et développeur web.",
      datos: "👤 À propos de moi :",
      nacimientoLbl: "Naissance :",
      nacimientoVal: "9 décembre 1999.",
      ubicacionLbl: "Emplacement :",
      ubicacionVal: "Buenos Aires, Argentine 🇦🇷",
      educacionLbl: "Éducation :",
      educacionVal: "E.E.S. N°3.",
      haciendo: "Ce que je fais :",
      hobbiesLbl: "Loisirs :",
      hobbiesVal: "Regarder ▶️ YouTube, 📷 Instagram, 🎵 TikTok ou discuter sur 🎮 Discord.",
      marketingLbl: "Marketing et Ventes :",
      marketingVal: "Création de pages 🌐 Facebook sur les produits nutritionnels, la santé et les soins de la peau, en connectant 🔗 des liens directs vers 💬 WhatsApp.",
      metaadsLbl: "Meta Ads :",
      metaadsVal: "Utilisation du Gestionnaire de publicités (campagnes) pour atteindre des personnes de ma province et proposer des envois personnalisés.",
      streamingLbl: "Montage et Streaming :",
      streamingVal: "Enregistrement et montage avec 📱 XRecorder et CapCut sur le 📱 téléphone, ou des lives et vidéos pro sur le 💻 PC en utilisant 🎥 OBS, 👾 Veadotube Mini, Scrcpy via 🔌 débogage USB et 💻 JavaScript pour l'avatar et l'écran du téléphone."
    }
  };

  if (textos[lang]) {
    document.getElementById("texto-principal").innerText = textos[lang].principal;
    document.getElementById("subtitulo").innerText = textos[lang].sub;
    document.getElementById("titulo-datos").innerText = textos[lang].datos;
    document.getElementById("txt-nacimiento-lbl").innerText = textos[lang].nacimientoLbl;
    document.getElementById("txt-nacimiento-val").innerText = textos[lang].nacimientoVal;
    document.getElementById("txt-ubicacion-lbl").innerText = textos[lang].ubicacionLbl;
    document.getElementById("txt-ubicacion-val").innerText = textos[lang].ubicacionVal;
    document.getElementById("txt-educacion-lbl").innerText = textos[lang].educacionLbl;
    document.getElementById("txt-educacion-val").innerText = textos[lang].educacionVal;
    document.getElementById("titulo-haciendo").innerText = textos[lang].haciendo;
    document.getElementById("txt-hobbies-lbl").innerText = textos[lang].hobbiesLbl;
    document.getElementById("txt-hobbies-val").innerText = textos[lang].hobbiesVal;
    document.getElementById("txt-marketing-lbl").innerText = textos[lang].marketingLbl;
    document.getElementById("txt-marketing-val").innerText = textos[lang].marketingVal;
    document.getElementById("txt-metaads-lbl").innerText = textos[lang].metaadsLbl;
    document.getElementById("txt-metaads-val").innerText = textos[lang].metaadsVal;
    document.getElementById("txt-streaming-lbl").innerText = textos[lang].streamingLbl;
    document.getElementById("txt-streaming-val").innerText = textos[lang].streamingVal;
  }
}

function alternarModo() {
  const body = document.body;
  if (body.style.backgroundColor === "rgb(18, 18, 18)" || body.style.backgroundColor === "#121212" || body.style.backgroundColor === "") {
    body.style.backgroundColor = "#f4f4f4";
    body.style.color = "#121212";
  } else {
    body.style.backgroundColor = "#121212";
    body.style.color = "white";
  }
}

function alternarMusica() {
  const musica = document.getElementById("musica-fondo");
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
}
