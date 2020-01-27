const edgecolor = prompt('Please enter a simple color for the snow creature\'s edges.)', 'gray')
const armcolor = prompt('Please enter a simple color for the snow creature\'s arms.)', 'black')

function setup() {
  createCanvas(1000,800);
  background("#C0C0C0");
}

function draw() {
    strokeWeight(0);
   	fill("#E0E0E0");
    stroke(edgecolor);
    strokeWeight(10);
    ellipse(500, 550, 250);
    ellipse(500, 325, 200);
    ellipse(500, 150, 150);
    strokeWeight(20);
    point(480, 140);
    point(520, 140);
    strokeWeight(10);
    stroke(armcolor);
    line(250, 250, 400, 300);
    line(750, 250, 600, 300);
    fill("#D0D0D0");
    stroke(edgecolor);
    strokeWeight(5);
    ellipse(250, 250, 40);
    ellipse(750, 250, 40);

  }
  