/* iniciando variaveis para guardar os valores de dimensões da janela do browser */
var altura = 0;
var largura = 0;

/* função que guarda os valores do browser para manipular de forma que a pagina fique estatica */
function dimensoes() {
  altura = window.innerHeight;
  largura = window.innerWidth;
  console.log(altura, largura);
}

/* chamando a função para que as variveis altura e lergura sejam setadas */
dimensoes();

/* iniciando a variavel que alterara a classe */
let classe = 0;

/* função gera um número random para classes */
function tamanhoMosca() {
  classe = Math.random() * 4;
}

/* mesma lógica da função de cima */
let lado = 0;
function ladoMosca() {
  lado = Math.random() * 2;
}

/* incluindo elemento no body da pagina, identificando o elemento, configurando como queremos e depois adicionando na página 
configuramos a posição horizontal e vertical e a class para mais configurações no css*/

/* variavel auxiliar para contar as vidas que restam */
let contadorVida = 0;
let img;

function moscas() {
  /* removendo a mosca que já existe */
  if (document.getElementById("mosca")) {
    document.getElementById("mosca").remove();
    contadorVida++;
    if (contadorVida == 1) {
      img = document.getElementById("vida1");
      img.src = "./imagens/coracao_vazio.png";
    } else if (contadorVida == 2) {
      img = document.getElementById("vida2");
      img.src = "./imagens/coracao_vazio.png";
    } else if (contadorVida == 3) {
      img = document.getElementById("vida3");
      img.src = "./imagens/coracao_vazio.png";
      window.location.href = "gameOver.html";
    }
  }

  /* chamando as funções para serem executadas e gerar um novo tamanho, e lado em cada novo criado */
  tamanhoMosca();
  ladoMosca();

  /* gerar valores aleatorio para a posição da mosca, e o math.floor faz com que arredonde para baixo */
  let x = Math.floor(Math.random() * largura) - 150;
  let y = Math.floor(Math.random() * altura) - 90;

  /* verificação para a imagem não sair da tela */
  if (x < 0) {
    x = 0;
  }
  if (y < 0) {
    y = 0;
  }

  let mosca = document.createElement("img");
  mosca.src = "./imagens/mosca.png";

  /* manipulando o tamanho do objeto */

  classe < 0
    ? (mosca.className = "mosca1")
    : classe < 1
    ? (mosca.className = "mosca2")
    : classe < 2
    ? (mosca.className = "mosca3")
    : (mosca.className = "mosca4");
  /*
if (classe < 1) {
    mosca.className = "mosca1"
} else if (classe < 2) {
  mosca.className = "mosca2";
} else {
  mosca.className = "mosca3";
}*/

  /* manipulando o lado que o objeto vai estar virado */

  lado < 1
    ? (mosca.style.transform = "rotateY(180deg)")
    : (mosca.style.transform = "none");

  mosca.style.left = x + "px";
  mosca.style.top = y + "px";
  mosca.style.position = "absolute";
  mosca.id = "mosca";
  mosca.onclick = function () {
    document.getElementById("mosca").remove();
  };
  document.body.appendChild(mosca);
}

/* configs para gameover quando a pessoa perder */

function gameOver() {
  window.location.href = "gameOver.html";
}

// tratar a dificuldade do jogo
let tempo = 1500;
let dificuldade = window.location.search;
dificuldade = dificuldade.replace("?", "");
if (dificuldade === "leticia") {
  window.location.href = "winLeticia.html";
} else if (dificuldade === "facil") {
  tempo = 2000;
} else if (dificuldade === "dificil") {
  tempo = 1000;
}
