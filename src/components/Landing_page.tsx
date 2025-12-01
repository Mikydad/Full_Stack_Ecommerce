import React, { useState } from 'react';
import { Search, ShoppingCart, CircleUserRound, Menu, X, ChevronDown } from 'lucide-react';

// Decorative Star Component (The black sparkles)
const StarIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0L14.595 9.405L24 12L14.595 14.595L12 24L9.405 14.595L0 12L9.405 9.405L12 0Z" />
  </svg>
);

// --- Navbar Component ---

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* Mobile Menu Button + Logo Group */}
        <div className="flex items-center gap-4">
          <button 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Logo */}
          <a href="#" className="text-3xl font-black tracking-tighter uppercase">
            SHOP.CO
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-base font-medium">
          <a href="#" className="flex items-center gap-1 hover:text-gray-600 transition">
            Shop <ChevronDown size={16} />
          </a>
          <a href="#" className="hover:text-gray-600 transition">On Sale</a>
          <a href="#" className="hover:text-gray-600 transition">New Arrivals</a>
          <a href="#" className="hover:text-gray-600 transition">Brands</a>
        </div>

        {/* Search Bar (Desktop) */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search for products..." 
              className="w-full bg-[#F0F0F0] rounded-full py-2.5 pl-10 pr-4 outline-none focus:ring-2 focus:ring-gray-200 transition"
            />
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <Search className="md:hidden" size={24} /> {/* Mobile Search Icon */}
          <a href="#" className="hover:text-gray-600 transition"><ShoppingCart size={24} /></a>
          <a href="#" className="hover:text-gray-600 transition"><CircleUserRound size={24} /></a>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b shadow-lg py-4 px-4 flex flex-col gap-4">
          <a href="#" className="font-medium">Shop</a>
          <a href="#" className="font-medium">On Sale</a>
          <a href="#" className="font-medium">New Arrivals</a>
          <a href="#" className="font-medium">Brands</a>
        </div>
      )}
    </nav>
  );
};

// --- Hero Section Component ---

const HeroSection = () => {
  return (
    <section className="bg-[#F2F0F1] overflow-hidden relative flex-1 flex items-center">
      <div className="container mx-auto px-4 md:px-8 w-full">
        {/* Text + Image side by side */}
        <div className="grid grid-cols-2 gap-8 items-center">
          
          {/* Left Content (Text) */}
          <div className="max-w-2xl z-10">
            <h1 className="text-5xl md:text-[64px] lg:text-[64px] font-black leading-[1] uppercase mb-6 text-black">
              Find Clothes That Matches Your Style
            </h1>
            <p className="text-gray-500 text-base md:text-lg mb-8 max-w-md">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
            
            <button className="bg-black text-white px-12 py-4 rounded-full font-medium hover:bg-gray-800 transition shadow-lg mb-10 w-full md:w-auto">
              Shop Now
            </button>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 md:gap-12 items-center">
              <div>
                <span className="block text-2xl md:text-4xl font-bold text-black">200+</span>
                <span className="text-gray-500 text-xs md:text-sm">International Brands</span>
              </div>
              <div className="h-12 w-[1px] bg-gray-300 hidden md:block"></div>
              <div>
                <span className="block text-2xl md:text-4xl font-bold text-black">2,000+</span>
                <span className="text-gray-500 text-xs md:text-sm">High-Quality Products</span>
              </div>
              <div className="h-12 w-[1px] bg-gray-300 hidden md:block"></div>
              <div>
                <span className="block text-2xl md:text-4xl font-bold text-black">30,000+</span>
                <span className="text-gray-500 text-xs md:text-sm">Happy Customers</span>
              </div>
            </div>
          </div>

          {/* Right Content (Image) */}
          <div className="relative w-full h-full min-h-[260px] flex items-end justify-center lg:justify-end overflow-hidden">
            {/* Decorative Stars */}
            <StarIcon className="absolute top-10 right-4 md:right-10 w-16 h-16 md:w-24 md:h-24 text-black" />
            <StarIcon className="absolute top-1/2 left-0 md:left-10 w-8 h-8 md:w-12 md:h-12 text-black" />

            {/* Main Image */}
            <img 
              src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2070&auto=format&fit=crop" 
              alt="Fashion Models" 
              className="h-full w-full object-cover object-top mix-blend-multiply" 
              style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Brand Bar Component ---

const BrandBar = () => {
  return (
    <div className="bg-black py-6 shrink-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-6 md:gap-0 opacity-80">
          {/* Simulated Brand Logos using Fonts */}
          <span className="text-white text-2xl md:text-3xl font-serif">VERSACE</span>
          <span className="text-white text-2xl md:text-3xl font-serif italic">ZARA</span>
          <span className="text-white text-2xl md:text-3xl font-serif tracking-widest">GUCCI</span>
          <span className="text-white text-2xl md:text-3xl font-bold font-serif">PRADA</span>
          <span className="text-white text-2xl md:text-3xl font-sans font-light">Calvin Klein</span>
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---

export default function ShopCoLanding() {
  return (
    <main className="min-h-screen font-sans flex flex-col">
      <Navbar />
      {/* This block fills the rest of the viewport:
          HeroSection grows, BrandBar sits at the bottom */}
        <HeroSection />
        <BrandBar />
      </div>
    </main>
  );
}
