import { createContext, useState } from "react";
import AlbumComponent from "./components/AlbumComponent";
import PaletteComponent from "./components/PaletteComponent";
import { Theme } from "./classes/ThemeClass";
import { mainStyles } from "./styles/appStyles";
import SearchComponent from "./components/SearchComponent";
import { searchedAlbumsClass, SpotifyAlbumClass } from "./classes/SpotifyClasses";

export const ThemeContext = createContext();
export const SearchedContext = createContext();
export const AlbumContext = createContext();

const App = () => {
  const [theme,setTheme] = useState(new Theme());
  const [album,setAlbum] = useState(SpotifyAlbumClass);
  const [searchedAlbums,setSearchedAlbums] = useState(searchedAlbumsClass)
  return (
    <div style = {mainStyles(theme)}>
    <ThemeContext.Provider value = {[theme,setTheme]}>
    <SearchedContext.Provider value = {[searchedAlbums,setSearchedAlbums]}> 
    <AlbumContext.Provider value = {[album,setAlbum]}>
    <AlbumComponent />
    <SearchComponent />
    <PaletteComponent />
    </AlbumContext.Provider>
    </SearchedContext.Provider>
    </ThemeContext.Provider>
    </div>
  );
}

export default App;
