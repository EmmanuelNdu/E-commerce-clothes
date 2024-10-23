
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

// assets
const men_banner = '/Assets/banner_mens.png'
const women_banner = '/Assets/banner_women.png'
const kid_banner = '/Assets/banner_kids.png'

function App() {

  const isProductPage = window.location.pathname.startsWith('/product/');
  
  // Extract productId from URL if on product page
  const productId = isProductPage ? location.pathname.split('/').pop() : null;
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      {location.pathname.startsWith('/product/') && <Breadcrums productId={productId} />}
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/mens' element={<ShopCategory banner={men_banner} category ="men"/>} />
        <Route path='/womens' element={<ShopCategory banner={women_banner} category ="women"/>} />
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category ="kid"/>} />
        <Route path='/login' element={<LoginSignup/>} />
        
        {/* <Route path='/product' element={<product/>} /> */}
        {/* <Route path=':productId' element={<productId/>} /> */}
        <Route path='/product/:productId' element={<ProductDisplay />} />
    
      </Routes>
      
      <Footer/>
      <DescriptionBox />
      </BrowserRouter>
    </div>
  );
}

export default App

