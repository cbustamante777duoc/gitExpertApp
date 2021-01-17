import React from 'react'

export const GifGridItem = ({id, tittle,url}) => {
    
    return (
        <div className="card animate__animated animate__backInDown">
            <img src={url} alt={tittle} />
            <p>{tittle}</p>
        </div>
    )
}
