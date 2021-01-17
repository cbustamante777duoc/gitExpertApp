import React, { Fragment } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// import { getGifs } from './helpers/GetGifs';

export const GifGrid = ({category}) => {


    const {data:images,loading} = useFetchGifs(category);
    
    return (
        <Fragment>
            <h3>{category}</h3>

           {loading && <p className="card animate__animated animate__flash">loading</p>  }
            <div className="card-grid">

                {
                    //envio de img al compomente gifGridItem
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }

            </div>
        </Fragment>
        
    )
}
