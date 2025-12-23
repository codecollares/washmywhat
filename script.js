const botaoGato = document.getElementById('gatos');
const botaoMoney = document.getElementById('money');
const botaoBelly = document.getElementById('belly');

const imagemPrincipal = document.getElementById('imagem-principal');
const texto = document.getElementById("textoBelly");

async function buscarGatos() {

    texto.style.display = "none";
    
    try {
        const urlGato = "https://api.thecatapi.com/v1/images/search";
        const minhaChave = "live_CqMALKYeaEd79cos1d628OeKwK6H0NfapXvWmViRGk9iNs4jYyBjIracZaU6xGP0";
        const configuracao = {
            headers: {
                'x-api-key': minhaChave
            }
        };

        const respostaGato = await fetch(urlGato, configuracao);
        const dadosGato = await respostaGato.json();

        console.log(dadosGato);

        if (dadosGato.length > 0) {
            imagemPrincipal.src = dadosGato[0].url; 
            imagemPrincipal.alt = "Gatos uau";
        } else {
            console.log("Ops, parece que o gato fugiu!");
        }

    } catch (erro) {
        console.error("O gato se perdeu no caminho, eita!", erro);
    }
}

botaoGato.addEventListener('click', buscarGatos);
botaoMoney.addEventListener('click', buscarMoney);
botaoBelly.addEventListener('click', buscarBelly);

function buscarMoney() {
    texto.style.display = "none";
    const random = Date.now();
    const link = `https://loremflickr.com/500/400/laundromat,washingmachine?random=${random}`;

    imagemPrincipal.src = link;
    imagemPrincipal.alt = "Hora de lavar papéis nada suspeitos!";
}

function buscarBelly() {
    const lista = ["https://i.ibb.co/fG2Dws73/artworks-4lyzb1-CUF41-Vc-RNY-Apt-OOg-t1080x1080.webp",
        "https://i.ibb.co/YBGsDZJD/Screenshot-246.png",
        "https://i.ibb.co/kCtF2dY/Screenshot-247.png",
        "https://i.ibb.co/cXxNR8ZN/Screenshot-248.png",
        "https://i.ibb.co/rGkkw0M0/Screenshot-249.png"
    ];
    const indiceAleatorio = Math.floor(Math.random() * lista.length);
    const imagemEscolhida = lista[indiceAleatorio];

    document.getElementById("imagem-principal").src = imagemEscolhida;
    texto.style.display = "block";
}