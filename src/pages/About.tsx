import React from 'react';
    import { motion } from 'framer-motion';

    const About = () => {
      const timelineItems = [
        {
          year: 2020,
          event:
            "Nalan's Coffee was founded with a passion for quality, aiming to bring the finest coffee experience to everyone. We started with a small team and a big dream.",
        },
        {
          year: 2021,
          event:
            "Launched our first online store, making our premium coffee accessible nationwide. We focused on creating a seamless online shopping experience for our customers.",
        },
        {
          year: 2022,
          event:
            "Expanded our product line to include premium teas and coffee accessories, catering to a wider range of tastes and preferences. We also partnered with local artisans.",
        },
        {
          year: 2023,
          event:
            "Opened our first physical store in the heart of the city, providing a cozy space for coffee lovers to gather and enjoy our offerings. This marked a significant milestone in our journey.",
        },
      ];

      return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Highlighted Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-xl text-gray-700 max-w-3xl mx-auto bg-secondary/20 rounded-md p-6">
              Nalan's Coffee began with a simple idea: to share the world's finest coffee with everyone.
              From humble beginnings, we've grown into a brand that values quality, sustainability, and community.
              Our journey is fueled by a love for coffee and a commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Story Teller Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-center lg:col-span-1"
            >
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                At Nalan's Coffee, we believe that every cup tells a story. Our journey began with a passion for sourcing the highest quality beans from around the globe. We work directly with farmers, ensuring fair trade practices and sustainable farming methods.
              </p>
              <p className="text-gray-600 mb-4">
                Our roasting process is an art form, carefully honed to bring out the unique flavors of each bean. We are committed to providing you with an exceptional coffee experience, from the first aroma to the last sip.
              </p>
              <p className="text-gray-600 mb-4">
                We are also dedicated to sustainability, using eco-friendly packaging and supporting ethical sourcing practices. Our goal is to make a positive impact on the environment and the communities we work with.
              </p>
              <p className="text-gray-600">
                Join us as we continue to explore the world of coffee, one delicious cup at a time.
              </p>
            </motion.div>

            {/* Timeline Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-md p-6 lg:col-span-1"
            >
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Our Legacy</h2>
              <div className="relative">
                <div className="absolute top-4 bottom-0 left-1/2 border-l border-gray-300 hidden md:block"></div>
                <ul className="space-y-10">
                  {timelineItems.map((item, index) => {
                    const isLeft = index % 2 === 0;
                    return (
                      <li key={index} className="flex items-start relative">
                        <div
                          className={`absolute ${
                            isLeft ? 'left-0 md:left-1/4' : 'right-0 md:right-1/4'
                          } -top-2`}
                        >
                          <div className="w-12 h-6 bg-secondary rounded-md flex items-center justify-center text-white font-bold text-sm">
                            {item.year}
                          </div>
                        </div>
                        <div
                          className={`flex-1 mt-2 ${
                            isLeft ? 'ml-20 md:ml-24' : 'mr-20 md:mr-24'
                          }`}
                        >
                          <div className="bg-gray-100 p-4 rounded-md">
                            <p className="text-gray-600">{item.event}</p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      );
    };

    export default About;
