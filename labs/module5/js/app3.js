const canvasHeight = 400
const canvasWidth = 400

const backgroundColor = "#ebe6d3"
const redColor = "#ff0d00"

let circleX = 200
let circleY = 200

let cushion = 7

let arrayOfCircles = []

function setup() {
    createCanvas(canvasWidth, canvasHeight)
    for (var i = 0; i < 4; i++) {
        arrayOfCircles.push({
            x: 200,
            y: 200,
            size: 25
        })
    }
}

function draw() {
    background(backgroundColor)

    fill(redColor)
    noStroke()

    for (var i = 0; i < arrayOfCircles.length; i++) {
        if (i === 0) {
            arrayOfCircles[i].x++
        } else if (i === 1) {
            arrayOfCircles[i].y++
        } else if (i === 2) {
            arrayOfCircles[i].x--
        } else if (i === 3) {
            arrayOfCircles[i].y--
        }
        circle(arrayOfCircles[i].x, arrayOfCircles[i].y, arrayOfCircles[i].size)
    }
}