const canvasHeight = 500
const canvasWidth = 500

let score = 0

let paddle = {
    paddleHeight: 60,
    paddleWidth: 20,
    paddleY: canvasHeight/2-30,
    paddleX: 460,
    paddleColor: '#eb4034'
}

let ball = {
    ballY: canvasHeight/2,
    ballX: canvasWidth/2,
    ballDiameter: 20,
    ballDirectionX: -5,
    ballDirectionY: -5
}

const backgroundColor = '#181F38'

function updatePaddle() {
    if (mouseY < canvasHeight-paddle.paddleHeight/2 && mouseY > paddle.paddleHeight/2) {
        paddle.paddleY = mouseY-paddle.paddleHeight/2
    }
}

function hitTest() {
    if (ball.ballX+ball.ballDiameter/2 === paddle.paddleX && ball.ballY > paddle.paddleY-paddle.paddleHeight && ball.ballY < paddle.paddleY+paddle.paddleHeight) {
        ball.ballDirectionX *= -1
        score++
    }

    if (ball.ballX-ball.ballDiameter/2 === 0) {
        ball.ballDirectionX *= -1
    }

    if (ball.ballY-ball.ballDiameter/2 === 0 || ball.ballY+ball.ballDiameter/2 === canvasHeight) {
        ball.ballDirectionY *= -1
    }

    if (ball.ballX+ball.ballDiameter/2 === canvasWidth) {
        ball.ballY = canvasHeight/2
        ball.ballX = canvasWidth/2
        ball.ballDirectionX = -5,
        ball.ballDirectionY = -5
        score = 0
    }
}

function updateBall() {
    ball.ballX += ball.ballDirectionX
    ball.ballY += ball.ballDirectionY
}

function setup() {
    createCanvas(canvasWidth, canvasHeight)
}

function draw() {
    background(backgroundColor)

    fill(paddle.paddleColor)
    noStroke()
    updatePaddle()
    rect(paddle.paddleX, paddle.paddleY, paddle.paddleWidth, paddle.paddleHeight)

    circle(ball.ballX, ball.ballY, ball.ballDiameter)
    hitTest()
    updateBall()

    text(`Score: ${score}`, 20, 20)
}