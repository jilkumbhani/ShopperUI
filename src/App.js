import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import ShopCategory from './Pages/ShopCategory';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
import Register from './Pages/Register';
import { useState } from 'react';

function App() {

  let loginscreen

  const [status, setStatus] = useState(loginscreen)
  
    loginscreen = localStorage.getItem('status')

    console.log(status)


  return (
    <BrowserRouter>
      {
        status ? <Routes>
          < Route path='/' element={< LoginSignup setStatus={setStatus} />} />
          <Route path='/register' element={<Register />} />
        </Routes >

          : <div>
            <Navbar setStatus={setStatus}/>
            <Routes>
              <Route path='/' element={<Shop />} />
              <Route path='/men' element={<ShopCategory banner={men_banner} category="men" />} />
              <Route path='/women' element={<ShopCategory banner={women_banner} category="women" />} />
              <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />} />
              <Route path='/product' element={<Product />} />
              <Route path='/product/:productId' element={<Product />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
            <Footer />
          </div>
      }
    </BrowserRouter>
  );
}

export default App;
