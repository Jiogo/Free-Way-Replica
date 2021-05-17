let xAtor = 80;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  
   if (keyIsDown(DOWN_ARROW)){
    if (yAtor < 366){
     yAtor += 3;
   }
 }
  
  if (keyIsDown(LEFT_ARROW)){
    if (xAtor > 0){
    xAtor -= 1.5;
   }
}
  
  if (keyIsDown(RIGHT_ARROW)){
    if(xAtor < 470){
    xAtor += 1.5;
   }   
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
  if (colisao){
    colidiu();
    if (meusPontos > 0){
      meusPontos -= 1;
      somDaColisao.play();
    }
  }
  }
}

function colidiu(){
  yAtor = 366
}

function incluiPontos(){
  textAlign(CENTER)
  textSize(25)
  fill(color(0, 0, 0))
  text(meusPontos, width / 5, 27)
}

function marcaPontos(){
  if (yAtor < 15){
    meusPontos += 1;
    colidiu();
    somDoPonto.play();
  }
}