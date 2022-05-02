import './CategorieDisplay.css'
import { Link } from 'react-router-dom'

export default function CategorieDisplay(props){    
    return(
        <Link to={`Shop/${props.categorie}`} className="categorieDisplayItem">
            <img src={props.img} className="CDImg"/>
            <p className='CDtext'>{
                props.categorie === 'Portatiles'?
                'Portátiles':props.categorie}
            </p>
        </Link>
    )
}