function setup() {

    const canvasHeight = 400
    const canvasWidth = 1000

    const backgroundColor = "#ebe6d3"
    const blackColor = "#000000"
    const purpleColor = "#9900ff"
    const greenColor = "#09ff00"
    const blueColor = "#0004ff"

    createCanvas(canvasWidth, canvasHeight)
    background(backgroundColor)

    for (var i = 0; i < 25; i++) {
        if (i%3 === 0 && i%5 === 0) {
            fill(blueColor)
        } else if (i%3 === 0) {
            fill(purpleColor)
        } else if (i%5 === 0) {
            fill(greenColor)
        } else {
            fill(blackColor)
        }
        noStroke()
        circle(50+25*i, 200, 25)
    }

}