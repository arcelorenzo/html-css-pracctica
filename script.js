const traducciones = {
    es: {
        saludo: "¡Hola mundo! Soy Lorenzo",
        subtitulo: "Este es my primer proyecto guardado en GitHub.",
        tituloDatos: "👤 Datos sobre mí:",
        nacimiento: "Nacimiento:",
        ubicacion: "Ubicación:",
        educacion: "Educación:",
        tituloHaciendo: "Lo que ando haciendo:",
        hobbies: "Hobbies: Mirar YouTube, Instagram, TikTok o chatear en Discord. ¡Y obvio, pasar tiempo con mi gordo de rayas de gatito 🐈!",
        marketing: "Marketing y Ventas: Creación de páginas de Facebook sobre productos nutricionales, salud y cuidado de la piel, conectando enlaces directos a WhatsApp.",
        metaAds: "Meta Ads: Uso del Administrador de Anuncios (campañas) para llegar a personas de mi provincia y ofrecer envíos personalizados.",
        streaming: "Edición y Streaming: Grabación y edición con XRecorder y CapCut en el celu, o directos y videos pro en la PC usando OBS, Veadotube Mini y Scrcpy por depuración USB para el avatar y la pantalla del celu."
    },
    en: {
        saludo: "Hello world! I am Lorenzo",
        subtitulo: "This is my first project saved on GitHub.",
        tituloDatos: "👤 About me:",
        nacimiento: "Birthday:",
        ubicacion: "Location:",
        educacion: "Education:",
        tituloHaciendo: "What I'm currently doing:",
        hobbies: "Hobbies: Watching YouTube, Instagram, TikTok or chatting on Discord. And of course, spending time with my chubby striped kitty cat 🐈!",
        marketing: "Marketing and Sales: Creating Facebook pages about nutritional products, health and skin care, connecting direct links to WhatsApp.",
        metaAds: "Meta Ads: Using the Ads Manager (campaigns) to reach people in my province and offer custom shipping.",
        streaming: "Editing and Streaming: Recording and editing with XRecorder and CapCut on mobile, or pro streams and videos on PC using OBS, Veadotube Mini, and Scrcpy via USB debugging for the avatar and phone screen."
    },
    jp: {
        saludo: "こんにちは世界！私はロレンソです",
        subtitulo: "これはGitHubに保存した私の最初のプロジェクトです。",
        tituloDatos: "👤 自己紹介:",
        nacimiento: "誕生日:",
        ubicacion: "場所:",
        educacion: "学歴:",
        tituloHaciendo: "現在取り組んでいること:",
        hobbies: "趣味：YouTube、Instagram、TikTokを見ること、またはDiscordでチャットすること。もちろん、しま模様の愛猫と一緒に過ごす時間も！🐈",
        marketing: "マーケティングと販売：栄養製品、健康、スキンケアに関するFacebookページを作成し、WhatsAppへのダイレクトリンクを接続します。",
        metaAds: "Meta広告：広告マネージャー（キャンペーン）を使用して、自分の地域のユーザーにアプローチし、カスタム配送を提供します。",
        streaming: "編集と配信：スマホでXRecorderやCapCutを使った録画・編集、またはPCでOBS、Veadotube Mini、USBデバッグ経由のScrcpyを使ったプロ仕様の配信や動画制作。"
    },
    pt: {
        saludo: "Olá mundo! Eu sou o Lorenzo",
        subtitulo: "Este é meu primeiro projeto salvo no GitHub.",
        tituloDatos: "👤 Sobre mim:",
        nacimiento: "Nascimento:",
        ubicacion: "Localização:",
        educacion: "Educação:",
        tituloHaciendo: "O que estou fazendo:",
        hobbies: "Hobbies: Assistir YouTube, Instagram, TikTok ou bater papo no Discord. E claro, passar tempo com meu gatinho listrado 🐈!",
        marketing: "Marketing e Vendas: Criação de páginas no Facebook sobre produtos nutricionais, saúde e cuidados com a pele, conectando links diretos para o WhatsApp.",
        metaAds: "Meta Ads: Uso do Gerenciador de Anúncios (campanhas) para alcançar pessoas da minha província e oferecer envios personalizados.",
        streaming: "Edição e Streaming: Gravação e edição com XRecorder e CapCut no celular, ou lives e vídeos profissionais no PC usando OBS, Veadotube Mini e Scrcpy por depuração USB."
    },
    it: {
        saludo: "Ciao mondo! Sono Lorenzo",
        subtitulo: "Questo è il mio primo progetto salvato su GitHub.",
        tituloDatos: "👤 Chi sono:",
        nacimiento: "Data di nascita:",
        ubicacion: "Posizione:",
        educacion: "Istruzione:",
        tituloHaciendo: "Cosa sto facendo:",
        hobbies: "Hobby: Guardare YouTube, Instagram, TikTok o chattare su Discord. E ovviamente, passare del tempo con il mio gattino tigrato 🐈!",
        marketing: "Marketing e Vendite: Creazione di pagine Facebook su prodotti nutrizionali, salute e cura della pelle, collegando link diretti a WhatsApp.",
        metaAds: "Meta Ads: Utilizzo di Gestione inserzioni per raggiungere persone nella mia provincia e offrire spedizioni personalizzate.",
        streaming: "Editing e Streaming: Registrazione e montaggio con XRecorder e CapCut da mobile, o streaming e video pro su PC usando OBS, Veadotube Mini e Scrcpy via USB."
    },
    fr: {
        saludo: "Bonjour le monde ! Je suis Lorenzo",
        subtitulo: "C'est mon premier projet enregistré sur GitHub.",
        tituloDatos: "👤 À propos de moi :",
        nacimiento: "Naissance :",
        ubicacion: "Emplacement :",
        educacion: "Éducation :",
        tituloHaciendo: "Ce que je fais en ce moment :",
        hobbies: "Loisirs : Regarder YouTube, Instagram, TikTok ou discuter sur Discord. Et bien sûr, passer du temps avec mon chat tigré 🐈 !",
        marketing: "Marketing et Vente : Création de pages Facebook sur les produits nutritionnels, la santé et les soins de la peau, avec des liens directs vers WhatsApp.",
        metaAds: "Meta Ads : Utilisation du Gestionnaire de publicités pour toucher les gens de ma province et proposer des livraisons personnalisées.",
        streaming: "Montage et Streaming : Enregistrement et montage avec XRecorder et CapCut sur mobile, ou streams et vidéos pro sur PC avec OBS, Veadotube Mini et Scrcpy via débogage USB."
    }
};

function cambiarIdioma(idioma) {
    const t = traducciones[idioma];
    
    document.getElementById("texto-principal").innerText = t.saludo;
    document.getElementById("subtitulo").innerText = t.subtitulo;
    document.getElementById("titulo-datos").innerText = t.tituloDatos;
    document.getElementById("txt-nacimiento").innerText = t.nacimiento;
    document.getElementById("txt-ubicacion").innerText = t.ubicacion;
    document.getElementById("txt-educacion").innerText = t.educacion;
    document.getElementById("titulo-haciendo").innerText = t.tituloHaciendo;
    document.getElementById("txt-hobbies").innerText = t.hobbies;
    document.getElementById("txt-marketing").innerText = t.marketing;
    document.getElementById("txt-metaads").innerText = t.metaAds;
    document.getElementById("txt-streaming").innerText = t.streaming;
}
