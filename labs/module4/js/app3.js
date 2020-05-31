const canvasHeight = 400
const canvasWidth = 400

const backgroundColor = "#ebe6d3"
const blackColor = "#000000"
const greenColor = "#09ff00"
const yellowColor = "#fbff00"
const redColor = "#ff0000"

const circleColors = [{cushion: 40, color: greenColor}, {cushion: 80, color: yellowColor}, {cushion: null, color: redColor}]

function setup() {
    createCanvas(canvasWidth, canvasHeight)
}

function getCircleColor(x, y) { // function params are x and y coordinates of a circle
    for (var i = 0; i < 2; i++) {
        if (mouseX <= x+circleColors[i].cushion &&
        mouseX >= x-circleColors[i].cushion &&
        mouseY <= y+circleColors[i].cushion &&
        mouseY >= y-circleColors[i].cushion) {
            return circleColors[i].color
        }
    }
    return circleColors[2].color // if mouse is outside max cushion, return default circle color: red
}

function draw() {
    background(backgroundColor)
    for (var y = 0; y < 20; y++) {
        for (var x = 0; x < 20; x++) { // double for loop creates circle grid to fill entire canvas
            const circleX = 10+20*x
            const circleY = 10+20*y

            fill(getCircleColor(circleX, circleY))
            noStroke()
            circle(circleX, circleY, 20)
        }
    }
}