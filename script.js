const traducciones = {
    es: { saludo: "¡Hola mundo! Soy Lorenzo" },
    en: { saludo: "Hello world! I am Lorenzo" },
    jp: { saludo: "こんにちは世界！私はロレンソです" },
    pt: { saludo: "Olá mundo! Eu sou o Lorenzo" },
    it: { saludo: "Ciao mondo! Sono Lorenzo" },
    fr: { saludo: "Bonjour le monde ! Je suis Lorenzo" }
};

function cambiarIdioma(idioma) {
    const elemento = document.getElementById("texto-principal");
    elemento.innerText = traducciones[idioma].saludo;
}
