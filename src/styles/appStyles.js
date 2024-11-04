import { isLightHexCode } from "../functions/helperFunctions";

export const mainStyles = (theme) => {
    return {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'row',
        padding: '10px',
        backgroundColor: theme.palette[0].hex,
        textAlign: 'center',
        transition: '1s'
    }
}

export const albumStyles = () => {
    return {
        height: '100%',
        width: '50%',
        borderRadius: 10
    }
}

export const albumImageStyle = () => {
    return {
        width: '400px',
        height: '400px',
        borderRadius: '5%',
        padding: 10
    }
}

export const paletteStyle = (color) => {
    return {
        width: '100px',
        height: '100px',
        backgroundColor: color,
        borderRadius: '5%',
        flex: 'none',
        margin: '5px',
        boxShadow: '0 6px 6px 2px  #00000030',
        color: color ? isLightHexCode(color) ? '#000' : '#fff' : null
    }
}

export const paletteWrapper = () => {
    return {
        display: 'flex',
        flexDirection: 'row',
        width: '500px',
        height: '150px',
        overflowX: 'scroll'
    }
}

export const searchComponentWrapper = () => {
    return {
        width: '100%',
        height: '50%',
        overflowY: 'scroll',
    }
}

export const searchWrapper = () => {
    return {
        width: '100%',
        height: '100%',
        margin: '5px',
        padding: 10,
    }
}

export const searchBarStyle = () => {
    return {
        width: '100%',
        height: '30px',
        border: 'none',
        borderRadius: '5px'
    }
}

export const buttonStyle = (hexCode) => {
    const color = hexCode ? isLightHexCode(hexCode) ? '#000000' : '#eeeeee' : null
    return {
        background: 'none', 
        borderRadius: '10px', 
        boxShadow: 'none', 
        border: `1px solid ${color}50`, 
        color: color,
        width: '50px'
        }
}