import React from 'react';
import { Coffee, Facebook, Instagram, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1D4172] border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[#FFDE59] text-center">
          <div className="space-y-4 flex flex-col items-center">
            <div className="flex items-center space-x-2">
              <Coffee className="h-6 w-6 text-[#FFDE59]" />
              <span className="text-[#FFDE59] font-bold text-lg">
                Nalan's Coffee
              </span>
            </div>
            <p className="text-[#FFDE59] text-sm text-center">
              Crafting exceptional coffee experiences since 1987.
            </p>
            <div className="flex space-x-4 justify-center">
              <a href="#" className="text-[#FFDE59] hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#FFDE59] hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#FFDE59] hover:text-secondary transition-colors">
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4 flex flex-col items-center">
            <h3 className="font-semibold text-[#FFDE59] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-secondary transition-colors text-center">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-secondary transition-colors text-center">
                  Our Products
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 flex flex-col items-center">
            <h3 className="font-semibold text-[#FFDE59] mb-4">Help</h3>
            <ul className="space-y-2 ">
              <li>
                <Link to="/helpdesk" className="hover:text-secondary transition-colors text-center">
                  Helpdesk
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 w-full overflow-hidden text-center">
          <marquee behavior="scroll" direction="left" className="text-[#FFDE59] border-t border-b border-[#1D4172] py-2 bg-[#1D4172] whitespace-nowrap" scrollamount="10">
            <p className="text-md font-bold mr-8">
              Coming soon...!!! at your nearest location...!!!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Coming soon...!!! at your nearest location...!!!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Coming soon...!!! at your nearest location...!!!
            </p>
          </marquee>
        </div>
        <div className="mt-2 pt-8 border-t text-center">
          <p className="text-[#FFDE59] text-sm">© 2025 Nalan's Coffee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
