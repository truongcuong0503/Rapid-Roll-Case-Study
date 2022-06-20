function getBrick() {
    for (let i = 0; i < bricks.length; i++) {
        bricks[i].y -= 2
        bricks[i].drawBrick()
        
    }
}

function deleteAndAddBrick() {
    for (let i = 0; i < bricks.length; i++) {
        if (bricks[i].y <= brickDie.y) {
            bricks[i].y = initBrick;
        }
    }
}
