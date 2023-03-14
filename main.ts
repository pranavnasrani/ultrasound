let p = 0
let time = 0
basic.forever(function () {
    p = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P0,
    PingUnit.Inches
    )
    if (p < 6) {
        for (let index = 0; index < 2; index++) {
            time += 1
            basic.pause(1000)
        }
        if (p < 6 && time == 2) {
            basic.showIcon(IconNames.No)
        }
    } else {
        time = 0
        basic.clearScreen()
    }
})
