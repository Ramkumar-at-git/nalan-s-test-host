import React from 'react';
    import { motion } from 'framer-motion';
    import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
    import { Link } from 'react-router-dom';
    import { useCart } from '../context/CartContext';

    const Cart = () => {
      const { cartItems, removeFromCart, updateQuantity } = useCart();

      const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      const shipping = 5.99;
      const total = subtotal + shipping;

      

      return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-primary-dark mb-8">Shopping Cart</h1>

          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  {cartItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-6 flex items-center gap-4 ${
                        index !== cartItems.length - 1 ? 'border-b' : ''
                      }`}
                      >
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-primary-dark">{item.name}</h3> 
                        <p className="text-accent-emerald font-semibold">₹{item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-1 hover:bg-gray-100 rounded-full" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                          <Minus className="h-4 w-4 text-gray-500" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button className="p-1 hover:bg-gray-100 rounded-full" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          <Plus className="h-4 w-4 text-gray-500" />
                        </button>
                      </div>
                      <button
                        className="p-2 hover:bg-gray-100 rounded-full"
                        onClick={() => {
                          removeFromCart(item.id);
                        }}
                      >
                        <X className="h-5 w-5 text-gray-500" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold text-primary-dark mb-4">Order Summary</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>₹{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span>₹{shipping.toFixed(2)}</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between font-bold text-lg text-primary-dark">
                        <span>Total</span>
                        <span>₹{total.toFixed(2)}</span>
                      </div>
                    </div>
                    <button className="w-full bg-accent-emerald hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-md transition-colors flex items-center justify-center space-x-2">
                      <ShoppingBag className="h-5 w-5" />
                      <span>Proceed to Checkout</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-600 mb-4">Your cart is empty</h2>
              <p className="text-gray-500 mb-8">Looks like you haven't added any items to your cart yet.</p>
              <Link to="/products" className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-md transition-colors inline-block">
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      );
    };

    export default Cart;
