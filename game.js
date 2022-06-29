//configurações principais
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
canvas.width = 824;         _Width = canvas.width;
canvas.height = 326;        _Height = canvas.height;

//Sprites Player
const playerSprites = new Image();
playerSprites.src = './Duck.png';

//configurações fisicas
const ground = 275;
const gravity = 0.2;
const jumpForce = 4.5;
canJump = false;

//classe para objetos com sprites
class Sprite {
    constructor (position, scale, velocity, spriteBlock) {
        this.position = position;
        this.scale = scale;
        this.velocity = velocity;
        this.spriteBlock = spriteBlock;
        this.draw();
    }
    draw(){
        context.drawImage(
            //configurações no sprite
            this.spriteBlock.sprite, 
            this.spriteBlock.x, this.spriteBlock.y,
            this.spriteBlock.width, this.spriteBlock.height,
            //configurações no canvas
            this.position.x + this.scale.width/2, this.position.y + this.scale.height/2, 
            this.scale.width, this.scale.height
        );
    }
    update(){
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if(this.position.y >= ground){
            this.velocity.y = 0;
            canJump = true;
        }else this.velocity.y += gravity;
    }
}

const player = new Sprite(
    {x: 412, y: 163},
    {width: 24, height: 24}, 
    {x: 0, y: 0},
    
)

function loop(){
    context.fillStyle = 'yellow';    //define a cor de context como preto
    context.fillRect(0, 0, canvas.width, canvas.height);   //redefine o canvas

    player.update();
    player.draw();

    requestAnimationFrame(loop);
} loop();
window.addEventListener('keydown', (key) => {
    if(canJump && key.keyCode == 32){
        player.velocity.y = jumpForce * -1;
        canJump = false;
    }
})
