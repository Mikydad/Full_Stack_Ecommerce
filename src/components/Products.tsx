import React from 'react'
import Product_card from './Product_card'
function Products() {
  return (
<div className="main">
    <div className="header flex items-center justify-center p-3 font-semibold">
        <h1 className=''>Find From Our Best Products</h1>
    </div>
    <div className="cards_section flex justify-center p-5">
        <Product_card />
    </div>
</div>  
)
}

export default Products