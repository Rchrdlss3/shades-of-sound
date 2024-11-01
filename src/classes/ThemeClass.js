export class Palette {
    constructor (hex,red,green,blue,hue,intensity,lightness,saturation,area) {
        this.hex = hex
        this.red = red
        this.green = green
        this.blue = blue
        this.hue = hue
        this.intensity = intensity
        this.lightness = lightness
        this.saturation = saturation
        this.area = area
    }
}
export class Theme {
    constructor (fontColor,palette) {
        this.fontColor = fontColor
        this.palette = [Palette]
    }
}