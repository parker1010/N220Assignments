function setup() {

    const canvasHeight = 400
    const canvasWidth = 400

    const backgroundColor = "#ebe6d3"
    const redColor = "#ff0d00"

    createCanvas(canvasWidth, canvasHeight)
    background(backgroundColor)
    fill(redColor)
    noStroke()

    for (var y = 1; y <= 4; y++) {
        for (var x = 1; x <= y; x++) {
            square(20*x, 20*y, 18)
        }
    }

}