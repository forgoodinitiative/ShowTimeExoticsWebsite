import { Link } from "react-router";
import { Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl tracking-wider uppercase mb-4">SHOWTIMEXOTICS</h3>
            <p className="text-gray-400 text-sm">
              Luxury vehicles for your creative vision.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Based in Vancouver, BC
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-4">Navigation</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white text-sm transition-colors">
                Home
              </Link>
              <Link to="/inventory" className="block text-gray-400 hover:text-white text-sm transition-colors">
                Fleet
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-white text-sm transition-colors">
                About
              </Link>
              <Link to="/faq" className="block text-gray-400 hover:text-white text-sm transition-colors">
                Questions
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:showtimexotics@gmail.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-white text-sm transition-colors"
              >
                <Mail size={16} />
                <span>showtimexotics@gmail.com</span>
              </a>
              <a
                href="tel:778-536-7429"
                className="flex items-center space-x-2 text-gray-400 hover:text-white text-sm transition-colors"
              >
                <Phone size={16} />
                <span>778-536-7429</span>
              </a>
              <a
                href="https://www.instagram.com/showtimexotics"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-white text-sm transition-colors"
              >
                <Instagram size={16} />
                <span>@showtimexotics</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} SHOWTIMEXOTICS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
