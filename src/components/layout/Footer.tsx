import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-chocolate text-chocolate-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-chocolate-foreground/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Stay Sweet with Our Newsletter
            </h3>
            <p className="text-chocolate-foreground/80 mb-6 max-w-md mx-auto">
              Get the latest updates on new flavors, special offers, and sweet treats delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-chocolate-foreground/10 border-chocolate-foreground/20 text-chocolate-foreground placeholder:text-chocolate-foreground/60"
              />
              <Button className="bg-primary hover:bg-primary-dark text-primary-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">Sweet Scoops</h3>
            <p className="text-chocolate-foreground/80 mb-4">
              Crafting premium ice cream experiences since 2020. Made with love, served with joy.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-chocolate-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-chocolate-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-chocolate-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-chocolate-foreground hover:text-primary">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-chocolate-foreground/80 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-chocolate-foreground/80 hover:text-primary transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-chocolate-foreground/80 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-chocolate-foreground/80 hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/blog" className="text-chocolate-foreground/80 hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-chocolate-foreground/80">Ice Cream Catering</li>
              <li className="text-chocolate-foreground/80">Event Planning</li>
              <li className="text-chocolate-foreground/80">Bulk Orders</li>
              <li className="text-chocolate-foreground/80">Custom Flavors</li>
              <li className="text-chocolate-foreground/80">Delivery Service</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-chocolate-foreground/80">123 Sweet Street, Flavor Town, ST 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-chocolate-foreground/80">+1 (555) 123-SWEET</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-chocolate-foreground/80">hello@sweetscoops.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-chocolate-foreground/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-chocolate-foreground/60 text-sm">
              © 2024 Sweet Scoops. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link to="#" className="text-chocolate-foreground/60 hover:text-primary text-sm">Privacy Policy</Link>
              <Link to="#" className="text-chocolate-foreground/60 hover:text-primary text-sm">Terms of Service</Link>
              <Link to="#" className="text-chocolate-foreground/60 hover:text-primary text-sm">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;