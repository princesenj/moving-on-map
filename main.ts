scene.setBackgroundColor(6)
let mySprite = sprites.create(img`
    ........................
    .....ffff...............
    ...fff22fff.............
    ..fff2222fff............
    .fffeeeeeefff...........
    .ffe222222eef...........
    .fe2ffffff2ef...........
    .ffffeeeeffff...........
    ffefbf44fbfeff..........
    fee41fddf14eef..........
    .ffffdddddeef...........
    fddddf444eef............
    fbbbbf2222f4e...........
    fbbbbf2222fd4...........
    .fccf45544f44...........
    ..ffffffff..............
    ....ff..ff..............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(hex`1000100005050505050605050505050501050505050501050505050505050505050505050506050505030505050504050505060505050505050505050505050505050505050205050501050506050505050505050505050505050505050505050505050605050505050505050505060505050505050505060505050501050505060502050505010505050505050505050505050505050505050505050505050505050505050505050505050505050505050105050502050505010505050505050505050505050505050505050605050505050505050506050505050505050505010505050505010505050505050505050505050506050505050505050505050505050506`, img`
    . . . . . . . . . . . . 2 . . . 
    . . 2 . . . . . 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 2 . . . 2 . . . . . . . 2 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 2 . . . . . 2 . 
    . . 2 . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 2 . . 
    . 2 . . . 2 . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . 2 . . . 
    . . 2 . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.tile0,sprites.builtin.coral0,sprites.builtin.oceanDepths5,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.chestClosed,sprites.dungeon.darkGroundSouthEast0,sprites.castle.tileDarkGrass3], TileScale.Sixteen))
scene.cameraFollowSprite(mySprite)
