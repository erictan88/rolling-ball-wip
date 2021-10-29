controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Hero.vx = 100
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Hero.vx = -32
    Hero.y = 90
    if (Hero.overlapsWith(otherSprite)) {
        Hero.ay = 0
    } else {
        Hero.ay = 200
    }
})
let Hero: Sprite = null
let _1: Sprite = null
Hero = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . 8 8 8 8 8 8 8 8 8 . . . 
    . . . 8 8 9 9 9 8 8 8 8 8 8 . . 
    . . . 8 8 9 9 8 8 8 8 8 8 8 . . 
    . . . 8 8 9 8 8 8 8 8 8 8 8 . . 
    . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . . . 8 8 8 8 8 8 8 8 8 . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Hero.setFlag(SpriteFlag.ShowPhysics, false)
controller.moveSprite(Hero, 100, 100)
Hero.ay = 200
tiles.setTilemap(tilemap`level3`)
game.onUpdate(function () {
	
})
game.onUpdateInterval(2000, function () {
    _1 = sprites.create(img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
        6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
        6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
        6 6 6 9 9 9 9 c 6 6 9 9 3 6 6 6 
        6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
        6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6 
        6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
        6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
        6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
        6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6 
        6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
        6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
        6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
        6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(_1, tiles.getTileLocation(9, 6))
    _1.ay = 200
    _1.vx = -32
})
