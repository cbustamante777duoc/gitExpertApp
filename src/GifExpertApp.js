import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export default function GifExpertApp() {

  // const categories = ['One Punch','Samurai X','Dragon ball'];

  const [categories, setcategories] = useState(['black pink']);
 
  //al ser apretado el boton agregar copia el arreglo con sus referencia ...categorie y agrega el 
  //nuevo elemento = 'Jennie'
  /*const handleAdd = () =>{
     setcategories([...categories,'Jennie']);
  }*/
   
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories={setcategories} />
            <hr></hr>
            
            <ol>
                {
                    //recorre el arreglo y lo iterra en cada ciclo 
                    categories.map(category =>(<GifGrid 
                        key={category}
                        category={category}

                        />
                    ))
                }
            </ol>
        </div>
    )
}
