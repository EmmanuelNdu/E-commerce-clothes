import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box.fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>This is a product display page which is going to be loaded on the route product/productId, 
                i want you to help me get the route parameter and search through all product and to be able 
                to get the actual product, if not found it should display not found instead of the view.
                This is a product display page which is going to be loaded on the route product/productId, 
                i want you to help me get the route parameter and search through all product and to be able 
                to get the actual product, if not found it should display not found instead of the view</p>
                <p>
                This is a product display page which is going to be loaded on the route product/productId, 
                i want you to help me get the route parameter and search through all product and to be able 
                to get the actual product, if not found it should display not found instead of the view
                </p>
        </div>
    </div>
  )
}

export default DescriptionBox