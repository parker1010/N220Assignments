function setup() {

    let canvasHeight = 300;
    let canvasWidth = 400;

    let skyColor = "#181F38";
    let stemColor = "#49370E";
    let pumpkinColorDark = "#CD650E";
    let pumpkinColorLight = "#DE741B";
    let lightColor = "#EADF87";

    let c = color(skyColor);

    createCanvas(canvasWidth, canvasHeight);
    background(c); // night sky

    c = color(stemColor);
    fill(c);
    noStroke();
    quad(205, 10, 215, 20, 210, 60, 190, 60); // pumpkin stem

    c = color(pumpkinColorDark);
    fill(c);
    ellipse(canvasWidth/2, canvasHeight/2, 220, 200); // pumpkin base

    c = color(pumpkinColorLight);
    fill(c);
    ellipse(canvasWidth/2, canvasHeight/2, 170, 200); // pumpkin highlight

    strokeWeight(5);
    stroke(pumpkinColorDark);
    fill(lightColor);
    triangle(140, 130, 160, 100, 180, 130); // left eye

    triangle(220, 130, 240, 100, 260, 130); // right eye

    arc(canvasWidth/2, canvasHeight/2, 100, 120, 0, PI, CHORD);
}