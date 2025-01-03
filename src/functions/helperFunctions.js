export const isLightHexCode = (hexCode) => {
    // If the brightness value is greater than or equal to 128, the color is considered light.
    const values = hexCode.split('')

    for (let i = 1; i <= values.length; i+=2) {
        let val = parseInt(values[i],16) * parseInt(values[i+1],16)
        if (val>=128) {
            return true
        }
    }
    return false
}

export const debounce = (cb, delay = 300) => {
    let timer;
    return(...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {cb.apply(this,args)},delay)
    }
}

export const processChange = debounce((func) => {func()});

