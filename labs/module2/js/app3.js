let canvasHeight = 600;
let canvasWidth = 800;

let backgroundColor = "#422921";
let ballColor = "#ff0000";

let x = 0;

function setup() {

    createCanvas(canvasWidth, canvasHeight);

}

function draw() {

    background(backgroundColor);
    if (x >= canvasWidth) {
        x = 0;
    }
    fill(ballColor);
    circle(x+=5, canvasHeight/2, 20);
    
}