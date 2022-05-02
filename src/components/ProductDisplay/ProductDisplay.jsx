import './ProductDisplay.css'

import { useState } from 'react'
import { addToShoppingCart } from '../../firestore/firestore'
/*Types:
    m: monitores
    p: portatiles
    r: ratones
    t: teclados
 */
export default function ProductDisplay(props){
    const [cant, setCant] = useState(props.cant)

    function getColName(type){
        if(type === 'm'){
            return 'monitores'
        }else if(type === 'p'){
            return 'portatiles'
        }else if(type === 'p'){
            return 'ratones'
        }else{
            return 'teclados'
        }
    }

    function handleOnClick(e){
        const container = e.target.parentNode
        const productName = container.children[1].textContent
        
        const colName = getColName(props.type)
        const docInfo = {
            colName,
            cant: 1,
            name: props.name,
            price: props.price
        }

        addToShoppingCart(colName,productName,docInfo)
        setCant(cant-1)
    }
    return(
        <>
            {
            cant>0?
            <div className='ProductDisplayContainer'>
                <img src={props.img} className='ProductImg'/>
                <p className='ProductName'>{props.name}</p>
                <h4 className='ProductPrice'>₡ {props.price}</h4>
                <p className='Productc'>Disponibles: {cant}</p>
                <button className='AddButton' onClick={handleOnClick}>Agregar al carrito</button>
            </div>
            :<></>
            }
        </>
    )
}