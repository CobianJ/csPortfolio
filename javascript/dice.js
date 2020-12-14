Die dice;
//Die dice1;
var dicecounter;
var xpos;
var ypos;
var total1;
var Primes = [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53];
var isPrime;
function setup() {
  dicecounter = 0;
  xpos = 125;
  ypos = 150;
  dice = new Die[9];
  var canvas = new canvas(750, 750);
  background(0);
  //dice1 = new Die(50, 50);
  //The Dice Creator
  for (int i = 0; i < 3; i++) {
    dice[dicecounter] = new Die(xpos, ypos);
    dicecounter++;
    for (int k = 0; k < 2; k++) { 
      ypos += 150;
      dice[dicecounter] = new Die(xpos, ypos);
      dicecounter++;
    }
    xpos += 185;
    ypos = 150;
  }
}
function draw() {
  background(0);
  for (int i = 0; i < dice.length; i++) {
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
  for (int i = 0; i < dice.length; i++) {
    dice[i].roll();
    total1 = dice[i].returnTotal();
    dice[i].isTotalPrime();
    //total1 = 11;
  }
  System.out.print(isPrime);
}

class Die {
  private var  xpos;
  private var  ypos;
  private var  number;
  private var  radius; 
  Die(var x, var y) {
    xpos = x;
    ypos = y;
    radius = 27;
  }
  function roll() {
    number = (int)(Math.random()*6+1);
    //number = 6;
  }
  function returnRoll() {
    return number;
  }
  function show() {
    fill(255);
    stroke(0);
    rect(xpos, ypos, 125, 125);
    if (number == 1) {
      fill(0);
      ellipse(xpos + 62.5, ypos + 62.5, radius, radius);
    }
    if (number == 2) {
      fill(0);
      ellipse(xpos + 31.25, ypos + 31.25, radius, radius);
      ellipse(xpos + 93.75, ypos + 93.75, radius, radius);
    }
    if (number == 3) {
      fill(0);
      ellipse(xpos + 31.25, ypos + 31.25, radius, radius);
      ellipse(xpos + 62.5, ypos + 62.5, radius, radius);
      ellipse(xpos + 93.75, ypos + 93.75, radius, radius);
    }
    if (number == 4) {
      fill(0);
      ellipse(xpos + 93.75, ypos + 31.25, radius, radius);
      ellipse(xpos + 31.25, ypos + 31.25, radius, radius);
      ellipse(xpos + 93.75, ypos + 93.75, radius, radius);
      ellipse(xpos + 31.25, ypos + 93.75, radius, radius);
    }
    if (number == 5) {
      fill(0);
      ellipse(xpos + 93.75, ypos + 31.25, radius, radius);
      ellipse(xpos + 31.25, ypos + 31.25, radius, radius);
      ellipse(xpos + 93.75, ypos + 93.75, radius, radius);
      ellipse(xpos + 31.25, ypos + 93.75, radius, radius);
      ellipse(xpos + 62.5, ypos + 62.5, radius, radius);
    }
    if (number == 6) {
      fill(0);
      ellipse(xpos + 31.25, ypos + 31.25, radius, radius);
      ellipse(xpos + 31.25, ypos + 62.5, radius, radius);
      ellipse(xpos + 31.25, ypos + 93.75, radius, radius);
      ellipse(xpos + 93.75, ypos + 31.25, radius, radius);
      ellipse(xpos + 93.75, ypos + 62.5, radius, radius);
      ellipse(xpos + 93.75, ypos + 93.75, radius, radius);
    }
  }
  function returnTotal() {
    int total = 0;
    for (int i = 0; i < dice.length; i++) {
      total += dice[i].returnRoll();
    }
    return total;
  }
  function isTotalPrime() {
    for (int i = 0; i < Primes.length; i++) {
      if (total1 == Primes[i]) {
        isPrime=true;
        break;
      }
      isPrime = false;
    }
    return isPrime;
  }
}