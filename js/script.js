const canvas = document.getElementById('snake');
const context = canvas.getContext('2d');
const box = 32;

const createBackground = () =>{
    context.fillStyle = 'lightgreen';
    context.fillRect(0, 0, 16*box, 16*box);
}

createBackground();

 /** PASSO 1 ACIMA */
