basic.showString("UNDERTALE")
basic.forever(function () {
    let random_quote = 0
    if (random_quote == 1) {
        images.createImage(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `).scrollImage(1, 50)
        while (random_quote == 1) {
            if (input.buttonIsPressed(Button.A)) {
                basic.showString("despite everything it is still you ...")
            }
        }
        images.createImage(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `).scrollImage(1, 50)
    }
})
