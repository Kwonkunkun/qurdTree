let qtree;

function setup() {
  createCanvas(400, 400);

  let boundary = new Rectangle(200, 200, 200, 200);
  qtree = new QuardTree(boundary, 4);
  console.log(qtree);
}

function draw() {
  if (mouseIsPressed) {
    for (let i = 0; i < 5; i++) {
      let m = new Point(mouseX + random(-5, 5), mouseY + random(-5, 5));
      qtree.insert(m);
    }
  }

  background(0);
  qtree.show();

  stroke(0, 255, 0);
  rectMode(CENTER);
  rect(250, 250, 107, 75);

  let range = new Rectangle(250, 250, 107, 75);
  rect(range.x, range.y, range.w * 2, range.h * 2);
  let points = qtree.query(range);
  console.log(points);
}
