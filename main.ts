radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        kitronik_servo_lite.forward()
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (receivedNumber == 1) {
        kitronik_servo_lite.left()
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (receivedNumber == 2) {
        kitronik_servo_lite.right()
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (receivedNumber == 8) {
        kitronik_servo_lite.backward()
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else {
        kitronik_servo_lite.stop()
        basic.showIcon(IconNames.No)
    }
})
radio.setGroup(1)
basic.forever(function () {
	
})
