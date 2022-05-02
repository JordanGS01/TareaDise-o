import './ShopingCartDisplay.css'
import { useState } from 'react'

import { deleteFromShoppingCart } from '../../firestore/firestore'

export default function ShopingCartDisplay(props){
    const [deleted, setDeleted] = useState(false)

    function handleOnClick(e){
        deleteFromShoppingCart(props.name,props.cant,props.colName)
        setDeleted(true)
    }

    return(
        <div className='ShopingCartElementDisplayContainer'>
            {
            !deleted?
            <div className='SCE-Container'>
                <p className='SCE-Name'>{props.name}</p>
                <p className='SCE-Cant'>{props.cant}</p>
                <p className='SCE-Price'>{props.price*props.cant}</p>
                <button className='SCE-Eliminar' onClick={handleOnClick}>Eliminar</button>
            </div>
            :
            <></>
            }
        </div>
    )
}