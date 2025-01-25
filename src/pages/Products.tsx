import React, { useState } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { Send, RefreshCw, Plus, Minus } from 'lucide-react';

    interface Product {
      id: number;
      name: string;
      category: string;
      quantity: number;
    }

    const initialProducts: Product[] = [
      {
        id: 1,
        name: "Nalan's premium filter coffee",
        category: "Coffee",
        quantity: 0,
      },
      {
        id: 2,
        name: "Nalan's pure coffee",
        category: "Coffee",
        quantity: 0,
      },
      {
        id: 3,
        name: "Nalan's premium lankan tea",
        category: "Tea",
        quantity: 0,
      },
      {
        id: 4,
        name: "Nalan's masala tea",
        category: "Tea",
        quantity: 0,
      },
    ];

    interface FormData {
      firstName: string;
      phoneNumber: string;
      address: string;
      selectedProducts: number[];
      description: string;
    }

    const Products = () => {
      const [products, setProducts] = useState<Product[]>(initialProducts);
      const [formData, setFormData] = useState<FormData>({
        firstName: '',
        phoneNumber: '',
        address: '',
        selectedProducts: [],
        description: '',
      });
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [phoneNumberError, setPhoneNumberError] = useState<string | null>(null);
      const [productSelectionError, setProductSelectionError] = useState<string | null>(null);
      const [submitError, setSubmitError] = useState<string | null>(null);

      const handleProductSelection = (productId: number, quantityChange: number) => {
        setProducts(prev => prev.map(product => {
          if (product.id === productId) {
            const newQuantity = Math.max(0, product.quantity + quantityChange);
            if (newQuantity === 0) {
              setFormData(prev => ({
                ...prev,
                selectedProducts: prev.selectedProducts.filter(id => id !== productId)
              }));
            } else {
              setFormData(prev => ({
                ...prev,
                selectedProducts: prev.selectedProducts.includes(productId)
                  ? prev.selectedProducts
                  : [...prev.selectedProducts, productId]
              }));
            }
            return { ...product, quantity: newQuantity };
          }
          return product;
        }));
        setProductSelectionError(null);
      };

      const handleQuantityChange = (productId: number, change: number) => {
        setProducts(prev => prev.map(product => {
          if (product.id === productId) {
            const newQuantity = Math.max(0, product.quantity + change);
            if (newQuantity === 0) {
              setFormData(prev => ({
                ...prev,
                selectedProducts: prev.selectedProducts.filter(id => id !== productId)
              }));
            } else {
              setFormData(prev => ({
                ...prev,
                selectedProducts: prev.selectedProducts.includes(productId)
                  ? prev.selectedProducts
                  : [...prev.selectedProducts, productId]
              }));
            }
            return { ...product, quantity: newQuantity };
          }
          return product;
        }));
      };

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitError(null);
        if (!formData.firstName || !formData.phoneNumber || !formData.address) {
          setSubmitError("Please fill in all required fields.");
          return;
        }
        if (formData.phoneNumber.length !== 10) {
          setPhoneNumberError("Phone number must be 10 digits.");
          return;
        }
        if (formData.selectedProducts.length === 0) {
          setProductSelectionError("Please select at least one product.");
          return;
        }
        console.log('Order submitted with data:', formData);
        setIsModalOpen(true);
      };

      const handleClear = () => {
        setFormData({
          firstName: '',
          phoneNumber: '',
          address: '',
          selectedProducts: [],
          description: '',
        });
        setProducts(initialProducts);
        setPhoneNumberError(null);
        setProductSelectionError(null);
        setSubmitError(null);
      };

      const closeModal = () => {
        setIsModalOpen(false);
      };

      const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 10);
        setFormData(prev => ({ ...prev, phoneNumber: value }));
        setPhoneNumberError(value.length !== 10 ? "Phone number must be 10 digits." : null);
      };

      const modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 20 } },
        exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
      };

      return (
        <div className="min-h-screen">
          {/* Form Section */}
          <div className="relative py-20">
            <div
              className="absolute inset-0 z-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.7)',
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <div className="bg-[#1D4172]/90 backdrop-blur-md rounded-2xl shadow-2xl p-8">
                <h2 className="text-3xl font-bold text-[#FFDE59] mb-8 text-center">Order Your Coffee</h2>

                <form onSubmit={handleSubmit} className="space-y-6 text-[#FFDE59]">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-[#FFDE59]">First Name</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                        className="w-full px-4 py-2 bg-white/10 border border-[#FFDE59]/30 rounded-md focus:ring-2 focus:ring-[#FFDE59] focus:border-transparent text-[#FFDE59] placeholder-[#FFDE59]/50"
                        required
                        placeholder="Enter your first name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-[#FFDE59]">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={handlePhoneNumberChange}
                        className="w-full px-4 py-2 bg-white/10 border border-[#FFDE59]/30 rounded-md focus:ring-2 focus:ring-[#FFDE59] focus:border-transparent text-[#FFDE59] placeholder-[#FFDE59]/50"
                        required
                        placeholder="Enter your phone number"
                      />
                      {phoneNumberError && <p className="text-red-500 text-sm">{phoneNumberError}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-[#FFDE59]">Address</label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                      className="w-full px-4 py-2 bg-white/10 border border-[#FFDE59]/30 rounded-md focus:ring-2 focus:ring-[#FFDE59] focus:border-transparent text-[#FFDE59] placeholder-[#FFDE59]/50"
                      required
                      placeholder="Enter your delivery address"
                    />
                  </div>

                  {/* Product Selection */}
                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-[#FFDE59]">Select Products</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {products.map((product) => (
                        <div
                          key={product.id}
                          className="flex items-center justify-between p-4 rounded-lg border border-[#FFDE59]/30 bg-white/10"
                        >
                          <label
                            htmlFor={`product-${product.id}`}
                            className="text-[#FFDE59] cursor-pointer"
                          >
                            {product.name}
                          </label>
                          <div className="flex items-center space-x-2">
                            <button
                              type="button"
                              onClick={() => handleQuantityChange(product.id, -1)}
                              className="p-1 hover:bg-white/20 rounded-full text-[#FFDE59] transition-colors"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-8 text-center text-[#FFDE59]">{product.quantity}</span>
                            <button
                              type="button"
                              onClick={() => handleQuantityChange(product.id, 1)}
                              className="p-1 hover:bg-white/20 rounded-full text-[#FFDE59] transition-colors"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    {productSelectionError && <p className="text-red-500 text-sm">{productSelectionError}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-[#FFDE59]">Description</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      rows={4}
                      className="w-full px-4 py-2 bg-white/10 border border-[#FFDE59]/30 rounded-md focus:ring-2 focus:ring-[#FFDE59] focus:border-transparent text-[#FFDE59] placeholder-[#FFDE59]/50"
                      placeholder="Tell us any special requirements or preferences..."
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="bg-[#FFDE59] hover:bg-[#FFE580] text-[#1D4172] font-semibold px-6 py-3 rounded-md transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="h-5 w-5" />
                      <span className="text-[#1D4172]">Submit Order</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="button"
                      onClick={handleClear}
                      className="bg-white/10 hover:bg-white/20 text-[#FFDE59] font-semibold px-6 py-3 rounded-md transition-colors flex items-center justify-center gap-2 border border-[#FFDE59]/30"
                    >
                      <RefreshCw className="h-5 w-5" />
                      <span className="text-[#FFDE59]">Clear Form</span>
                    </motion.button>
                  </div>
                  {submitError && <p className="text-red-500 text-sm text-center">{submitError}</p>}
                </form>
              </div>
            </motion.div>
          </div>
          {/* Modal */}
          <AnimatePresence>
            {isModalOpen && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
              >
                <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center">
                  <h2 className="text-2xl font-bold text-primary-dark mb-4">Order Confirmed!</h2>
                  <p className="text-gray-700 mb-6">We'll contact you soon.</p>
                  <button
                    onClick={closeModal}
                    className="bg-primary hover:bg-primary-dark text-[#FFDE59] font-semibold px-6 py-3 rounded-md transition-colors"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    };

    export default Products;
