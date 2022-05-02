import './MainPage.css';

import CategorieDisplay from '../../components/CategorieDisplay/CategorieDisplay';
import { useEffect, useState } from 'react';
import {fetchCollectionData} from '../../firestore/firestore'
export default function MainPage() {
  const [categories,setCategories] = useState([]);

  async function fetchAndSetCategories(){
    const categoriesData = await fetchCollectionData('categories')
    setCategories(categoriesData)
  }

  //Actualizamos los datos al inicio, cuando se renderizan los datos por primera vez
  useEffect(() => {
    fetchAndSetCategories()
  }, [])
  

  return (    
    <div className="MainPageContainer">
      <div className='CategoriesCarousel'>
        {
          categories.map(categorie =>{
            return(
              <CategorieDisplay img={categorie.linkImg} 
                              categorie={categorie.categorieName} />      
            )
          })        
        }        
      </div>
      
      <h1>Ofertas</h1>
      <p>Falta agregar los componentes de ofertas</p>
    </div>
  );
}