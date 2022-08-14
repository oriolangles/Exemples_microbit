basic.showIcon(IconNames.Happy)
serial.redirectToUSB()
basic.forever(function () {
    serial.writeValue("digital signals", pins.digitalReadPin(DigitalPin.P15))
    basic.pause(100)
})
