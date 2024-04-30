let canvax=600;
let canvay=600;
let radio = 15;
let val = 0;

let rojox= 200;
let rojoy= 170;
let direccionxr = 1;
let direccionyr = 1;
let velocidadr = 10;
let cr ;
let Gr;
let Br;
let Gr2;
let Br2;
//let colorR = color(255,0,0);

let azulx= 25;
let azuly= 225;
let direccionxa = 1;
let direccionya = 1;
let velocidada = 3;
let ca;
let Ga;
let Ra;
let Ga2;
let Ra2;
//let colorA = color(0,0,255);

function setup() {
  createCanvas(canvax,canvay);
  cr = color(255,0,0);
  ca = color(0,0,255);
  time = millis();
}

function draw() {
  background(200);
  fill(cr);
  ellipse(rojox,rojoy,radio*2);
  
  fill(ca);
  ellipse(azulx,azuly,radio*2);
  
  let distance = dist(rojox,rojox, azulx,azulx);
  let distances = dist(rojoy,rojoy, azuly,azuly);
  
  reboteR();
  reboteA();
  reboteB(distance,distances);
  
  
  
  rojox =  rojox + velocidadr * direccionxr;
  rojoy =  rojoy + velocidadr * direccionyr;
  
  azulx =  azulx + velocidada * direccionxa;
  azuly =  azuly + velocidada * direccionya;
  
  text(distance,20,20);
}

function reboteB(distance,distances){
  if(distance <= radio*2 && distances <= radio*2){
    
   direccionxr = direccionxr * -1; 
   direccionyr = direccionyr * -1; 
   if(direccionxr == -1 && direccionxa == -1 ||direccionxr == 1 && direccionxa == 1){
   direccionxa = direccionxa * -1; 
   }
   if(direccionyr == -1 && direccionya == -1 ||direccionyr == 1 && direccionya == 1){
   direccionya = direccionya * -1; 
   }
   
   Br =255;
   Gr = 0;
  cr = color(255,Gr,Br);
  
  Ra =255;
   Ga = 0;
  ca = color(255,Gr,Br);
  val = 1;
  }
  if(val == 1){
  Br =Br - 2;
  cr = color(255,Gr,Br);
  
  Ra =Ra - 2;
  ca = color(Ra,Ga,255);
  
  }
  if(time == 1500){
  val = 0;}
}

function reboteR(){
if(rojox  >= canvax-radio || rojox  <= 0+radio){
  direccionxr = direccionxr *-1;
  }
  if(rojoy >= canvay-radio || rojoy <= 0+radio){
  direccionyr = direccionyr *-1;
  }
  if(rojoy <= 0+radio){
    Br = random(256);
    Gr = random(256);
    Br2 = 255 - Br;
    Gr2 = 255 - Gr;
  cr = color(255,Gr,Br);}
}

function reboteA(){
if(azulx >= canvax-radio || azulx <= 0+radio){
  direccionxa = direccionxa *-1;
  }
  if(azuly >= canvay-radio || azuly <= 0+radio){
  direccionya = direccionya *-1;
  }
  if(azuly >= canvay-radio){
    Ra = random(256);
    Ga = random(256);
  ca = color(Ra,Ga,255);}
}
