import React from 'react';
    import { motion } from 'framer-motion';
    import { ArrowRight, Coffee, Package, Headset, Clock } from 'lucide-react';
    import { Link } from 'react-router-dom';

    const Home = () => {
      return (
        <div>
          {/* Hero Section */}
          <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.9)',
              }}
            />
            <div className="absolute inset-0 bg-white/50" />

            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6">
                  Welcome to Nalan's Coffee
                  <span className="block text-navy-dark">Savor Every Sip</span>
                </h1>
                <p className="text-xl text-[#FFDE59] mb-8 max-w-2xl mx-auto">
                  Experience the perfect blend of tradition and innovation with our
                  carefully selected coffee beans.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#1D4172] hover:bg-navy-dark text-[#FFDE59] font-semibold px-8 py-3 rounded-md inline-flex items-center space-x-2 transition-colors"
                >
                  <Link to="/products" className="flex items-center space-x-2">
                    <span>Try Our Coffee For Free</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </motion.button>
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    icon: Coffee,
                    title: 'Premium Beans',
                    description: 'Sourced from the finest farms',
                  },
                  {
                    icon: Package,
                    title: 'Fresh Roasts',
                    description: 'Roasted to perfection daily',
                  },
                  {
                    icon: Headset,
                    title: 'Customer Support',
                    description: 'Mon-Fri (9a.m - 6p.m)',
                  },
                  {
                    icon: Clock,
                    title: 'Delivery Time',
                    description: 'Orders will reach within 2-3 days',
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center cursor-pointer"
                  >
                    <Link to="/products">
                      <feature.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-primary mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Products */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                Nalan's Premium Products
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our handpicked selection of premium coffee and accessories.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Nalan's premium filter coffee",
                  image:
                    'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  description: 'Unique flavors from around the world',
                },
                {
                  title: "Nalan's pure coffee",
                  image:
                    'https://images.unsplash.com/photo-1541167760-f9471f26274e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  description: "Perfectly balanced combinations",
                },
                {
                  title: "Nalan's premium lankan tea",
                  image:
                    'https://images.unsplash.com/photo-1587370560944-20b8e41c011a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  description: "Professional tools for perfect coffee",
                },
                {
                  title: "Nalan's masala tea",
                  image:
                    'https://images.unsplash.com/photo-1617977484778-218081161511?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  description: "Complete your coffee ritual",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer card-hover"
                >
                  <Link to="/products">
                    <div className="relative overflow-hidden rounded-lg aspect-square">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-200">{item.description}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      );
    };

    export default Home;
