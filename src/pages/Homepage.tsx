import React from 'react'

import { Hero_Section } from '../components/Hero_Section'
import Products from '../components/Products'

function Homepage() {
  return (
<div className="main_container">
    <Hero_Section />
    <Products />
</div>  )
}

export default Homepage