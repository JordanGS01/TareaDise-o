import './App.css';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route } from 'react-router-dom';
import TopNavBar from './components/TopNavBar/TopNavBar';
import MainPage from './pages/MainPage/MainPage';
import Shop from './pages/Shop/Shop';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart'
import LeftNavBar from './components/LeftNavBar/LeftNavBar'

function App() {
  return (
    <div className='App'>
      <Router>
        <TopNavBar />      
        <div className="RouterContainer">        
          <LeftNavBar />
          <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/Shop/:categorie" element={<Shop />}/>
            <Route path="/ShoppingCart" element={<ShoppingCart />}/>
            {/*ToDo: Agregar las rutas de las demás páginas */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
