basic.showIcon(IconNames.Happy)
music.play(music.stringPlayable("B C5 B B C5 D C C ", 112), music.PlaybackMode.InBackground)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
    basic.pause(600)
})
