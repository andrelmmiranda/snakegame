const canvas = document.getElementById('snake');
const context = canvas.getContext('2d');
const box = 32;

let snake = [];
snake[0] = {
    x: 8*box,
    y: 8*box
};

let direction = 'right';

const createBackground = () =>{
    context.fillStyle = 'lightgreen';
    context.fillRect(0, 0, 16*box, 16*box);
}

const createSnake = () =>{
    for(let i = 0; i < snake.length; i++){
        context.fillStyle = 'green';
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

const update = (event) =>{
    if(event.keycode == 37 && direction != 'right'){
        direction = 'left';
    }
    if(event.keycode == 38 && direction !== 'down'){
        direction = 'up';
    }
    if(event.keycode == 39 && direction != 'left'){
        direction = 'right';
    }
    if(event.keycode == 40 && direction != 'up'){
        direction = 'down';
    }
}

document.addEventListener('keydown', update);

const startGame = () =>{
    if(snake[0].x > 15 * box && direction === 'right') snake[0].x = 0
    if(snake[0].x < 0  && direction === 'left') snake[0].x = 16*box

    if(snake[0].y > 15 * box && direction === 'down') snake[0].y = 0
    if(snake[0].y < 0  && direction === 'up') snake[0].y = 16*box

    createBackground();
    createSnake();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction === 'right'){
        snakeX += box;
    }

    if(direction === 'left'){
        snakeX -= box;
    }

    if(direction === 'up'){
        snakeY -= box;
    }

    if(direction === 'down'){
        snakeY += box;
    }

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    };

    snake.unshift(newHead);

}

let game = setInterval(startGame, 100);