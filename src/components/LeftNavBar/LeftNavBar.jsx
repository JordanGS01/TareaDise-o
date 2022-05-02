import './LeftNavBar.css'
import { Link } from 'react-router-dom'

export default function LeftNavBar(){
    return(
        <nav className='LeftNavBarContainer'>
            <h3>Categorias</h3>     

            <Link to='/Shop/Todas' className='LinkCategorie'>
                <h5>Todas</h5>
            </Link>            

            <Link to='/Shop/Monitores' className='LinkCategorie'>
                <h5>Monitores</h5>
            </Link>

            <Link to='/Shop/Portatiles' className='LinkCategorie'>
                <h5>Portátiles</h5>
            </Link>

            <Link to='/Shop/Ratones' className='LinkCategorie'>
                <h5>Ratones</h5>       
            </Link>

            <Link to='/Shop/Teclados' className='LinkCategorie'>
                <h5>Teclados</h5>
            </Link>
        </nav>
    )
}