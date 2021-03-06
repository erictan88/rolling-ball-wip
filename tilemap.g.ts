// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005020400000000000000000000000000020202000000000000000000000000000302010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 2 2 2 . . . . . 
. . . . . . . . 2 2 2 . . . . . 
. . . . . . . . 2 2 2 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.swamp.swampTile14,sprites.swamp.swampTile9,sprites.swamp.swampTile12,sprites.swamp.swampTile8,sprites.swamp.swampTile6], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`3c000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000010101010100000000000000000000000000000000000000000101010000000000000001010000000000000000000002000000000000000000000000010000000000000000000100000000000000000000000000000000000000000000000000000000000000000101000002000000000000000100000000000000000000000001000100010000000000000000000101000000000000000000000000000001010000000000000002000000000000010100000100000000000000010001000100010001000000000000000000000000000000000000010100000000000000000000000002000000000001010100000100000000000100010001000100010001000100000101000000000000000000010101000000000000000000000000000002010101010101010103030101010303010103010301030103010301010103030101010101030303030101010101010101030303010101010303030101`, img`
............................................................
............................................................
............22222....................222.......22...........
............2.........2................................22...
.......2............2.2.2.........22..............22........
......22..2.......2.2.2.2.2..................22.............
.....222..2.....2.2.2.2.2.2.2..22.........222...............
222222222222222222222222222222222222222222222222222222222222
`, [myTiles.transparency16,sprites.dungeon.floorLight2,sprites.dungeon.collectibleInsignia,sprites.dungeon.hazardLava0], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101010101010101`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorLight2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
