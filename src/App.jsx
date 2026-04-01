
import React, { useMemo, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import ProductCard from './components/ProductCard'
import Card from './components/Card'
import Steps from './components/Steps'
import Footer from './components/Footer'
import products from './data/products.json'

function App() {
  const [activeTab, setActiveTab] = useState('product');
  const [cartItems, setCartItems] = useState([]);

  const totalPrice = useMemo(() => cartItems.reduce((sum, item) => sum + Number(item.price), 0), [cartItems]);

  const addToCart = (product) => {
    const alreadyInCart = cartItems.some((item) => item.id === product.id);
    if (alreadyInCart) {
      toast.info(`${product.name} is already in cart.`);
      return;
    }
    setCartItems((prev) => [...prev, product]);
    toast.success(`Added ${product.name} to cart.`);
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
    const removed = products.find((item) => item.id === productId);
    toast.warn(`${removed?.name ?? 'Item'} removed from cart.`);
  };

  const proceedToCheckout = () => {
    if (cartItems.length === 0) {
      toast.warn('Cart is already empty. Add items first.');
      return;
    }
    setCartItems([]);
    toast.success('Checkout completed. Cart cleared.');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar cartItemsLength={cartItems.length} onCartClick={() => setActiveTab('card')} />
      <Banner onCartClick={() => setActiveTab('card')} onExploreClick={() => setActiveTab('product')} />

      <section className="bg-gradient-to-r from-violet-700 via-fuchsia-600 to-violet-500 py-10">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white/10 rounded-2xl shadow-lg">
              <h4 className="text-5xl font-extrabold">50K+</h4>
              <p className="text-sm mt-2 uppercase">Active Users</p>
            </div>
            <div className="p-6 bg-white/10 rounded-2xl shadow-lg">
              <h4 className="text-5xl font-extrabold">200+</h4>
              <p className="text-sm mt-2 uppercase">Premium Tools</p>
            </div>
            <div className="p-6 bg-white/10 rounded-2xl shadow-lg">
              <h4 className="text-5xl font-extrabold">4.9</h4>
              <p className="text-sm mt-2 uppercase">Rating</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h3 className="text-4xl font-extrabold text-slate-100">Premium Digital Tools</h3>
          <p className="text-slate-300 mt-2">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
        </div>

        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab('product')}
            className={`rounded-full px-6 py-2 font-semibold ${activeTab === 'product' ? 'bg-violet-600 text-white' : 'bg-slate-900 text-slate-300 border border-slate-800'}`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab('card')}
            className={`rounded-full px-6 py-2 font-semibold ${activeTab === 'card' ? 'bg-violet-600 text-white' : 'bg-slate-900 text-slate-300 border border-slate-800'}`}
          >
            Cart ({cartItems.length})
          </button>
        </div>

        {activeTab === 'product' ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
        ) : (
          <Card cartItems={cartItems} onRemove={removeFromCart} totalPrice={totalPrice} onCheckout={proceedToCheckout} />
        )}
      </section>

      <Steps />

      <section className="container mx-auto px-4 py-10 bg-slate-900 rounded-3xl shadow-2xl">
        <h3 className="text-3xl font-bold text-center text-white mb-8">Simple, Transparent Pricing</h3>
        <div className="grid gap-6 md:grid-cols-3">
          <article className="bg-slate-800 text-white p-6 rounded-2xl border border-slate-700">
            <h4 className="text-2xl font-bold mb-2">Starter</h4>
            <p className="text-slate-300 mb-4">Perfect for getting started</p>
            <p className="text-4xl font-extrabold mb-4">$0<span className="text-lg">/Month</span></p>
            <ul className="space-y-2 mb-4">
              <li>✅ Access to 10 free tools</li>
              <li>✅ Basic templates</li>
              <li>✅ Community support</li>
              <li>✅ 1 project per month</li>
            </ul>
            <button className="btn w-full bg-gradient-to-r cursor-pointer rounded-2xl from-fuchsia-600 to-violet-500 border-0">Get Started Free</button>
          </article>
          <article className="bg-white text-slate-900 p-6 rounded-2xl border border-violet-500 shadow-xl">
            <span className="inline-block px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-semibold mb-3">Most Popular</span>
            <h4 className="text-2xl font-bold mb-2">Pro</h4>
            <p className="text-slate-500 mb-4">Best for professionals</p>
            <p className="text-4xl font-extrabold mb-4">$29<span className="text-lg">/Month</span></p>
            <ul className="space-y-2 mb-4 text-slate-700">
              <li>✅ Access to all premium tools</li>
              <li>✅ Unlimited templates</li>
              <li>✅ Priority support</li>
              <li>✅ Unlimited projects</li>
              <li>✅ Advanced analytics</li>
            </ul>
            <button className="btn w-full cursor-pointer rounded-2xl bg-yellow-200 text-black border-0">Start Pro Trial</button>
          </article>
          <article className="bg-slate-800 text-white p-6 rounded-2xl border border-slate-700">
            <h4 className="text-2xl font-bold mb-2">Enterprise</h4>
            <p className="text-slate-300 mb-4">For teams and businesses</p>
            <p className="text-4xl font-extrabold mb-4">$99<span className="text-lg">/Month</span></p>
            <ul className="space-y-2 mb-4">
              <li>✅ Everything in Pro</li>
              <li>✅ Team collaboration</li>
              <li>✅ Custom integrations</li>
              <li>✅ Dedicated support</li>
              <li>✅ SLA guarantee</li>
            </ul>
            <button className="btn cursor-pointer rounded-2xl w-full bg-transparent border border-violet-500 text-white hover:bg-violet-600">Contact Sales</button>
          </article>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-violet-700 via-fuchsia-600 to-violet-500">
        <div className="container mx-auto px-4 text-center text-white">
          <h3 className="text-4xl font-bold mb-4">Ready To Transform Your Workflow?</h3>
          <p className="text-xl mb-6">Join thousands of professionals who are already using DigiTools to work smarter.</p>
          <div className="flex justify-center gap-4">
            <button className="btn bg-white text-violet-700 font-bold px-8 py-3 rounded-full">Explore Products</button>
            <button className="btn border border-white text-white px-8 py-3 rounded-full hover:bg-white/10">View Pricing</button>
          </div>
          <p className="text-sm text-white/80 mt-4">14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </section>

      <Footer />

      <ToastContainer position="top-right" autoClose={1600} theme="colored" />
    </div>
  );
}

export default App
