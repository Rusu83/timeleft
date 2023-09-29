var hli,mli;
var hl,ml;
var h,m,s;
var blu;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight-25);
  
  hl=15;
  ml=55;
  
  hli=createInput();
  hli.size(20,15);
  hli.input(ult);
  
  mli=createInput();
  mli.size(20,15);
  mli.input(ult);
  
  blu=createButton('enter');
  blu.mousePressed(ult);
  
  textAlign(CENTER,CENTER);
  textSize(height/5);
  
  frameRate(2);
}

function draw() {
  background(255,215,215);
  
  m=(hl*60+ml)-(hour()*60+minute());
  h=int(m/60);
  m=m-h*60;
  s=60-second();
  
  text(hl+':'+ml+'\n'+(h*60+m)+'\n'+h+':'+m+':'+s,width/2,height/2);
}

function ult(){
  hl=int(hli.value());
  ml=int(mli.value());
}
