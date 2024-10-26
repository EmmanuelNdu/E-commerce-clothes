
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import  LoginSignup from  './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import ProductDisplay from './Components/ProductDisplay/ProductDisplay';
import DescriptionBox from './Components/DescriptionBox/DescriptionBox';
import Breadcrums from './Components/Breadcrums/Breadcrum';
import RelatedProducts from './Components/RelatedProducts/RelatedProducts';
import CartItems from './Components/Cartitems/Cartitems';
import { useEffect, useState } from 'react';

// assets
const men_banner = '/Assets/banner_mens.png'
const women_banner = '/Assets/banner_women.png'
const kid_banner = '/Assets/banner_kids.png'

function App() {

 

  return (
    <div>
      <BrowserRouter>
      <Navbar />
      {location.pathname.startsWith('/product/') && <Breadcrums  />}
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/mens' element={<ShopCategory banner={men_banner} category ="men"/>} />
        <Route path='/womens' element={<ShopCategory banner={women_banner} category ="women"/>} />
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category ="kid"/>} />
        <Route path='/login' element={<LoginSignup/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/cartitems' element={<CartItems />} />
        
        {/* <Route path='/product' element={<product/>} /> */}
        {/* <Route path=':productId' element={<productId/>} /> */}
        <Route path='/product/:productId' element={<ProductDisplay />} />
    
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App

