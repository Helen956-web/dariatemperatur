input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (input.temperature() < 15) {
        basic.setLedColor(basic.rgb(0, 0, 255))
    }
    if (input.temperature() > 25) {
        basic.setLedColor(basic.rgb(255, 0, 0))
    } else {
        basic.setLedColor(basic.rgb(0, 255, 0))
    }
    basic.showString("" + (input.temperature()))
})
basic.showIcon(IconNames.Heart)
