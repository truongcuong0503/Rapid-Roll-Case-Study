function speedBall() {
    ball.y -= speed
}

function speedBallDown() {
    ball.y += speed;
}

function moveLeft(ball) {
    if (ball.x == ball.radius) {
        ball.x += 0
    } else {
        ball.x -= speed
    }
}

function moveRight(ball) {
    if (ball.x == (canvas.width - ball.radius)) {
        ball.x += 0
    } else {
        ball.x += speed
    }
}

function moveSelection(evt) {
    switch(evt.keyCode) {
        case 37:
            moveLeft(ball);
            break;
        case 39:
            moveRight(ball);
            break;
    }
}

window.addEventListener("keydown", moveSelection)
