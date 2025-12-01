import React from "react";
import Navbar from "./Navbar";
import Brands from "./Brands"


const Hero = () => {
  return (
    <section className="flex flex-1 items-center justify-between px-12">

      {/* Hero + brand bar together fill the viewport */}
      <div className="flex-1 flex flex-col">
        {/* Hero row */}
        <section className="flex flex-1 items-center justify-between px-12">
          {/* Left text side */}
          <div className=" w-full h-full md:w-1/2 max-w-xl mr-0 md:mr-7">
            <h1 className="font-Poppins font-bold text-6xl pr-3 py-2">
              FIND CLOTHES <br /> THAT MATCH <br /> YOUR STYLE
            </h1>

            <p className="py-3 text-gray-500/60 text-sm md:text-base">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense of
              style.
            </p>

            <button className="bg-black text-white px-6 py-3 rounded-xl my-2 text-sm md:text-base hover:bg-gray-900 transition">
              Shop Now
            </button> 

            <div className="flex items-center py-4 divide-x divide-gray-300">
              <div className="px-6 text-center">
                <h2 className="text-xl font-bold">200+</h2>
                <p className="text-sm text-gray-500">International Brands</p>
              </div>
        
              <div className="px-6 text-center">
                <h2 className="text-xl font-bold">2,000+</h2>
                <p className="text-sm text-gray-500">High-Quality Products</p>
              </div>

              <div className="px-6 text-center">
                <h2 className="text-xl font-bold">30,000+</h2>
                <p className="text-sm text-gray-500">Happy Customers</p>
              </div>
            </div>
          </div>

          {/* Right image side */}
          <div className="flex-1 flex justify-end items-center">
            <img
              src="/hero.png"
              alt="Fashion hero"
              className="object-contain"
            />
          </div>
        </section>

        {/* Brand bar at bottom */}
        
      </div>
    </section>
  );
}

export default Hero;


export const Hero_Section = () => {
      return (
        <main className="min-h-screen font-sans flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col shrink-0">
        <Hero />
        <Brands />
        </div>
        </main>
        
      )
}