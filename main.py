def on_button_a():
    if input.temperature() < 15:
        basic.set_led_color(basic.rgb(0, 0, 255))
    if input.temperature() > 25:
        basic.set_led_color(basic.rgb(255, 0, 0))
    else:
        basic.set_led_color(basic.rgb(0, 255, 0))
    basic.show_string("" + str((input.temperature())))
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

basic.show_icon(IconNames.HEART)