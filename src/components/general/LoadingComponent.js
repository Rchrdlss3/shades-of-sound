import ReactLoading from 'react-loading';
import { useContext } from 'react';
import { ThemeContext } from '../../App';

export default function LoadingComponent() {
    const [theme,setTheme] = useContext(ThemeContext);

    return (
        <div style = {{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            justifyItems: 'center'
        }}>
        <ReactLoading type= "cylon" color = {theme.palette[1] ? theme.palette[1].hex : "#89BFF8"} height={'20%'} width={'20%'}/>
        </div>
    )
}