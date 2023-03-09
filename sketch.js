let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro1;

function preload(){
    imagemDaEstrada = loadImage("imagens/estrada.png");
    imagemDoAtor = loadImage("imagens/ator-1.png");
  	imagemDoCarro1 = loadImage("imagens/carro-1.png");
 	
}

function setup(){
    createCanvas(500,400);
}

function draw(){
    background(imagemDaEstrada);
  image(imagemDoAtor, 100, 366, 30, 30);
  image(imagemDoCarro1, 420, 40, 50, 40);
} 