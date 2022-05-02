import './ShoppingCart.css'

import { useEffect, useState } from 'react'

import ShopingCartDisplay from '../../components/ShopingCartDisplay/ShopingCartDisplay'
import { fetchCollectionData, buyAllItemsFromShoppingCart } from '../../firestore/firestore'

export default function ShoppingCart(){
    let finalPrice = 0    
    const [collectionData, setCollectionData] = useState([])
    const [bought,setBought] = useState(false)

    async function fetchShoppingCartData(){
        const data = await fetchCollectionData('ShopingCart')
        setCollectionData([...data])
    }

    useEffect(() => {
        fetchShoppingCartData()
    }, [])
    
    function handleOnClick(e){
        buyAllItemsFromShoppingCart()
        finalPrice = 0
        setBought(true)
    }

    return(
        <div className='ShoppingCartContainer'>
            <div className='SH-TitlesBar'>
                <h4 className='SH-TitlesBar-Name'>Nombre</h4>
                <h4 className='SH-TitlesBar-Cant'>Cantidad</h4>
                <h4 className='SH-TitlesBar-Price'>Precio</h4>
                <h4 className='SH-TitlesBar-Action'></h4>
            </div>

            {!bought?
                collectionData.map(document => {
                    finalPrice += document.price*document.cant
                    return(
                        <ShopingCartDisplay 
                            cant={document.cant}
                            name={document.name}
                            price={document.price}
                            colName={document.colName}
                        />
                    )
                })
                :<></>
            }
            <div className='SH-BuyBar'>
                <h3>Final price: {finalPrice}</h3>
                <button className='SH-comprar' onClick={handleOnClick}>Comprar</button>
            </div>
        </div>
    )
}