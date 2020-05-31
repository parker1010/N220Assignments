let backgroundColor = "#35382e";
let leftColor = "#ff0000";
let rightColor = "#0026ff";

let canvasHeight = 300;
let canvasWidth = 400;

function setup() {

    createCanvas(canvasWidth, canvasHeight);

}

function draw() {

    background(backgroundColor);
    if (mouseX >= canvasWidth/2) {
        fill(leftColor);
    } else {
        fill(rightColor);
    }
    circle(mouseX, mouseY, 20);

}