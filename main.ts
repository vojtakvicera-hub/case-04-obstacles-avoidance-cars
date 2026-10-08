let sonor = 0
wuKong.setAllMotor(-30, -30)
basic.forever(function () {
    sonor = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1)
    if (sonor < 20 && sonor > 1) {
        wuKong.setAllMotor(-25, 50)
        basic.pause(randint(0, 10))
    } else {
        wuKong.setAllMotor(-100, -100)
    }
})
