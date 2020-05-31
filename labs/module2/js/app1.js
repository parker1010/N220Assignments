let counter = 0;

function setup() {

    let canvasHeight = 200;
    let canvasWidth = 200;

    let backgroundColor = "#181F38";

    createCanvas(canvasWidth, canvasHeight);
    background(backgroundColor);

}

function draw() {
    console.log(counter++)
}