import React, { useState } from 'react';
import PropTypes from 'prop-types';

//tiene que recibir un setCategories
export const AddCategory = ({setcategories}) => {
    const [inputValue, setinputValue] = useState('')

    //funcion que va a cambiar el valor del estado
    const handLeInpuntChange = (e) => {
        setinputValue(e.target.value);
    }

    const handLeSubmit = (e) =>{
        //prenventDefault() evita que se recarge la pagina
        e.preventDefault();
        //la validacion para evitar input vacios
       if (inputValue.trim().length>2) {
           //agrega el nuevo valor al arreglo de categories
           setcategories(cats =>[inputValue,...cats]);
           setinputValue('');
       }
    }

    return (
        <form onSubmit={handLeSubmit}>
            <h2>{inputValue}</h2>
            <input
                type="text"
                value={inputValue}
                //onchange cambia el estado
                onChange={handLeInpuntChange}
            />

        </form>
           
       
    )
}

//validacion requerida
AddCategory.propTypes = {
    setcategories : PropTypes.func.isRequired

}