import { useEffect, useState } from "react"
import { getGifs } from "../components/helpers/GetGifs";

export const useFetchGifs = (category) =>{
    //estado inicial del state
    const [state, setstate] = useState({
        data:[],
        loading:true
    });

    useEffect(()=>{
        getGifs(category)
            .then(imgs =>{

                    setstate({
                        data:imgs,
                        loading:false
                    });
            })
    },[category])

   

    return state;
    
}