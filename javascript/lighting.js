var startX;
var startY;
var endX;
var endY;
var r;
var g;
var b;
var lightingCount;
var textsize; 
var xpos;
var ypos;
var backgroundColor;
function setup() {
  startX = 0;
  startY = 150;
  endX = 0;
  endY = 150;
  lightingCount=0;
  backgroundColor = false;
  var canvas = createCanvas(750, 750);
  strokeWeight(5);
  background(0);


  //println((int)(Math.random() * 20-10));
}
function draw() {
  lighting();
  backgroundColorChanger();
  if (backgroundColor==true&&lightingCount>0) {
    fill(0);
    textSize(25);
    text("if you see this text you have had " + lightingCount + " Lighting Strikes ", 75, 100);
    textSize(textsize);
    text("YIPPE", xpos,ypos);
  }
  if(lightingCount==0){
  fill(255);
  textSize(30);
  text("click to see lighting stike", 175,350);
  }
}
function lighting() {
  stroke(r, g, b);
  while (endX<760) {
    endX = startX + ((int)(Math.random() * 10));
    endY = startY + ((int)(Math.random() * 20-10));
    line(startX, startY, endX, endY);
    startX = endX;
    startY=endY;
  }
}
function mousePressed() {
  startX = 0;
  startY = (int)(Math.random()*300+150);
  endX = 0;
  endY = 150;
  randomizer();
  background(0);
  lightingCount++;
  backgroundColor=false;
}
function backgroundColorChanger() {
  if (lightingCount%5==0) {
    background(r, g, b);
    backgroundColor = true;
  }
}
function randomizer(){
  r = (int)(Math.random() * 255);
  g = (int)(Math.random() * 255);
  b = (int)(Math.random() * 255);
 textsize=(int)(Math.random()*150);
 xpos=(int)(Math.random()*200 + 50);
 ypos=(int)(Math.random()*200+200);
}