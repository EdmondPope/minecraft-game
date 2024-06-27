controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    shootDirection = 3
    if (Steve.vy == 0) {
        Steve.vy = -100
    } else {
        Steve.ay = 300
    }
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(0, 0), assets.tile`transparency16`)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Steve,
    [img`
        ....eeeeeeeeeee....
        ....eeeeeeeeeee....
        ....edeeeeeeeee....
        ....eddeeeeeeee....
        ....ddddddddddd....
        ....d1fdddddf1d....
        ....ddddddddddd....
        ....dddedddeddd....
        ....dddeeeeeddd....
        ....ddddddddddd....
        6666666666666666666
        6666666666666666666
        dddd66666666666dddd
        dddd66666666666dddd
        dddd66666666666dddd
        dddd66666666666dddd
        dddd66666666666dddd
        dddd66666666666dddd
        dddd66666666666dddd
        dddd66666666666dddd
        dddd86666666666dddd
        bbbb88666666666bbbb
        ....88888888888....
        ....88888888888....
        ....88888888888....
        ....88888888888....
        ....88888888888....
        ....88888888888....
        ....88888888888....
        ....88888888888....
        ....bcccbbbcccb....
        ....bbbbbbbbbbb....
        `,img`
        ....eeeeeeeeeee....
        ....eeeeeeeeeee....
        ....edeeeeeeeee....
        ....eddeeeeeeee....
        ....ddddddddddd....
        ....d1fdddddf1d....
        ....ddddddddddd....
        ....dddedddeddd....
        ....dddeeeeeddd....
        ....ddddddddddd....
        6666666666666666666
        6666666666666666666
        666666666666666dddd
        ddd666666666666dddd
        dddd66666666666dddd
        ddddd6666666666dddd
        dddddd666666666dddd
        .dddddd66666666dddd
        ..dddddd6666666dddd
        ...dddddd666666dddd
        ....ddddb666666dddd
        ....8ddb6666666bbbb
        ....88b88888888....
        ....88888888888....
        ....88888888888....
        ....88888888888....
        ....88888888888....
        ....88888888888....
        ....88888888888....
        ....88888888888....
        ....bcccbbbcccb....
        ....bbbbbbbbbbb....
        `,img`
        ....eeeeeeeeeee....
        ....eeeeeeeeeee....
        ....edeeeeeeeee....
        ....eddeeeeeeee....
        ....ddddddddddd....
        ....d1fdddddf1d....
        ....ddddddddddd....
        ....dddedddeddd....
        ....dddeeeeeddd....
        ....ddddddddddd....
        6666666666666666666
        6666666666666666666
        666666666666666dddd
        ddd666666666666dddd
        dddd66666666666dddd
        ddddd6666666666dddd
        dddddd666666666dddd
        .dddddd66666666dddd
        ..dddddd6666666dddd
        ...dddddd666666dddd
        ....ddddb666666dddd
        ....8ddb6666666bbbb
        ....88b88888888....
        ....88888888888....
        ....88888888888....
        ....88888888888....
        ....88888888888....
        ....88888888888....
        ....88888888888....
        ....88888888888....
        ....bcccbbbcccb....
        ....bbbbbbbbbbb....
        `,img`
        ....eeeeeeeeeee....
        ....eeeeeeeeeee....
        ....edeeeeeeeee....
        ....eddeeeeeeee....
        ....ddddddddddd....
        ....d1fdddddf1d....
        ....ddddddddddd....
        ....dddedddeddd....
        ....dddeeeeeddd....
        ....ddddddddddd....
        6666666666666666666
        6666666666666666666
        dddd66666666666dddd
        dddd66666666666dddd
        dddd66666666666dddd
        dddd66666666666dddd
        dddd66666666666dddd
        dddd66666666666dddd
        dddd66666666666dddd
        dddd66666666666dddd
        dddd86666666666dddd
        bbbb88666666666bbbb
        ....88888888888....
        ....88888888888....
        ....88888888888....
        ....88888888888....
        ....88888888888....
        ....88888888888....
        ....88888888888....
        ....88888888888....
        ....bcccbbbcccb....
        ....bbbbbbbbbbb....
        `],
    200,
    false
    )
    info.setScore(0)
    if (shootDirection == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . b . . . . 
            . . . . . . . . . . . b . . . . 
            . . . . . . . . . . . b . . . . 
            . . . . . . . . . . . b b . . . 
            . . . . . . . . . . . d b . . . 
            . . . . . . . . . . . d b . . . 
            . . . . . . . . . . d d b . . . 
            . . . . . . . . . d d b . . . . 
            . . . . . . . . d d b . . . . . 
            . . . . . . d d d b . . . . . . 
            b b b b b d d b . . . . . . . . 
            . . . . . b b . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Steve, 50, 0)
    } else if (shootDirection == 2) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . b . . . . 
            . . . . . . . . . . . b . . . . 
            . . . . . . . . . . . b . . . . 
            . . . . . . . . . . . b b . . . 
            . . . . . . . . . . . d b . . . 
            . . . . . . . . . . . d b . . . 
            . . . . . . . . . . d d b . . . 
            . . . . . . . . . d d b . . . . 
            . . . . . . . . d d b . . . . . 
            . . . . . . d d d b . . . . . . 
            b b b b b d d b . . . . . . . . 
            . . . . . b b . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Steve, -50, 0)
    } else if (shootDirection == 3) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . b . . . . 
            . . . . . . . . . . . b . . . . 
            . . . . . . . . . . . b . . . . 
            . . . . . . . . . . . b b . . . 
            . . . . . . . . . . . d b . . . 
            . . . . . . . . . . . d b . . . 
            . . . . . . . . . . d d b . . . 
            . . . . . . . . . d d b . . . . 
            . . . . . . . . d d b . . . . . 
            . . . . . . d d d b . . . . . . 
            b b b b b d d b . . . . . . . . 
            . . . . . b b . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Steve, 0, -50)
    } else if (shootDirection == 4) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . b . . . . 
            . . . . . . . . . . . b . . . . 
            . . . . . . . . . . . b . . . . 
            . . . . . . . . . . . b b . . . 
            . . . . . . . . . . . d b . . . 
            . . . . . . . . . . . d b . . . 
            . . . . . . . . . . d d b . . . 
            . . . . . . . . . d d b . . . . 
            . . . . . . . . d d b . . . . . 
            . . . . . . d d d b . . . . . . 
            b b b b b d d b . . . . . . . . 
            . . . . . b b . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Steve, 0, 50)
    } else {
    	
    }
    pause(200)
    sprites.destroy(projectile)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    shootDirection = 2
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    shootDirection = 1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    shootDirection = 4
})
let projectile: Sprite = null
let shootDirection = 0
let Steve: Sprite = null
Steve = sprites.create(img`
    ....eeeeeeeeeee....
    ....eeeeeeeeeee....
    ....eddeeeeeeee....
    ....edddeeeeeee....
    ....ddddddddddd....
    ....d1fdddddf1d....
    ....ddddddddddd....
    ....dddedddeddd....
    ....dddeeeeeddd....
    ....ddddddddddd....
    6666666666666666666
    6666666666666666666
    dddd666666666666666
    dddd66666666666dddd
    dddd66666666666dddd
    dddd66666666666dddd
    dddd66666666666dddd
    dddd66666666666dddd
    dddd66666666666dddd
    dddd66666666666dddd
    dddd86666666666dddd
    bbbb88866666666bbbb
    ....88888888888....
    ....88888888888....
    ....88888888888....
    ....88888888888....
    ....88888888888....
    ....88888888888....
    ....88888888888....
    ....88888888888....
    ....bcccbbbcccb....
    ....bbbbbbbbbbb....
    `, SpriteKind.Player)
controller.moveSprite(Steve, 100, 0)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111999999999999999999999999
    9999999999999999991111111999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111999999999999999999999999
    9999991111111111111111111111111111999999999999999999999999999999999999999555555555599999999999999111111111111111111111111111111111111111999999999999999999999999
    9999991111111111111111111111111111999999999999999999999999999999999999999555555555599999999999911111111111111111111111111111111111111111999999999999999999999999
    9999991111111111111111111111111111999999999999999999999999999999999999999555555555599999999999911111111111111111111111111111111111111111999999999999999999999999
    9999991111111111111111111111111111999999999999999999999999999999999999999555555555599999999999911111111111111111111111111111111111111111999999999999999999999999
    9999991111111111111111111111111111999999999999999999999999999999999999999555555555599999999999911111111111111111111111111111111111111111999999999999999999999999
    9999991111111111111111111111111111999999999999999999999999999999999999999555555555599999999999911111111111111111111111111111111111111111119999999999999999999999
    9999991111111111111111111111111111999999999999999999999999999999999999999555555555599999999999999111111111111111111111111111111111111111119999999999999999999999
    9999991111111111111111111111111111999999999999999999999999999999999999999555555555599999999999999111111111111111111111111111111111111111119999999999999999999999
    9999991111111111111111111111111111999999999999999999999999999999999999999555555555599999999999999111111111111111111111111111111111111111119999999999999999999999
    9999991111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111119999999999999999999999
    9999991111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111999999999999999999999999
    9999991111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111999999999999999999999999
    9999991111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111999999999999999999999999
    9999991111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111999999999999999999999999
    9999991111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111999999999999999999999999
    9999991111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111999999999999999999999999
    9999991111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111999999999999999999999999
    9999991111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    `)
tiles.setCurrentTilemap(tilemap`level2`)
scene.cameraFollowSprite(Steve)
Steve.ay = 300
shootDirection = 1