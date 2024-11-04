import { useContext, useState, useEffect } from "react";
import { searchComponentWrapper, searchWrapper } from "../styles/appStyles";
import { AlbumContext, SearchedContext, ThemeContext } from "../App";
import { getAlbum, getColors } from "../functions/spotifyFunctions";
import AIOverviewComponent from "./AIOverviewComponent";
import LoadingComponent from "./general/LoadingComponent";
import { albumSummary } from "../functions/aiFunctions";

export default function SearchComponent() {
    const [theme,setTheme] = useContext(ThemeContext);
    const [searchedAlbums,setSearchedAlbums] = useContext(SearchedContext);
    const [album,setAlbum] = useContext(AlbumContext);
    const [description,setDescription] = useState('');
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        albumSummary(album).then(res => {
            if(res !== undefined){
                setDescription(res.text)
                setLoading(false)
            }
        })
    },[album])

    return loading ? <LoadingComponent /> : 
        <div style = {searchWrapper()}>
            <div style = {searchComponentWrapper()}>
            {searchedAlbums.albums.items[0].id !== "" ? searchedAlbums.albums.items.map((album) => {
                return(
                    <div key = {album.id}>
                    <img style = {{width: '150px',borderRadius: '5px'}} alt = {'album image'} src={album.images[0].url} onClick = {() => 
                    {
                        getAlbum(album.id).then(data => 
                            {
                                setAlbum(data)
                                getColors(data.images[0].url).then(colorPalette => {
                                    setTheme(prev => ({...prev, palette: colorPalette}))
                               }
                            )
                            })
                    }}/>
                    <p>{album.name}</p>
                    <p>{album.artists[0].name}</p>
                    </div>
                )
            }) : <h1 style = {{alignContent:'center', height: '100%'}}>Start Search</h1>}

            </div>
            {<AIOverviewComponent description={description} loading = {loading}/>}
        </div>
    
}