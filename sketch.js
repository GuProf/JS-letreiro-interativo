let palavra;

function setup() {
  
  createCanvas(400, 400);
  
  palavra=palavraAleatoria();
  
}

function palavraAleatoria() {
  
  let palavras = ["Boa aula", "Bora programar", "Bom dia!"];
  
  return random(palavras);
  
}

function inicializaCores() {
  
  background("white");
  fill("blue");
  textSize(54);
  textAlign(CENTER, CENTER);
  
}

function palavraParcial(minimo,maximo){
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0,quantidade); //variável parcial, ou seja, que irá pegar letra por letra da palavra.
  return parcial;
}

function draw() {
  
  inicializaCores();
      
  
  let texto = palavraParcial(0,width);
  text(texto,200,200);
}