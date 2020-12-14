function setup() {
  var canvas=createCanvas(500, 500);
	background(29, 222, 212);
}
function draw() {
	//ground
	stroke(134, 201, 62);
	fill(134, 201, 62);
	rect(0,450,500,50);
	//sun
	stroke(230, 219, 21);
	fill(230, 219, 21);
	ellipse(25,25,100,100);
	//house
	stroke(199, 72, 58);
	fill(199, 72, 58);
	rect(250,350,100,100);
	//roof
	stroke(150, 88, 54);
	fill(150, 88, 54);
	triangle(250,350,350,350,300,250);
	//windows
	var winxpos = 263;
	var winypos = 365;
	var winsize = 25;
	stroke(0);
	fill(230, 219, 21)
		rect(winxpos,winypos,winsize,winsize);
	rect(winxpos+50,winypos,winsize,winsize);
	//door
	fill(150, 88, 54);
	rect(290,400,20,50);
	//doorknob
	fill(0);
	ellipse(308,425,2,2);
	//text
	fill(184, 181, 156);
	textSize(30)
	text("A Beautiful Summer Day", 100,50);
	//person
		//body
	stroke(217, 152, 100);
	fill(217, 152, 100);
	rect(145,410,10,40);
		//head
  var eyesize=3;
	var eyeypos=397;
	stroke(217, 152, 100);
	fill(217, 152, 100);
	ellipse(150,400,25,25);
		//eyes
	stroke(0);
	fill(0);
	ellipse(145,eyeypos,eyesize,eyesize);
	ellipse(155, eyeypos,eyesize,eyesize);
		//mouth
	stroke(255);
	fill(255);
	arc(150,403,15,15,0,PI);
}
	
	
