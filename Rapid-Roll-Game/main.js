function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
    getBrick()
    speedBallDown()
    isCheckCollision()
    deleteAndAddBrick()
    checkWin()
    // scoreGame()
    ball.drawBall()
    brickDie.drawBrick()
    requestAnimationFrame(drawGame)
    
}

function draw() {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
}

function start() {
    drawGame()
    document.getElementById("start").style.display = "none"
}

function restart() {
    location.reload()
}

document.getElementById('reset').addEventListener('click', drawGame);