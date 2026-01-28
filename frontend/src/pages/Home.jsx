import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Layout/Container";
import ProductCard from "../components/Common/ProductCard";
import { products } from "../data/Products";
import { FaArrowRight, FaShippingFast, FaLock, FaHeadset } from "react-icons/fa";

const Home = () => {
  // Get featured products (first 3)
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 py-16 mb-12">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Elevate Your Style With <span className="text-orange-600">Velvet Vogue</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Discover the latest trends in fashion with our premium collection of clothing and accessories.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/products" 
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-medium transition duration-300 flex items-center gap-2"
                >
                  Shop Now <FaArrowRight />
                </Link>
                <Link 
                  to="/products" 
                  className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 px-6 py-3 rounded-md font-medium transition duration-300"
                >
                  View Collection
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white p-4 rounded-lg shadow-lg transform rotate-3 transition-transform hover:rotate-0 duration-300">
                <div className="bg-orange-100 rounded overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Fashion Collection" 
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Features Section */}
      <Container className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="bg-orange-100 p-3 rounded-full">
              <FaShippingFast className="text-orange-600 text-2xl" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Free Shipping</h3>
              <p className="text-gray-600">On all orders over £50</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="bg-orange-100 p-3 rounded-full">
              <FaLock className="text-orange-600 text-2xl" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Secure Payment</h3>
              <p className="text-gray-600">100% secure transactions</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="bg-orange-100 p-3 rounded-full">
              <FaHeadset className="text-orange-600 text-2xl" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">24/7 Support</h3>
              <p className="text-gray-600">Dedicated customer service</p>
            </div>
          </div>
        </div>
      </Container>

      {/* Featured Products */}
      <Container className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Featured Products</h2>
          <Link 
            to="/products" 
            className="text-orange-600 hover:text-orange-700 font-medium flex items-center gap-2 transition duration-300"
          >
            View All <FaArrowRight size={14} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>

      {/* Newsletter Section */}
      <Container>
        <div className="bg-gray-100 rounded-xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-6">Stay updated with our latest collections and exclusive offers.</p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
              <button 
                type="submit" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-medium transition duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-sm text-gray-500 mt-4">By subscribing, you agree to our Privacy Policy.</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
