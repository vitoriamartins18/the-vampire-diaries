const frases = [
    "Olá, irmão.",
    "O amor é a emoção mais poderosa.",
    "Mystic Falls guarda muitos segredos.",
    "Algumas escolhas mudam tudo.",
    "Nem todos os monstros parecem monstros."
];

function novaFrase(){

    let numero = Math.floor(Math.random() * frases.length);

    document.getElementById("frase").innerHTML = frases[numero];

}

function quiz(personagem){

    let resposta = "";

    if(personagem == "damon"){
        resposta = "🩸 Você seria Damon Salvatore!";
    }

    if(personagem == "stefan"){
        resposta = "🌙 Você seria Stefan Salvatore!";
    }

    if(personagem == "elena"){
        resposta = "❤️ Você seria Elena Gilbert!";
    }

    document.getElementById("resultado").innerHTML = resposta;

}