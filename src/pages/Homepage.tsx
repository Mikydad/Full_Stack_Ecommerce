import React from 'react'
import { New_Arrivals } from '../components/New_Arrivals'
import { Hero_Section } from '../components/Hero_Section'
import Products from '../components/Products'
import Top_Selling from '../components/Top_Selling'

function Homepage() {
  return (
<div className="main_container">
    <Hero_Section />
    <New_Arrivals />
    <Top_Selling />
    {/* <Products /> */}
</div>  )
}

export default Homepage