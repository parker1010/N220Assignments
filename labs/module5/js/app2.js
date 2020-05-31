const canvasHeight = 400
const canvasWidth = 400

const backgroundColor = "#ebe6d3"
const redColor = "#ff0d00"

let circleX = 200
let circleY = 200

let cushion = 7

let circleObject = {
    x: 200,
    y: 200,
    size: 25
}

function setup() {
    createCanvas(canvasWidth, canvasHeight)
}

function draw() {
    background(backgroundColor)

    fill(redColor)
    noStroke()

    circle(circleObject.x, circleObject.y, circleObject.size)
    circleObject.size++
}