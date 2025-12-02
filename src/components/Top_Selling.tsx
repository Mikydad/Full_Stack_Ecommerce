import React from 'react'
import Product_card from './Product_card'

function Top_Selling() {
  return (
<div className="main my-7 mt-9">
    <div className="header flex items-center justify-center p-3 font-semibold">
        <h1 className=''>TOP SELLING.</h1>
    </div>
    <div className="cards_section flex justify-center p-5">
  
  <Product_card src='./public/t-shirt.webp'alt="Cool T-Shirt"
  title="Casual Oversized Tee"
  rating={4}
  amount="$29.99"/>

  <Product_card src='./public/t-shirt.webp'alt="Cool T-Shirt"
  title="Casual Oversized Tee" 
  rating={4}
  amount="$29.99"/>

  <Product_card src='./public/t-shirt.webp'alt="Cool T-Shirt"
  title="Casual Oversized Tee"
  rating={4}
  amount="$29.99"/>

  <Product_card src='./public/t-shirt.webp'alt="Cool T-Shirt"
  title="Casual Oversized Tee"
  rating={4}
  amount="$29.99"/>

    </div>
    <div className="new_arrivals_footer flex justify-center">
          <h2>View All.</h2>

    </div>
</div>      )
}


export default Top_Selling
