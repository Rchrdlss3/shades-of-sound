import { useContext, useEffect, useRef, useState } from "react";
import {getAlbumByLocation} from '../functions/aiFunctions';
import { getColors, spotifySearch } from "../functions/spotifyFunctions";
import { AlbumContext, ThemeContext } from "../App";
import { albumImageStyle, albumStyles } from "../styles/appStyles";
import SearchBarComponent from "./SearchBarComponent";

export default function AlbumComponent() {
    const [theme,setTheme] = useContext(ThemeContext)
    const [album,setAlbum] = useContext(AlbumContext)
    const [description,setDescription] = useState('');

    useEffect(() => {
        getAlbumByLocation().then(res => {
            setDescription(res.description)
            spotifySearch(res.album,'album').then(albumRes => {
                setAlbum(albumRes.albums.items[0])
                getColors(albumRes.albums.items[0].images[0].url).then(colorPalette => {
                     setTheme(prev => ({...prev, palette: colorPalette}))
                }
                )
            })
        }
        )   
    },[])

    return (
        <div style = {albumStyles()}>
        <img style = {albumImageStyle()} src = {album.images[0].url}/>
        <h2>{album.name}</h2>
        <p>{description}</p>
        <SearchBarComponent />
        </div>
    )
}