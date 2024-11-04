import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../App"
import { buttonStyle, paletteStyle, paletteWrapper } from "../styles/appStyles";
import { getColorExplanation } from "../functions/aiFunctions";
import LoadingComponent from "./general/LoadingComponent";
import { isLightHexCode } from "../functions/helperFunctions";
import AIColorExplanationComponent from "./AIColorExplanationComponent";

export default function PaletteComponent() {
    const [theme,setTheme] = useContext(ThemeContext);
    const [colorExplanation,setColorExplanation] = useState('');
    const [loading,setIsLoading] = useState(Boolean);
    const [explanationLoading,setExplanationLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        if (theme.palette[0].hex) {
            getColorExplanation(theme.palette[0].hex)
            .then(res => {
                setColorExplanation(res.text)
                setIsLoading(false)
            })
        }
    },[theme.palette[0].hex])

    return loading ?  <LoadingComponent /> : (
        <div style = {{width: '100%'}}>
            <div style = {{width: '90%', height: '50%', justifyContent: 'center', alignContent: 'center'}}>
            <AIColorExplanationComponent colorExplanation={colorExplanation} explanationLoading={explanationLoading}/>
            
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
                    <button style = {buttonStyle(color.hex)} onClick = {() => {
                        setExplanationLoading(true)
                        getColorExplanation(color.hex).then(res => {
                            setColorExplanation(res.text)
                            setExplanationLoading(false)
                        })
                        }}>AI</button>
                    </div>
            })}
        </div>
        </div>
    )
}

