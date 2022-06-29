//posição do Sprite no SpriteSheet
    spriteX: 0,
    spriteY: 0,

    //tamanho do Sprite
    size: {width: 24, height: 24},
    //posição do Sprite
    position: {x: _Width/2, y: _Height/2},
    
    jumpForce: 10 * -1,
    speed: 8,

    draw: function(){
        context.drawImage(
            playerSprites, 
            Player.spriteX, Player.spriteY,
            Player.size.width, Player.size.height,
            Player.position.x, Player.position.y, 
            Player.size.width, Player.size.height
        );
    }

    Animaçao

    
class Ianimationer {
    constructor(animations) {
        this.animations = animations;
    }
    FindAnimation(name){
        for(var obj in this.animations){
            if(obj.name == name){
                return obj;
            }else{
                return null;
            }
        }
    }
}
class Ianimation {
    index = 0;
    constructor(name, Isprites) {
        this.name = name;
        this.Isprites = Isprites;
    }
}
