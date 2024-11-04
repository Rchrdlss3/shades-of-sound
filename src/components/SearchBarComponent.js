import { useContext, useState } from "react";
import { searchBarStyle } from "../styles/appStyles";
import { spotifySearch } from "../functions/spotifyFunctions";
import { SearchedContext } from "../App";
import { searchedAlbumsClass } from "../classes/SpotifyClasses";
import { debounce, processChange } from "../functions/helperFunctions";

export default function SearchBarComponent () {
    const [search,setSearch] = useState('');
    const [searchedAlbums,setSearchedAlbums] = useContext(SearchedContext);

    return (
        <div>
            <input 
            style = {searchBarStyle()}
            type = "text"
            placeholder= "Start Search..."
            value = {search}
            onChange = {(e) => {
                const value = e.target.value
                setSearch(value)
                if (value.length != 0 ) {
                    processChange(() => spotifySearch(value,'album').then(res => setSearchedAlbums(res)))
                } else {
                    setSearchedAlbums(searchedAlbumsClass)
                }
            }}
            onKeyDown= {(e) => {if (e.key == 'Enter') {}}}
            />
        </div>
    )
}