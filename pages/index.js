import Link from 'next/link';
import { useState } from 'react';

const products = [
  { id: 1, name: 'Wireless Headphones', price: 79.99, image: '🎧', category: 'Electronics' },
  { id: 2, name: 'Smart Watch', price: 199.99, image: '⌚', category: 'Electronics' },
  { id: 3, name: 'USB-C Cable', price: 9.99, image: '🔌', category: 'Accessories' },
  { id: 4, name: 'Phone Case', price: 19.99, image: '📱', category: 'Accessories' },
  { id: 5, name: 'Portable Charger', price: 49.99, image: '🔋', category: 'Electronics' },
  { id: 6, name: 'Webcam', price: 59.99, image: '📷', category: 'Electronics' },
];

export default function Home() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🛍️</span>
            <h1 className="text-2xl font-bold">ShopHub</h1>
          </div>
          <button
            onClick={() => setShowCart(!showCart)}
            className="relative bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            🛒 Cart ({cart.length})
          </button>
        </div>
      </header>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed right-0 top-20 w-80 bg-white shadow-lg rounded-lg p-6 max-h-96 overflow-y-auto z-50">
          <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between items-center mb-3 pb-3 border-b">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600">${item.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-red-500 hover:text-red-700 font-bold"
                  >
                    ✕
                  </button>
                </div>
              ))}
              <div className="mt-4 pt-4 border-t-2">
                <p className="text-lg font-bold mb-3">Total: ${totalPrice}</p>
                <button className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition">
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to ShopHub</h2>
          <p className="text-xl mb-6">Discover amazing products at unbeatable prices</p>
          <p className="text-lg opacity-90">Premium quality • Fast shipping • 30-day returns</p>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 flex flex-col"
            >
              <div className="text-6xl text-center mb-4">{product.image}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{product.category}</p>
              <p className="text-2xl font-bold text-blue-600 mb-4">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-auto bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-12 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl mb-4">🚚</p>
              <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over $50</p>
            </div>
            <div className="text-center">
              <p className="text-4xl mb-4">✅</p>
              <h3 className="text-xl font-bold mb-2">Authentic Products</h3>
              <p className="text-gray-600">100% genuine and brand new items</p>
            </div>
            <div className="text-center">
              <p className="text-4xl mb-4">💬</p>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Dedicated customer support team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-4">&copy; 2024 ShopHub. All rights reserved.</p>
          <div className="flex justify-center gap-4 mb-4">
            <a href="#" className="hover:text-blue-400">About Us</a>
            <a href="#" className="hover:text-blue-400">Contact</a>
            <a href="#" className="hover:text-blue-400">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400">Terms of Service</a>
          </div>
          <p className="text-gray-400">Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
