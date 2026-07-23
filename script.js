const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const size = 20;
let snake = [
    {x: 350, y: 350},
    {x: 330, y: 350}
];

function drawSnake() {
    snake.forEach((bloco, index) => {
        if (index == 0) {
            ctx.fillStyle = 'Red'; // Cabeça da cobra
        } else { 
            ctx.fillStyle = 'Green'; // Corpo da cobra
        }
        ctx.fillRect(bloco.x, bloco.y, size, size);
    })
}
ctx.fillRect(drawSnake(), 0, 0, canvas.width, canvas.height);


let gameRunning = false;
let gameLoop;
let direction = 'right';
document.addEventListener('keydown', function(event) {
    
if (gameRunning == false) {
    gameRunning = true;
    gameLoop = setInterval(gameLoop, 500);
    console.log(snake[0])
}


    if (event.key == 'ArrowUp' && direction != 'down') {
        direction = 'up';
        } else if (event.key == 'ArrowDown' && direction != 'up') {
            direction = 'down';
        } else if (event.key == 'ArrowLeft' && direction != 'right') {
            direction = 'left';
        } else if (event.key == 'ArrowRight' && direction != 'left') {
            direction = 'right';
        }
        console.log("tecla apertada, filho da puta", event.key)
    });



let newHead = {x: snake[0].x, y: snake[0].y};
    if (direction == 'up') {
        newHead.y -= size;
        } else if (direction == 'down') {
            newHead.y += size;
        } else if (direction == 'left') {
            newHead.x -= size;
        } else if (direction == 'right') {
            newHead.x += size;
        }
snake.unshift(newHead);
snake.pop();


    