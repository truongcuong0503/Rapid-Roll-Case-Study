class Brick {
    x
    y
    width
    height
    color
    constructor(x, y, width, height, color ) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
    }       

    drawBrick() {
        let ctx = document.getElementById("canvas").getContext("2d")
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.closePath()
    }
}

class Ball {
    x
    y
    radius
    color
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    drawBall() {
        let ctx = document.getElementById("canvas").getContext("2d")
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.closePath()
    }
}