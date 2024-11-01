import { extractColors } from "extract-colors";
import { SERVER_URL } from "../helper";


export const getAccessToken = async () => {
    const response = await fetch(`${SERVER_URL}/spotify/get-token`)
    return response.json();
}

export const verifyAccessToken = () => {
    const expiration_time = localStorage.getItem("TOKEN_EXPIRATION");
    let access_token = localStorage.getItem("ACCESS_TOKEN");
    const date = new Date();

    if (access_token == null || expiration_time == null || Date.now() > expiration_time) {
        localStorage.setItem("TOKEN_EXPIRATION",date.setHours(date.getHours()+1))
        getAccessToken().then(data => localStorage.setItem("ACCESS_TOKEN",data.access_token))
    }
    return access_token
}

export const spotifySearch = async (name,type) => {
    const data = await fetch(`${SERVER_URL}/spotify/search?name=${name}&type=${type}`,
        {headers: {Authorization: `Bearer ${verifyAccessToken()}`}}
    )
    .then(res => res.json())
    .then(data => {return data})
    return data
}

export const getColors = async (imageSrc) => {
    try {
        return extractColors(imageSrc,{crossOrigin: 'anonymous'})
    } catch (e) {
        console.log(e)
    }
}

export const getAlbum = async (id) => {
    try {
        const data = await fetch(`${SERVER_URL}/spotify/get-album?id=${id}`,
            {headers: {Authorization: `Bearer ${verifyAccessToken()}`}})
            .then(res => res.json())
            .then(data => {return data})
            return data
    } catch (e) {
        console.log(e)
    }
}