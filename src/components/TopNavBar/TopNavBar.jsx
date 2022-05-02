import './TopNavBar.css';

import { Link } from 'react-router-dom';
import SearchLogo from '../../images/logos/SearchLogo.png'
import ShoppingCartLogo from '../../images/logos/ShoppingCartLogo.png'

export default function TopNavBar() {
  return (
    <div className="TopNavBarContainer">
      <Link to="/" className='LinkSmallButtons'>
        <button className="SmallButton">M</button>
      </Link>
      <Link to='/Shop/Todas' className='LinkSmallButtons'>
        <button className="SmallButton">$</button>
      </Link>
    
      <div className="SearchBarContainer">
        <input
          className="SearchBar--Input"
          type="text"
          placeholder="Buscar..."
        />
        <button className="SearchButton">
          <img src={SearchLogo} />
        </button>
      </div>

      <Link to='/ShoppingCart' className='LinkShoppingCartButtons'>
        <button className="ShoppingCartPageButton">
            <img src={ShoppingCartLogo} />
        </button>
      </Link>
    </div>
  );
}
