radio.onReceivedNumber(function (receivedNumber) {
    led.toggle(0, 0)
    RCV = receivedNumber
    if (RCV >= 32) {
        FIRE_2 = 1
        RCV = RCV - 32
    } else {
        FIRE_2 = 0
    }
    if (RCV >= 16) {
        FIRE_1 = 1
        RCV = RCV - 16
    } else {
        FIRE_1 = 0
    }
    if (RCV == 8) {
        DIR_RIGHT = 1
        RCV = RCV - 8
    } else {
        DIR_RIGHT = 0
    }
    if (RCV == 4) {
        DIR_LEFT = 1
        RCV = RCV - 4
    } else {
        DIR_LEFT = 0
    }
    if (RCV >= 2) {
        DIR_REV = 1
        RCV = RCV - 2
    } else {
        DIR_REV = 0
    }
    if (RCV >= 1) {
        DIR_FWD = 1
        RCV = RCV - 1
    } else {
        DIR_FWD = 0
    }
})
let DIR_FWD = 0
let DIR_REV = 0
let DIR_LEFT = 0
let DIR_RIGHT = 0
let FIRE_1 = 0
let FIRE_2 = 0
let RCV = 0
radio.setGroup(179)
loops.everyInterval(500, function () {
    led.toggle(0, 4)
})
basic.forever(function () {
	
})
loops.everyInterval(200, function () {
    if (DIR_FWD == 1) {
        led.plot(1, 1)
    } else {
        led.unplot(1, 1)
    }
    if (DIR_REV == 1) {
        led.plot(1, 3)
    } else {
        led.unplot(1, 3)
    }
    if (DIR_LEFT == 1) {
        led.plot(0, 2)
    } else {
        led.unplot(0, 2)
    }
    if (DIR_RIGHT == 1) {
        led.plot(2, 2)
    } else {
        led.unplot(2, 2)
    }
    if (FIRE_1 == 1) {
        led.plot(4, 1)
    } else {
        led.unplot(4, 1)
    }
    if (FIRE_2 == 1) {
        led.plot(4, 3)
    } else {
        led.unplot(4, 3)
    }
})
