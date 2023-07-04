let numSegments = 120,
x = [],
y = [],
angle = [],
segLength = 15,
targetX,
targetY;


for (let i = 0; i < numSegments; i++) {
x[i] = 0;
y[i] = 0;
angle[i] = 0;
}
var canvas;

function windowResized () {
  resizeCanvas(windowWidth, windowHeight); 
}

function setup() {
canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0,0);
canvas.style('position', 'fixed');
canvas.style('z-index', '-10');
// strokeWeight(20);
//   stroke(2, 42, 204);
stroke(122, 2, 214);
// stroke(0);
x[x.length - 1] = width/3 ; 
y[x.length - 1] = -200 ; 

} 



function draw() {
//  background(80, 84, 63);
// background(0);
reachSegment(0, mouseX, mouseY);

for (let i = 1; i < numSegments; i++) {
  reachSegment(i, targetX, targetY);
}


for (let j = x.length - 1; j >= 1; j--) {
  positionSegment(j, j - 1);
}


for (let k = 0; k < x.length; k++) {
  segment(x[k], y[k], angle[k], (k + 1) * 2);
}
// below: seesaw
//   let r1 = map(mouseX, 0, width, 0, height/4*3);
//   let r2 = height/4*3 - r1;
let r1 = map(mouseX, 0, width, 0, height);
let r2 = height - r1;

fill(255, 60);
 strokeWeight(1);
circle(width / 2 + r1 / 4, height/2, r1, r1);

fill(255, 150);
circle(width / 4 - r2 / 4, height/2 , r2, r2);

//   fill(0, 100);
//   circle(width / 3 - r2 / 4, height/2 , r1, r2);


}

function positionSegment(a, b) {
x[b] = x[a] + cos(angle[a]) * segLength;
y[b] = y[a] + sin(angle[a]) * segLength;
}

function reachSegment(i, xin, yin) {
const dx = xin - x[i];
const dy = yin - y[i];
angle[i] = atan2(dy, dx);
targetX = xin - cos(angle[i]) * segLength;
targetY = yin - sin(angle[i]) * segLength;
}

function segment(x, y, a, sw) {
strokeWeight(sw);
push();
translate(x, y);
rotate(a);
line(0, 0, segLength, 0);
pop();
}