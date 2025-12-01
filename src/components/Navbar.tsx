import React from 'react'
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";

function Navbar() {
  return (
    <div className='navbar_main_cotainer flex justify-between items-center bg-amber-700 text-white p-4 py-5'>
        <div className="left_side_navbar " >
            SHOP.CO
        </div>
        <div className="center_navbar flex items-center justify-between">
            <ul className='flex items-center justify-between ml-3 mr-3 pr-3 pl-3'> 
                <li className='mr-3'>Shop</li>
                <li className='mr-3'>On Sale.</li>
                <li className='mr-3'>New Arrivals</li>
                <li className='mr-3'>Brands</li>
            </ul>
            <div className="search_bar flex items-center">
                <CiSearch className='mr-3' />
            <input placeholder='Search for products' className='w-1 h-3  pl-72 pt-7 bg-amber-200  rounded-xl'/>
            </div>
        </div>
        <div className="right_side_navbar flex items-center justify-between ">
        <CiShoppingCart className='mr-3' />
        <MdAccountCircle className='mr-3'/>
        </div>
    </div>
  )
}

export default Navbar