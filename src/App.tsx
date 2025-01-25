import React from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import Navbar from './components/Navbar';
    import Footer from './components/Footer';
    import Home from './pages/Home';
    import Products from './pages/Products';
    import Helpdesk from './pages/Helpdesk';
    import Cart from './pages/Cart';
    import About from './pages/About';
    import Signin from './pages/Signin';

    function App() {
      return (
        <Router>
          <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <main className="flex-grow pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/helpdesk" element={<Helpdesk />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<About />} />
                <Route path="/signin" element={<Signin />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      );
    }

    export default App;
