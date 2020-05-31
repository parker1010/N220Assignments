function setup() {

    const canvasHeight = 400
    const canvasWidth = 400

    const backgroundColor = "#ebe6d3"
    const greenColor = "#09ff00"

    const squareObject = {
        width: 200,
        height: 250,
        color: greenColor,
        position: {
            x1: 100,
            y1: 300,
            x2: 200,
            y2: 100,
            x3: 300,
            y3: 300
        }
    }

    createCanvas(canvasWidth, canvasHeight)
    background(backgroundColor)

    fill(squareObject.color)
    noStroke()
    triangle(
        squareObject.position.x1,
        squareObject.position.y1,
        squareObject.position.x2,
        squareObject.position.y2,
        squareObject.position.x3,
        squareObject.position.y3)

}