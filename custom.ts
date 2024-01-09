
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://minecraft.makecode.com/blocks/custom
*/

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon="\uf06b" block="おにごっこ"
namespace custom {

    let wait_time = 0
    let p_direction = 0
    let hole_direction = 0
    let p_pos: Position = null
    let s_pos: Position = null
    let e_pos: Position = null


    //% blockId=speed
    //% block=すぴーど 
    export function speed(): void {
        mobs.applyEffect(SPEED, mobs.target(LOCAL_PLAYER), 3, 2)
    }

    //% blockId=hole
    //% block=あな
    export function hole(): void {

        wait_time = 5000
        p_direction = player.getOrientation()
        // player.say(p_direction)
        if (p_direction > -45 && p_direction < 45) {
            hole_direction = 1
        } else if (p_direction >= 45 && p_direction < 135) {
            hole_direction = 2
        } else if (p_direction >= -135 && p_direction < -45) {
            hole_direction = 4
        } else {
            hole_direction = 3
        }
        p_pos = player.position()
        blocks.deleteStructure("hole_blocks")
        // player.say(hole_direction)
        // 穴の向きをhole_direction で設定
        if (hole_direction == 1) {
            s_pos = world(p_pos.getValue(Axis.X) + -1, p_pos.getValue(Axis.Y) + -2, p_pos.getValue(Axis.Z) + -4)
            e_pos = world(p_pos.getValue(Axis.X) + 0, p_pos.getValue(Axis.Y) + -2, p_pos.getValue(Axis.Z) + -3)
            blocks.saveStructure(
                "hole_blocks",
                pos(-1, -2, -2),
                pos(1, 0, -4),
                false,
                DISK,
                true
            )
            blocks.fill(
                AIR,
                pos(-1, -2, -2),
                pos(1, 0, -4),
                FillOperation.Replace
            )
            loops.pause(wait_time)
            mobs.execute(
                mobs.near(
                    mobs.target(ALL_PLAYERS),
                    e_pos,
                    2
                ),
                pos(0, 0, 0),
                "/tp ~+4 ~+2 ~"
            )
            blocks.loadStructure(
                "hole_blocks",
                s_pos
            )
        }
        // player.say(hole_direction)
        // 穴の向きをhole_direction で設定
        if (hole_direction == 2) {
            s_pos = world(p_pos.getValue(Axis.X) + 2, p_pos.getValue(Axis.Y) + -2, p_pos.getValue(Axis.Z) + -1)
            blocks.saveStructure(
                "hole_blocks",
                pos(2, -2, -1),
                pos(4, 0, 1),
                false,
                DISK,
                true
            )
            blocks.fill(
                AIR,
                pos(2, -2, -1),
                pos(4, 0, 1),
                FillOperation.Replace
            )
            loops.pause(wait_time)
            mobs.execute(
                mobs.near(
                    mobs.target(ALL_PLAYERS),
                    s_pos,
                    2
                ),
                pos(0, 0, 0),
                "/tp ~+4 ~+2 ~"
            )
            blocks.loadStructure(
                "hole_blocks",
                s_pos
            )
        }
        // player.say(hole_direction)
        // 穴の向きをhole_direction で設定
        if (hole_direction == 3) {
            s_pos = world(p_pos.getValue(Axis.X) + -1, p_pos.getValue(Axis.Y) + -2, p_pos.getValue(Axis.Z) + 2)
            blocks.saveStructure(
                "hole_blocks",
                pos(-1, -2, 2),
                pos(1, 0, 4),
                false,
                DISK,
                true
            )
            blocks.fill(
                AIR,
                pos(-1, -2, 2),
                pos(1, 0, 4),
                FillOperation.Replace
            )
            loops.pause(wait_time)
            mobs.execute(
                mobs.near(
                    mobs.target(ALL_PLAYERS),
                    s_pos,
                    2
                ),
                pos(0, 0, 0),
                "/tp ~+4 ~+2 ~"
            )
            blocks.loadStructure(
                "hole_blocks",
                s_pos
            )
        }
        // player.say(hole_direction)
        // 穴の向きをhole_direction で設定
        if (hole_direction == 4) {
            s_pos = world(p_pos.getValue(Axis.X) + -4, p_pos.getValue(Axis.Y) + -2, p_pos.getValue(Axis.Z) + -1)
            blocks.saveStructure(
                "hole_blocks",
                pos(-4, -2, -1),
                pos(-2, 0, 1),
                false,
                DISK,
                true
            )
            blocks.fill(
                AIR,
                pos(-4, -2, -1),
                pos(-2, 0, 1),
                FillOperation.Replace
            )
            loops.pause(wait_time)
            mobs.execute(
                mobs.near(
                    mobs.target(ALL_PLAYERS),
                    s_pos,
                    2
                ),
                pos(0, 0, 0),
                "/tp ~+4 ~+2 ~"
            )
            blocks.loadStructure(
                "hole_blocks",
                s_pos
            )
        }
    }
    //% blockId=jump
    //% block="じゃんぷ"
    export function jump(): void {
        mobs.applyEffect(JUMP_BOOST, mobs.target(LOCAL_PLAYER), 10, 2)
    }
}