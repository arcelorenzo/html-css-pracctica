function cambiarIdioma(lang) {
  const textos = {
    es: {
      principal: "¡Hola mundo! Soy Lorenzo",
      sub: "Este es mi primer proyecto guardado en GitHub.",
      datos: "👤 Datos sobre mí:",
      nacimiento: "Nacimiento:",
      ubicacion: "Ubicación:",
      educacion: "Educación:",
      haciendo: "Lo que ando haciendo:",
      hobbies: "Hobbies:",
      marketing: "Marketing y Ventas:",
      metaads: "Meta Ads:",
      streaming: "Edición y Streaming:"
    },
    en: {
      principal: "Hello world! I'm Lorenzo",
      sub: "This is my first project saved on GitHub.",
      datos: "👤 About me:",
      nacimiento: "Birth:",
      ubicacion: "Location:",
      educacion: "Education:",
      haciendo: "What I'm doing:",
      hobbies: "Hobbies:",
      marketing: "Marketing & Sales:",
      metaads: "Meta Ads:",
      streaming: "Editing & Streaming:"
    },
    jp: {
      principal: "ハローワールド！ロレンソです",
      sub: "これはGitHubに保存した私の最初のプロジェクトです。",
      datos: "👤 自己紹介:",
      nacimiento: "生年月日:",
      ubicacion: "場所:",
      educacion: "学歴:",
      haciendo: "現在の活動:",
      hobbies: "趣味:",
      marketing: "マーケティングと販売:",
      metaads: "メタ広告:",
      streaming: "編集と配信:"
    },
    pt: {
      principal: "Olá mundo! Sou o Lorenzo",
      sub: "Este é meu primeiro projeto salvo no GitHub.",
      datos: "👤 Sobre mim:",
      nacimiento: "Nascimento:",
      ubicacion: "Localização:",
      educacion: "Educação:",
      haciendo: "O que estou fazendo:",
      hobbies: "Hobbies:",
      marketing: "Marketing e Vendas:",
      metaads: "Meta Ads:",
      streaming: "Edição e Streaming:"
    },
    it: {
      principal: "Ciao mondo! Sono Lorenzo",
      sub: "Questo è il mio primo progetto salvato su GitHub.",
      datos: "👤 Su di me:",
      nacimiento: "Nascita:",
      ubicacion: "Posizione:",
      educacion: "Istruzione:",
      haciendo: "Cosa sto facendo:",
      hobbies: "Hobby:",
      marketing: "Marketing e Vendite:",
      metaads: "Meta Ads:",
      streaming: "Editing e Streaming:"
    },
    fr: {
      principal: "Bonjour le monde ! Je suis Lorenzo",
      sub: "C'est mon premier projet enregistré sur GitHub.",
      datos: "👤 À propos de moi :",
      nacimiento: "Naissance :",
      ubicacion: "Emplacement :",
      educacion: "Éducation :",
      haciendo: "Ce que je fais :",
      hobbies: "Loisirs :",
      marketing: "Marketing et Ventes :",
      metaads: "Meta Ads :",
      streaming: "Montage et Streaming :"
    }
  };

  if (textos[lang]) {
    document.getElementById("texto-principal").innerText = textos[lang].principal;
    document.getElementById("subtitulo").innerText = textos[lang].sub;
    document.getElementById("titulo-datos").innerText = textos[lang].datos;
    document.getElementById("txt-nacimiento").innerText = textos[lang].nacimiento;
    document.getElementById("txt-ubicacion").innerText = textos[lang].ubicacion;
    document.getElementById("txt-educacion").innerText = textos[lang].educacion;
    document.getElementById("titulo-haciendo").innerText = textos[lang].haciendo;
    document.getElementById("txt-hobbies").innerText = textos[lang].hobbies;
    document.getElementById("txt-marketing").innerText = textos[lang].marketing;
    document.getElementById("txt-metaads").innerText = textos[lang].metaads;
    document.getElementById("txt-streaming").innerText = textos[lang].streaming;
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
