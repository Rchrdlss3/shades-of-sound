import { useContext, useEffect, useRef, useState } from "react";
import {getAlbumByLocation} from '../functions/aiFunctions';
import { getColors, spotifySearch } from "../functions/spotifyFunctions";
import { AlbumContext, SearchedContext, ThemeContext } from "../App";
import { albumImageStyle, albumStyles } from "../styles/appStyles";
import SearchBarComponent from "./SearchBarComponent";
import LoadingComponent from "./general/LoadingComponent";

export default function AlbumComponent() {
    const [theme,setTheme] = useContext(ThemeContext)
    const [album,setAlbum] = useContext(AlbumContext)
    const [searchedAlbums,setSearchedAlbums] = useContext(SearchedContext)
    const [description,setDescription] = useState('');
    const [loading,setIsLoading] = useState(Boolean);

    useEffect(() => {
        setIsLoading(true)
        getAlbumByLocation().then(res => {
            setDescription(res.description)
            spotifySearch(res.album,'album').then(albumRes => {
                setAlbum(albumRes.albums.items[0])
                getColors(albumRes.albums.items[0].images[0].url).then(colorPalette => {
                     setTheme(prev => ({...prev, palette: colorPalette}))
                     setIsLoading(false)
                    }
                )
            })
        }
        ) 
    },[])

    return loading ? <LoadingComponent /> :         <div style = {albumStyles()}>
    <img style = {albumImageStyle()} src = {album.images[0].url}/>
    <h2>{album.name}</h2>
    {searchedAlbums.albums.items[0].name == "" ? <p>{description}</p> : null}
    <SearchBarComponent />
    </div>
}