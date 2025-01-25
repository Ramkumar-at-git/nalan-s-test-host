import React from 'react';
    import { Link } from 'react-router-dom';
    import { motion } from 'framer-motion';

    const Helpdesk = () => {
      return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold text-primary-dark mb-6">
              Brewing Something Special!
            </h1>
            <p className="text-gray-600 text-xl mb-8">
              Our website is under construction, but we're crafting an amazing experience for you.
              Get ready to explore the world of Nalan's Coffee!
            </p>
            <Link
              to="/products"
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-md transition-colors inline-block"
            >
              Check Out Our Products
            </Link>
          </motion.div>
        </div>
      );
    };

    export default Helpdesk;
