var touched = 0;
var timer = 0;
var dots = new Array(200);//change # of dots here

function setup() {
    //fundot = new Dot(500, 500);
    createCanvas(1000, 1000);
    //background(0);


    //dots = new Dot(); //change number in here to change amount of dots
    for (var i = 0; i < dots.length; i++) {
        dots[i] = new Dot(random(0, 1001), random(0, 1001));
    }
    console.log(dots.length);

    var num = (int)(Math.random() * dots.length);
    dots[num].isinfected = true; //Patient Zero
    //console.log(dots[num].isinfected);
}


function draw() {
    timer += .25;
    //println(touched);
    //frameRate(120000000);
    background(0);
    for (var i = 0; i < dots.length; i++) {
        dots[i].show();
        //console.log(dots.length);
    }

istouching();
move();


if (timer % 2 == 0) {
    //console.log("hi");
    for (var i = 0; i < dots.length; i++) {
        if (dots[i].isinfected == true) {
            touched++;
            //console.log("hi");
        }
    }
    if (touched == dots.length) {
        for (var i = 0; i < dots.length; i++) {
            dots[i] = new dot(random(0, 1001), random(0, 1001));
            dots[i].isinfected = false;
            touched = 0;
        }
        //
        var num = (Math.random() * 100);
        dots[num].isinfected = true; //Patient Zero
    } else {
        touched = 0;
    }
}
}

function istouching() {
    for (var i = 0; i < dots.length; i++) { //Loops through all the dots
        for (var k = 0; k < dots.length; k++) { //loops through all the checking dots
            if (dist(dots[i].dotxpos, dots[i].dotypos, dots[k].dotxpos, dots[k].dotypos) <= 5) {
                if (dots[i].isinfected == true || dots[k].isinfected == true) {
                    dots[i].isinfected = true;
                    dots[k].isinfected = true;
                }
            }
        }
    }
}



function move() {
    var dotdetection = 75;
    var diffrencex = 0;
    var diffrencey = 0;
    var angle = 0;
    for (var i = 0; i < dots.length; i++) { //Loops through all the dots
        for (var k = 0; k < dots.length; k++) { //loops throgh all comparison dots
            if (dist(dots[i].dotxpos, dots[i].dotypos, dots[k].dotxpos, dots[k].dotypos) <= dotdetection && dots[k].isinfected == false && dots[i].isinfected == true) { //checks if a dot is within 50 plx
                diffrencex = dots[k].dotxpos - dots[i].dotxpos;
                diffrencey = dots[k].dotypos - dots[i].dotypos;
                angle = atan2(diffrencey, diffrencex);
                dots[i].dotxpos += (cos(angle)) * 2;
                dots[i].dotypos += (sin(angle)) * 2;
                //System.out.print(angle);
                //System.out.print("hi");
                break;
            }
        }
    }
    for (var i = 0; i < dots.length; i++) {
        if (dots[i].dotxpos >= -15 && dots[i].dotxpos <= 1015) {
            dots[i].dotxpos += random(-2, 2);
            if (dots[i].dotxpos <= -15) {
                dots[i].dotxpos += 50;
            }
            if (dots[i].dotxpos >= 1015) {
                dots[i].dotxpos -= 50;
            }
        }
        if (dots[i].dotypos >= -15 && dots[i].dotypos <= 1015) {
            dots[i].dotypos += random(-2, 2);
            if (dots[i].dotypos <= -15) {
                dots[i].dotypos += 50;
            }
            if (dots[i].dotypos >= 1015) {
                dots[i].dotypos -= 50;
            }
        }
    }
}



class Dot {
    constructor(x, y) {
        this.dotxpos = x;
        this.dotypos = y;
        this.size = 10;
        this.isinfected = false;
    }
    getDotxpos() {
        return this.dotxpos;
    }
    getDotypos() {
        return this.dotypos;
    }
    show() {
        if (this.isinfected == true) {
            fill(255, 0, 0);
        } else {
            fill(0, 255, 0);
        }
        ellipse(this.dotxpos, this.dotypos, this.size, this.size);
    }

}