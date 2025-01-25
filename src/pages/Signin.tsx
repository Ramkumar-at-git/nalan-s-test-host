import React from 'react';
    import { Link } from 'react-router-dom';
    import { motion } from 'framer-motion';

    const Signin = () => {
      return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold text-primary-dark mb-6">
              Get Ready to Sip!
            </h1>
            <p className="text-gray-600 text-xl mb-8">
              Our sign-in feature is brewing! We're preparing a seamless experience for you.
              Stay tuned for the official launch!
            </p>
            <Link
              to="/products"
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-md transition-colors inline-block"
            >
              Explore Our Products
            </Link>
          </motion.div>
        </div>
      );
    };

    export default Signin;
