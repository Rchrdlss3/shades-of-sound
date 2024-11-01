import { useContext, useEffect, useState } from "react";
import {AlbumContext} from "../App";
import { albumSummary } from "../functions/aiFunctions";

export default function AIOverviewComponent(){
    const [album,setAlbum] = useContext(AlbumContext)
    const [description,setDescription] = useState('')

    useEffect(() => {
        albumSummary(album).then(res => {if(res != undefined){setDescription(res.text)}})
    },[album])
    
    return (
        <div>
            <h2>AI Overview of Album</h2>
            <p>{description}</p>
        </div>
    )
}