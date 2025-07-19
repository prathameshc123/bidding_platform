import React, { useState } from 'react';

import { BrowserRouter,Routes,Route,useNavigate  } from 'react-router-dom';

const AuctionHomepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const Naviagt=useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const Rout=()=>{
    Naviagt("/register")
  }
  
  const Admin=()=>{
    Naviagt('/admin_login')
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      
      {/* Header with Logo and Navigation */}
      <header className="bg-slate-800 text-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <svg className="w-10 h-10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="#3b82f6" />
                <path d="M30 40 L50 25 L70 40 L70 70 L30 70 Z" fill="white" />
                <path d="M40 55 L40 65 L60 65 L60 55" stroke="#3b82f6" strokeWidth="5" fill="none" />
                <path d="M45 45 L55 45" stroke="#3b82f6" strokeWidth="5" strokeLinecap="round" />
                <path d="M50 25 L50 45" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
              </svg>
              <span className="text-2xl font-bold">BidMaster Pro</span>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {isMenuOpen ? 
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path> :
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  }
                </svg>
              </button>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#rules" className="hover:text-blue-400 transition-colors">Bidding Rules</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About Us</a>
              <a onClick={Admin} href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </nav>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="mt-4 md:hidden flex flex-col space-y-4 pb-4">
              <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#rules" className="hover:text-blue-400 transition-colors">Bidding Rules</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About Us</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-slate-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to BidMaster Pro</h1>
          <p className="text-lg max-w-2xl mx-auto mb-8">Your trusted platform for professional auctions. Discover unique items, place strategic bids, and win amazing deals with our transparent bidding system.</p>
          <a onClick={Rout} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md transition-colors inline-block">Start Bidding Now</a>
        </div>
      </section>

      {/* Rules Section */}
      <section id="rules" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Bidding Rules</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-blue-500 mb-3">Registration Requirements</h3>
              <p>All bidders must complete a registration process with valid identification and contact information. A verification email will be sent to confirm your account before you can place bids.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-blue-500 mb-3">Bid Increments</h3>
              <p>All bids must follow our minimum increment guidelines. Items under $100 require $5 increments, $100-$500 require $20 increments, and items over $500 require $50 increments.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-blue-500 mb-3">Winning & Payment</h3>
              <p>The highest bidder at auction close wins. Payment must be completed within 48 hours of auction end. Multiple payment methods are accepted including credit cards and secure online transfers.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-blue-500 mb-3">Bid Retraction</h3>
              <p>Bids cannot be retracted once placed except in extraordinary circumstances and with administrative approval. Contact support immediately if you need assistance.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-blue-500 mb-3">Reserve Prices</h3>
              <p>Some auctions may have a reserve price. If the bidding doesn't reach this minimum amount, the seller is not obligated to sell the item to the highest bidder.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-blue-500 mb-3">Auction Extensions</h3>
              <p>If a bid is placed within the last 5 minutes of an auction, the closing time will automatically extend by 5 minutes to prevent sniping and ensure fair bidding opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">About BidMaster Pro</h2>
          
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <p className="mb-4">Founded in 2025, BidMaster Pro has quickly grown to become one of the most trusted auction platforms in the industry. Our mission is to create a secure, transparent, and exciting bidding environment where both buyers and sellers can confidently conduct transactions.</p>
              <p className="mb-4">With a team of experienced auction professionals, we've developed a robust platform that combines cutting-edge technology with traditional auction principles. We pride ourselves on our commitment to authenticity verification, secure payment processing, and exceptional customer support.</p>
              <p>BidMaster Pro hosts thousands of auctions monthly across diverse categories including collectibles, electronics, art, vehicles, and real estate. Our dedicated team carefully vets sellers and items to ensure the highest quality standards.</p>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="/api/placeholder/600/400" 
                alt="BidMaster Pro Team" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-6">
            <svg className="w-10 h-10 mr-3" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="#3b82f6" />
              <path d="M30 40 L50 25 L70 40 L70 70 L30 70 Z" fill="white" />
              <path d="M40 55 L40 65 L60 65 L60 55" stroke="#3b82f6" strokeWidth="5" fill="none" />
              <path d="M45 45 L55 45" stroke="#3b82f6" strokeWidth="5" strokeLinecap="round" />
              <path d="M50 25 L50 45" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <span className="text-xl font-bold">BidMaster Pro</span>
          </div>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Auctions</a>
            <a href="#" className="hover:text-blue-400 transition-colors">How It Works</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
          
          <p>&copy; 2025 BidMaster Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AuctionHomepage;