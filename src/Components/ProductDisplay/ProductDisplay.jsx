import React,{ useContext} from 'react'
import './ProductDisplay.css'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';


// import star_icon from '../Assets/star_icon.png';
// import star_dull_icon from '../Assets/star_dull_icon.png';


const star_icon = '/Assets/star_icon.png'
const star_dull_icon = '/Assets/star_dull_icon.png'

const ProductDisplay = () => {
    const {all_product} = useContext(ShopContext);
    const { productId } = useParams(); 
    const product = all_product.find(product => product.id === parseInt(productId));
    // const {product} = props;

    if (!product) {
        return <h1>Product Not Found</h1>; // Display message if product is not found
    }
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_old}</div>
            </div>
            <div className="productdisplay-right-description">
                The Universe must align for my sake, I attract Wealth, Money, Good health,Love,Favour and Connections in the World.
                Nothing will(Amen)
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button>ADD TO CART</button>
            <p className="productdisplay-right-category"><span>Category:</span>Women, T-shirt, Crop Top</p>
            <p className="productdisplay-right-category"><span>Tags:</span>Modern, Latest</p>
        </div>

    </div>
  )
}

export default ProductDisplay