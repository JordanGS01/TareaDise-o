import './Shop.css'

//Firebase functionalities
import { fetchCollectionData } from '../../firestore/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

//Components
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay'

export default function Shop(){
    const params = useParams() 
    const [collectionsData,setCollectionsData] = useState([])

    useEffect(() => {      
      fetchCollectionsData()
    }, [params])
    
    async function fetchCollectionsData(){
        let colsData = []
        const categoria = params.categorie
        
        if(categoria === 'Monitores'){
            const colMonitores = await fetchCollectionData('monitores')            
            colsData = [...colMonitores]
        }else if(categoria === 'Portatiles'){
            const colPortatiles = await fetchCollectionData('portatiles')
            colsData = [...colPortatiles]
        }else if(categoria === 'Ratones'){
            const colRatones = await fetchCollectionData('ratones')
            colsData = [...colRatones]
        }else if(categoria === 'Teclados'){
            const colTeclados = await fetchCollectionData('teclados')    
            colsData = [...colTeclados]
        }else{
            const colMonitores = await fetchCollectionData('monitores')
            const colPortatiles = await fetchCollectionData('portatiles')
            const colRatones = await fetchCollectionData('ratones')
            const colTeclados = await fetchCollectionData('teclados')    
            colsData = [...colMonitores,...colPortatiles,...colRatones,...colTeclados]
        }
        setCollectionsData(colsData)
    }    

    return(
        <div className='ShopContainer'>
            {
                collectionsData.map(product =>{
                    return(
                        <ProductDisplay
                            key={product.name}
                            img={product.img}
                            name={product.name}
                            price={product.price}
                            cant={product.cant}
                            type={product.type}
                        />
                    )
                })
            }
        </div>
    )
}