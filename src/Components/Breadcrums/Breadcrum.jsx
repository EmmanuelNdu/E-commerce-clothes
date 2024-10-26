import React,{useContext, useEffect, useState} from 'react'
import './Breadcrum.css'
import arrow_icon from '../../../public/Assets/breadcrum_arrow.png'
import { ShopContext } from '../../Context/ShopContext'
import { useParams } from 'react-router-dom'

// const breadcrum_arrow = '../Assets/breadcrum_arrow.png'

const Breadcrums = (props) => {
  const [productId, setProductId] = useState(null)
  useEffect(() => {
    console.log('pathnsmr', window.location.pathname)
    const isProductPage = window.location.pathname.startsWith('/product/');
    if (isProductPage) {
    // Extract productId from URL if on product page
    const productId = isProductPage ? location.pathname.split('/').pop() : null;
    setProductId(productId)
    } else setProductId(null)

  }, [window.location.pathname])
  const {all_product} = useContext(ShopContext);
  const [product, setProduct] = useState(null)
  // const  productId  = props.productId; 
  useEffect(()=>{
   const newProduct =  all_product.find(product => product.id === parseInt(productId));
   setProduct(newProduct)
  },[productId, all_product])

  // const {product} = props;
  return (
    <div className="breadcrum">
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> 
        {product?.category} <img src={arrow_icon} alt="" />  {product?.name}
    </div>
  )
}

export default Breadcrums