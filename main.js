function preload() {

}

function setup(){
    canvas = createCanvas(800, 480);
    canvas.position(280, 300);
    video = createCapture(VIDEO);
    video.hide();

}

function draw() 
{ 
    image(video, 300, 100, 200, 200);

    fill(204, 101, 192, 127);
    stroke(127, 63, 120);

    translate(400, 200);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(120, 50, 25, 130);
    rotate(PI/5);
  }
}

function take_snapshot() {
    save('snapLife_pic.png');
}
