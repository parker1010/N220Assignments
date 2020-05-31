function setup() {

    const canvasHeight = 400
    const canvasWidth = 400

    const backgroundColor = "#ebe6d3"
    const blackColor = "#000000"

    createCanvas(canvasWidth, canvasHeight)
    background(backgroundColor)

    noFill()
    strokeWeight(1)
    stroke(blackColor)

    for (var i = 0; i < 80; i++) {
        circle(200, 200, canvasWidth - i*5)
    }

}