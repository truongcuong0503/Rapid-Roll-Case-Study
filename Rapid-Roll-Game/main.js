const initBrick = 720
const speed = 5
const speedDown = 3
const speedPoint = 1

let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

let background = new Image()
background.src = "img/background.jpg"
let gameover = new Image()
gameover.src = "img/gameover.jpg"
let score = 0
let highScore = 0
sessionStorage.setItem("Score0", "0")

let ball = new Ball(canvas.width / 2, canvas.height / 2, 10, "red")
let brickDie = new Brick(0, 0, 400, 100, "rgb(118, 206, 91)")
let brick1 = new Brick((Math.random() * 300), 720, 100, 10, "rgb(65, 18, 18)")
let brick2 = new Brick((Math.random() * 300), 800, 100, 10, "rgb(65, 18, 18)")
let brick3 = new Brick((Math.random() * 300), 880, 100, 10, "rgb(65, 18, 18)")
let brick4 = new Brick((Math.random() * 300), 960, 100, 10, "rgb(65, 18, 18)")
let brick5 = new Brick((Math.random() * 300), 1040, 100, 10, "rgb(65, 18, 18)")
let brick6 = new Brick((Math.random() * 300), 1120, 100, 10, "rgb(65, 18, 18)")
let brick7 = new Brick((Math.random() * 300), 1200, 100, 10, "rgb(65, 18, 18)")
let brick8 = new Brick((Math.random() * 300), 1280, 100, 10, "rgb(65, 18, 18)")
let brick9 = new Brick((Math.random() * 300), 1360, 100, 10, "rgb(65, 18, 18)")

let bricks = [brick1, brick2, brick3, brick4, brick5, brick6, brick7,  brick8, brick9]

isCollided = (ball, brick) => {
    let closestPoint = {
        x: ball.x, 
        y: ball.y
    };
    if (closestPoint.x < brick.x) {
        closestPoint.x = brick.x; 
    } else if (closestPoint.x > (brick.x + brick.width)) {
        closestPoint.x = brick.x + brick.width;
    }
    if (closestPoint.y < brick.y) {
        closestPoint.y = brick.y;
    } else if (closestPoint.y > (brick.y + brick.height)) {
        closestPoint.y = brick.y + brick.height;
    }
    
    let distance = {
        x: ball.x - closestPoint.x, 
        y: ball.y - closestPoint.y
    };
    if(Math.pow(distance.x, 2) + Math.pow(distance.y, 2) <= Math.pow(ball.radius, 2)) {
        ball.y = brick.y - ball.radius;
        return true;
    } else {
        return false;
    }
}

function isCheckCollision() {
    for (let i = 0; i < bricks.length; i++) {
        if(isCollided(ball, bricks[i]) == true) {
            // score += speed
            // break;
        }
        console.log(isCollided(ball, bricks[i]))
    }  
}

    function scoreGame() {
    // ctx.fillStyle = "#090909"
    // ctx.font = "50px Arial"
    // cxt.fillText("Score: " + score, 10, canvas.height - 50)
    // ctx.fillStyle = "#090b909"
    // ctx.font = "50px Arial"
    // cxt.fillText("High Score : " + sessionStorage["Score" + (sessionStorage.length - 1)], 230, canvas.height - 650)

    // if () {
    //     score += speedPoint
    // } else {
    //     score += 0
    // }

    // for (let j = 0; j < sessionStorage.length; j++) {
    //     if (sessionStorage["Score" + (sessionStorage.length - 1)] < score) {
    //         highScore = score
    //         sessionStorage.setItem("Score" + (j + 1), highScore)
    //     }
    // }
    // console.log(score)
    // console.log(highScore)
    
}

function checkWin() {
    if (ball.y <= (brickDie.y + brickDie.height) || ball.y >= canvas.height) {
        ctx.drawImage(gameover, 0, 0, canvas.width, canvas.height)
        document.getElementById("reset").style.display = ""
        return
    }
}

function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
    getBrick()
    speedBallDown()
    isCheckCollision()
    // score += 1
    // console.log() 
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