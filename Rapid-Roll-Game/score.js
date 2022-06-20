function scoreGame() {
    data += "score" + score
    ctx.fillStyle = "#090909"
    ctx.font = "50px Arial"
    cxt.fillText(data, 10, canvas.height - 50)
    ctx.fillStyle = "#090b909"
    ctx.font = "50px Arial"
    cxt.fillText("High Score : " + sessionStorage["Score" + (sessionStorage.length - 1)], 230, canvas.height - 650)

    if (!isCheckCollision()) {
        score += speedPoint
    }

    // for ()
}