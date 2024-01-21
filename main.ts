input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.showString("ON")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("WELCOME TO I-CITY")
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.showString("OFF")
})
