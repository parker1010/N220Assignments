function setup() {

    const canvasHeight = 400
    const canvasWidth = 400

    const backgroundColor = "#ebe6d3"
    const blackColor = "#000000"
    const greenColor = "#09ff00"
    const yellowColor = "#fbff00"
    const redColor = "#ff0000"

    const trafficLightColors = [greenColor, yellowColor, redColor]

    createCanvas(canvasWidth, canvasHeight)
    background(backgroundColor)

    fill(blackColor)
    noStroke()
    rect(170, 110, 60, 200)

    for (var i = 0; i < 3; i++) {
        fill(trafficLightColors[i])
        circle(200, 275-i*66, 40)
    }

}