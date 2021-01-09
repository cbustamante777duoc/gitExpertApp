import React, { useState } from 'react'

export default function GifExpertApp() {

  // const categories = ['One Punch','Samurai X','Dragon ball'];

  const [categories, setcategories] = useState(['One Punch','Samurai X','Dragon ball']);
 
  //al ser apretado el boton agregar copia el arreglo con sus referencia ...categorie y agrega el 
  //nuevo elemento = 'Jennie'
  const handleAdd = () =>{
     setcategories([...categories,'Jennie']);
  }
   
    return (
        <div>
            <h2>GifExpertApp</h2>
            <hr></hr>
            <button onClick={handleAdd}>Agregar</button>
            <ol>
                {
                    //recorre el arreglo y lo iterra en cada ciclo 
                    categories.map(category =>{
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </div>
    )
}
