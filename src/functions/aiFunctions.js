import { SERVER_URL } from "../helper";

const getUserIPAddress = async () => {
    const ipAddress = await fetch('https://api.ipify.org?format=json')
    .then((resp) => resp.json())
    .then((data) => {return data.ip})
    return await ipAddress
}

export const getAlbumByLocation = async () => {
    const ipAddress = await getUserIPAddress();
    const data = await fetch(`${SERVER_URL}/ai/music?address=${ipAddress}`)
    .then(res => {return res})
    return data.json()
}

export const albumSummary = async (album) => {
    if (album.artists != null) {
    try {
        const data = await fetch(`${SERVER_URL}/ai/summarize?name=${album.name}&artist=${album.artists[0].name}`)
        .then(res => {return res})
        return data.json()
    } catch (e) {
        console.log(e)
    }
}
}

export const getColorExplanation = async (hexcode) => {
    try {
        const data = await fetch(`${SERVER_URL}/ai/color?hex=${hexcode.substring(1)}`)
        .then(res => {return res})
        return data.json()
    } catch (e) {
        console.log(e)
    }
}