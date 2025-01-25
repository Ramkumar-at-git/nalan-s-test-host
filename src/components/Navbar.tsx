import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Coffee, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/helpdesk', label: 'Helpdesk' },
  ];

  const { cartItems } = useCart();

  return (
    <nav className="fixed w-full z-50 bg-[#1D4172] backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-[#FFDE59]" />
              <span className="text-[#FFDE59] font-bold text-xl">
                Nalan's Coffee
              </span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `nav-link ${
                    isActive ? 'text-primary font-semibold' : 'text-[#FFDE59]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/products"
              className="text-[#FFDE59] hover:text-secondary transition-colors"
              
            >
              <ShoppingCart className="h-6 w-6" />
            </NavLink>
            <NavLink
              to="/signin"
              className="bg-secondary hover:bg-navy-dark text-primary font-semibold px-4 py-2 rounded-md transition-colors"
            >
              {cartItems.length > 0 && <span className="absolute top-0 right-0 bg-accent-emerald text-white rounded-full px-1 text-xs">{cartItems.length}</span>}
              Sign In
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-secondary transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? 'text-secondary'
                        : 'text-primary hover:text-secondary'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <NavLink
                to="/signin"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-[#FFDE59] hover:text-secondary"
              >
                Sign In
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
