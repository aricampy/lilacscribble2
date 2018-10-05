var img;

function preload() {
  img = loadImage("ptznr.jpg");

  function setup() {
    createCanvas(666,666);
  }
  function draw(){
    image(img,0,0);
  }
}
