import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../App"
import { paletteStyle, paletteWrapper } from "../styles/appStyles";
import { getColorExplanation } from "../functions/aiFunctions";

export default function PaletteComponent() {
    const [theme,setTheme] = useContext(ThemeContext);
    const [colorExplanation,setColorExplanation] = useState('');

    return (
        <div style = {{width: '100%'}}>
            <div style = {{width: '90%', height: '50%', justifyContent: 'center', alignContent: 'center'}}>
            <h1>AI Color Explanation</h1>
            {colorExplanation != null || '' ? <p>{colorExplanation}</p> : <h1>CLick on any button to get an explanation of each color.</h1>}
            
            </div>
        <div style = {paletteWrapper()}>
            {theme.palette.map(color => {
                return <div style = {paletteStyle(color.hex)}>
                    <p 
                    onMouseOver = {() => {document.body.style.cursor = 'pointer'}}
                    onMouseLeave = {() => document.body.style.cursor = 'default'}
                    onClick = {() => {navigator.clipboard.writeText(color.hex)}}>
                    {color.hex} 
                    <i className="fa fa-clipboard"></i>
                    </p>
                    <button onClick = {() => {getColorExplanation(color.hex).then(res => setColorExplanation(res.text))}}>AI</button>
                    </div>
            })}
        </div>
        </div>
    )
}

