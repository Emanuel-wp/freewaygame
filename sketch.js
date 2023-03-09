let imagemDaEstrada;
let imagemDoAtor;

function preload(){
    imagemDaEstrada = loadImage("imagens/estrada.png");
    imagemDoAtor = loadImage("imagens/ator.png");
}

function setup(){
    createCanvas(500,400);
}

function draw(){
    background(imagemDaEstrada);
} 