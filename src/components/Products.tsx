import React from 'react'
import Product_card from './Product_card'
function Products(props) {
  return (
<div className="main">
    <div className="header flex items-center justify-center p-3 font-semibold">
        <h1 className=''>Find From Our Best Products</h1>
    </div>
    <div className="cards_section flex justify-center p-5">
  
  <Product_card src='./public/t-shirt.webp'alt="Cool T-Shirt"
  title="Casual Oversized Tee"
  rating={4}
  amount="$29.99"/>
    </div>
</div>  
)
}

export default Products