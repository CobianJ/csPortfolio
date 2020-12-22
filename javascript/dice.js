let dice = [9];
//Die dice1;
var dicecounter;
var x;
var y;
var total1;
let Primes = [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53];
var isPrime;
function setup() {
  dicecounter = 0;
  x = 125;
  y = 150;
  createCanvas(750, 750);
  background(0);
  //dice1 = new Die(50, 50);
  //The Dice Creator
  for (var i = 0; i < 3; i++) {
    dice[dicecounter] = new Die(x, y);
    dicecounter++;
    for (var k = 0; k < 2; k++) { 
      y += 150;
      dice[dicecounter] = new Die(x, y);
      dicecounter++;
    }
    x += 185;
    y = 150;
  }
}
function draw() {
  background(0);
  for (var i = 0; i < dice.length; i++) {
    dice[i].show();
  }
  //Text
  fill(255);
  textSize(35);
  text("Click to Roll Dice and try to find Primes!", 50, 75);
  text("Your Roll is " + total1, 230, 650);
  //Winner Display
  if (isPrime) {
    fill(255);
    textSize(35);
    text("You are a winner! " + total1 + " is a Prime Number!", 50, 700);
  }
}
function mousePressed() {
  for (var i = 0; i < dice.length; i++) {
    dice[i].roll();
    total1 = dice[i].returnTotal();
    dice[i].isTotalPrime();
    //total1 = 11;
  }
  //System.out.print(isPrime);
}

class Die {
  constructor(x,y) {
    this.xpos = x;
    this.ypos = y;
    this.radius = 27;
    this.number=0;
  }
  roll() {
    this.number = (int)(Math.random()*6+1);
    //number = 6;
  }
  returnRoll() {
    return this.number;
  }
  show() {
    fill(255);
    stroke(0);
    rect(this.xpos, this.ypos, 125, 125);
    if (this.number == 1) {
      fill(0);
      ellipse(this.xpos + 62.5, this.ypos + 62.5, this.radius, this.radius);
    }
    if (this.number == 2) {
      fill(0);
      ellipse(this.xpos + 31.25, this.ypos + 31.25, this.radius, this.radius);
      ellipse(this.xpos + 93.75, this.ypos + 93.75, this.radius, this.radius);
    }
    if (this.number == 3) {
      fill(0);
      ellipse(this.xpos + 31.25, this.ypos + 31.25, this.radius, this.radius);
      ellipse(this.xpos + 62.5, this.ypos + 62.5, this.radius, this.radius);
      ellipse(this.xpos + 93.75, this.ypos + 93.75, this.radius, this.radius);
    }
    if (this.number == 4) {
      fill(0);
      ellipse(this.xpos + 93.75, this.ypos + 31.25, this.radius, this.radius);
      ellipse(this.xpos + 31.25, this.ypos + 31.25, this.radius, this.radius);
      ellipse(this.xpos + 93.75,this.ypos + 93.75, this.radius, this.radius);
      ellipse(this.xpos + 31.25, this.ypos + 93.75, this.radius, this.radius);
    }
    if (this.number == 5) {
      fill(0);
      ellipse(this.xpos + 93.75, this.ypos + 31.25, this.radius, this.radius);
      ellipse(this.xpos + 31.25, this.ypos + 31.25, this.radius,this.radius);
      ellipse(this.xpos + 93.75, this.ypos + 93.75, this.radius, this.radius);
      ellipse(this.xpos + 31.25, this.ypos + 93.75, this.radius, this.radius);
      ellipse(this.xpos + 62.5, this.ypos + 62.5, this.radius, this.radius);
    }
    if (this.number == 6) {
      fill(0);
      ellipse(this.xpos + 31.25, this.ypos + 31.25, this.radius, this.radius);
      ellipse(this.xpos + 31.25, this.ypos + 62.5, this.radius, this.radius);
      ellipse(this.xpos + 31.25, this.ypos + 93.75, this.radius, this.radius);
      ellipse(this.xpos + 93.75, this.ypos + 31.25, this.radius, this.radius);
      ellipse(this.xpos + 93.75, this.ypos + 62.5, this.radius, this.radius);
      ellipse(this.xpos + 93.75, this.ypos + 93.75, this.radius, this.radius);
    }
  }
  returnTotal() {
    var total = 0;
    for (var i = 0; i < dice.length; i++) {
      total += dice[i].returnRoll();
    }
    return total;
  }
  isTotalPrime() {
    for (var i = 0; i < Primes.length; i++) {
      if (total1 == Primes[i]) {
        isPrime=true;
        break;
      }
      isPrime = false;
    }
    return isPrime;
  }
}
