const canvasHeight = 400
const canvasWidth = 400

const backgroundColor = "#ebe6d3"
const redColor = "#ff0d00"
const blackColor = "#000000"

let circleX = 200
let circleY = 200

let cushion = 7

function setup() {
    createCanvas(canvasWidth, canvasHeight)
}

function moveCircle() {
    if (mouseX > circleX+cushion) {
        circleX += 3
    } else if (mouseX < circleX-cushion) {
        circleX -= 3
    }

    if (mouseY > circleY+cushion) {
        circleY += 3
    } else if (mouseY < circleY-cushion) {
        circleY -= 3
    }

    circle(circleX, circleY, 25)
}

function getCircleColor() {
    if (mouseX <= circleX+cushion && mouseX >= circleX-cushion && mouseY <= circleY+cushion && mouseY >= circleY-cushion) {
        return redColor
    }
    return blackColor
}

function draw() {
    background(backgroundColor)

    fill(getCircleColor())
    noStroke()

    moveCircle()
}