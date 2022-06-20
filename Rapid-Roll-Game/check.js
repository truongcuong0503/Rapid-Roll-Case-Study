isCollided = (circle, rect) => {
    let closestPoint = {
        x: circle.x, 
        y: circle.y
    };
    if (closestPoint.x < rect.x) {
        closestPoint.x = rect.x; 
    }  else if (closestPoint.x > rect.x + rect.width) {
        closestPoint.x = rect.x + rect.width;
    }
    if (closestPoint.y < rect.y) {
        closestPoint.y = rect.y;
    } else if (closestPoint.y > rect.y + rect.height) {
        closestPoint.y = rect.y + rect.height;
    }
    
    let distance = {
        x: circle.x - closestPoint.x, 
        y: circle.y - closestPoint.y
    };
    if(Math.pow(distance.x, 2) + Math.pow(distance.y, 2) <= Math.pow(circle.radius, 2)){
        circle.y = rect.y - circle.radius;
        return true;
    } else {
        return false;
    }
}

function isCheckCollision() {
    for (let i = 0; i < bricks.length; i++) {
        if(isCollided(ball, bricks[i])) break;
    }  
}

function checkWin() {
    if (ball.y <= (brickDie.y + brickDie.height) || ball.y >= canvas.height) {
        ctx.drawImage(gameover, 0, 0, canvas.width, canvas.height)
        document.getElementById("reset").style.display = ""
        return
    }
}