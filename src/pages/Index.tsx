import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/ui/product-card';
import { ArrowRight, Star, Users, Award, Truck } from 'lucide-react';
import heroImage from '@/assets/hero-ice-cream.jpg';
import strawberryImage from '@/assets/strawberry-ice-cream.jpg';
import vanillaImage from '@/assets/vanilla-ice-cream.jpg';
import chocolateImage from '@/assets/chocolate-ice-cream.jpg';

const Index = () => {
  const featuredProducts = [
    {
      id: '1',
      name: 'Strawberry Delight',
      price: 8.99,
      image: strawberryImage,
      description: 'Fresh strawberry ice cream made with real strawberries',
      category: 'Fruit'
    },
    {
      id: '2',
      name: 'Vanilla Bean Classic',
      price: 7.99,
      image: vanillaImage,
      description: 'Rich vanilla ice cream with Madagascar vanilla beans',
      category: 'Classic'
    },
    {
      id: '3',
      name: 'Chocolate Brownie',
      price: 9.99,
      image: chocolateImage,
      description: 'Decadent chocolate ice cream with brownie pieces',
      category: 'Chocolate'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative gradient-hero py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl lg:text-7xl font-heading font-bold text-foreground mb-6 leading-tight">
                Sweet Scoops
                <span className="block text-primary">Premium Ice Cream</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Handcrafted artisan ice cream made with the finest ingredients. 
                Every scoop is a journey of pure indulgence and happiness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground">
                  <Link to="/products">
                    Order Now
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Link to="/about">Learn Our Story</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-float">
              <img
                src={heroImage}
                alt="Premium Sweet Scoops Ice Cream"
                className="w-full rounded-2xl shadow-premium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              Featured Flavors
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most beloved premium ice cream flavors, crafted with passion and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/products">View All Flavors</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Star, title: 'Premium Quality', desc: 'Finest ingredients sourced globally' },
              { icon: Users, title: 'Family Favorite', desc: 'Loved by families for generations' },
              { icon: Truck, title: 'Fast Delivery', desc: 'Fresh delivery to your doorstep' }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover-lift shadow-soft">
                <CardContent className="p-8">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-xl mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
