const initBrick = 720
const speed = 5
const speedDown = 3
const speedPoint = 1

let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")
let data = ""

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