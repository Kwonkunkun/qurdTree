let qtree;

function setup() {
  createCanvas(400, 400);

  let boundary = new Rectangle(200, 200, 200, 200);
  qtree = new QuardTree(boundary, 4);
  console.log(qtree);
  // if (mouseIsPressed) {
  //   for (let i = 0; i < 5; i++) {
  //     let m = new Point(mouseX + random(-5, 5), mouseY + random(-5, 5));
  //     qtree.insert(m);
  //   }
  // }
  for (let i = 0; i < 300; i++) {
    let x = randomGaussian(width / 2, width / 8);
    let y = randomGaussian(height / 2, height / 8);
    let p = new Point(x, y);
    qtree.insert(p);
  }
}

function draw() {
  background(0);
  qtree.show();

  stroke(0, 255, 0);
  rectMode(CENTER);
  let range = new Rectangle(mouseX, mouseY, 25, 25);
  rect(range.x, range.y, range.w * 2, range.h * 2);
  let points = [];
  qtree.query(range, points);
  for (let p of points) {
    strokeWeight(4);
    point(p.x, p.y);
  }
}
