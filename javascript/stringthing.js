//import java.util.ArrayList;
//ArrayList<String> Helloworlds = new ArrayList<String>();
var s2 = ''; 
var s = "Hello World";
console.log(s);
var xpos=0;

var xpos1 = 0;
var xpos2 = 0;
var xpos3  = 0; 
var xpos4 = 0; 
var ypos0  = 0;
var ypos1 = 0;
var ypos2 = 0;
var ypos3 = 0;
var ypos4 = 0;
var acc0 = 0;
var acc1 = 0;
var acc2 = 0; 
var acc3 = 0; 
var acc4 = 0;
var counter = 0;
//float ypos = random(0, 600);
//float timer = 0;
var x = 0;
var red0 = random(0, 256);
var green0 =random(0, 256);
var blue0 =random(0, 256);
var red1 = random(0, 256);
var green1 = random(0, 256);
var blue1 = random(0, 256);
var red2 = random(0, 256);
var green2 = random(0, 256);
var blue2 = random(0, 256);
var red3 = random(0, 256);
var green3 = random(0, 256);
var blue3 = random(0, 256);
var red4 = random(0, 256);
var green4 =random(0, 256);
var blue4 = random(0, 256);
var red5 = random(0, 256);
var green5 = random(0, 256);
var blue5 = random(0, 256);


function setup() {
  var canvas=createCanvas(1100, 1100);
  acc0 = Math.floor(random(0, 25));
  console.log(acc0);
  acc1 = random(0, 25);
  acc2 =  random(0, 25);
  acc3 = random(0, 25);
  acc4 = random(0, 25);
  ypos0=random(0, 200);
  ypos1=random(200, 400);
  ypos2=random(400, 600);
  ypos3=random(600, 800);
  ypos4=random(800, 1000);
}

function draw() {
  background(red5, green5, blue5);
  textSize(64);

  fill(red0, green0, blue0);
  text(s, xpos, ypos0); //first text
  xpos +=acc0;
  if (xpos >= 1100) {
    xpos=random(-200, -100);
    ypos0=random(0, 200);
    acc0 = random(0, 25);
    red0 = int(random(0, 256));
    green0 = int(random(0, 256));
    blue0 = int(random(0, 256));
    counter++;
  }

  fill(red1, green1, blue1);
  text(s, xpos1, ypos1); //second text
  xpos1+= acc1;
  if (xpos1 >= 1100) {
    xpos1=random(-200, -100);
    ypos1=random(200, 400);
    acc1 = random(0, 25);
    red1 = int(random(0, 256));
    green1 = int(random(0, 256));
    blue1 = int(random(0, 256));
    counter++;
  }

  fill(red2, green2, blue2);
  text(s, xpos2, ypos2); // third text
  xpos2+=acc2;
  if (xpos2 >= 1100) {
    xpos2=random(-200, -100);
    ypos2=random(400, 600);
    acc2 = random(0, 25);
    red2 = int(random(0, 256));
    green2 = int(random(0, 256));
    blue2 = int(random(0, 256));
    counter++;
  }

  fill(red3, green3, blue3); //fourth text
  text(s, xpos3, ypos3);
  xpos3+=acc3;
  if (xpos3 >= 1100) {
    xpos3=random(-200, -100);
    ypos3=random(600, 800);
    acc3 = random(0, 25);
    red3 = int(random(0, 256));
    green3 = int(random(0, 256));
    blue3 = int(random(0, 256));
    counter++;
  }

  fill(red4, green4, blue4);
  text(s, xpos4, ypos4); // fifth text
  xpos4+=acc4;
  if (xpos4 >= 1100) {
    xpos4=random(-200, -100);
    ypos4=random(800, 1000);
    acc4 = random(0, 25);
    red4 = int(random(0, 256));
    green4 = int(random(0, 256));
    blue4 = int(random(0, 256));
    counter++;
  }
  if (counter == 5) {
    red5 = int(random(0, 256));
    green5 = int(random(0, 256));
    blue5 = int(random(0, 256));
    counter = 0;
  }
}
/*while (timer < 2) { possible timer
 if (timer == 1) {
 text(Helloworlds.get(x), 100, 100);
 x++;
 timer=0;
 //xpos1=xpos1+30;
 } else
 timer+=.04;
 }
 //text(Helloworlds.get(10), 100, 100);*/

/*if(fontnum == 1.0){
 textFont(Font1);
 textSize(30);
 text(s,100,100);
 }
 if(fontnum == 2.0){ Font Randomizer 
 textFont(Font2);
 textSize(30);
 text(s,100,600);
 }
 if(fontnum == 3.0){
 textFont(Font3);
 textSize(30);
 text(s,50,100);
 }
 if(fontnum == 4.0){
 textFont(Font4);
 textSize(30);
 text(s,400,100);
 }
 if(fontnum == 5.0){
 textFont(Font5);
 textSize(30);
 text(s,300,300);
 } 
 PFont Font1 = createFont("Agency FB", 10);
 PFont Font2 = createFont("SansSerif.italic", 10);
 PFont Font3 = createFont("Light Microsoft", 10);
 PFont Font4 = createFont("Arial", 10);
 PFont Font5 = createFont("Regular", 10);
 
 float fontnum = int(random(1, 6));*/



//println(PFont.list());
/*for (int k = 0; k < 2; k++) { Diffrent color letters attempted
 for (int i = 0; i<s.length(); i++) {
 float red = int(random(0, 256));
 float green = int(random(0, 256));
 float blue = int(random(0, 256));
 String letter = s.substring(i, i+1);
 fill(red, green, blue);
 //text(letter, xpos, ypos);
 xpos += textWidth(letter);
 s2 = s2 + letter;
 Helloworlds.add(s2);
 }
 
 s2 ="";
 }*/
//background(255);
/*text(Helloworlds.get(0), 100, 100);
 text(Helloworlds.get(1), 100, 500);*/ 