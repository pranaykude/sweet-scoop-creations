import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, ShoppingCart, ArrowLeft, Star, Truck, Shield, Award } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart();
  
  const product = location.state?.product;

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold mb-4">Product not found</h1>
          <Button onClick={() => navigate('/products')}>Back to Products</Button>
        </div>
      </div>
    );
  }

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/products')}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl shadow-premium">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                {product.category}
              </Badge>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
                  {product.name}
                </h1>
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={handleWishlistToggle}
                  className={isInWishlist(product.id) ? 'text-red-500' : 'text-gray-600'}
                >
                  <Heart className={`h-6 w-6 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
                </Button>
              </div>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-muted-foreground">(4.9 out of 5 stars)</span>
              </div>

              <p className="text-lg text-muted-foreground mb-6">
                {product.description}
              </p>

              <div className="text-4xl font-heading font-bold text-primary mb-6">
                ${product.price.toFixed(2)}
              </div>
            </div>

            {/* Add to Cart Section */}
            <div className="space-y-4">
              <Button
                size="lg"
                onClick={handleAddToCart}
                className="w-full bg-primary hover:bg-primary-dark text-primary-foreground text-lg py-3"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="border-primary/20">
                <CardContent className="p-4 text-center">
                  <Truck className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-sm">Free Delivery</h3>
                  <p className="text-xs text-muted-foreground">Orders over $25</p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="p-4 text-center">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-sm">Fresh Guarantee</h3>
                  <p className="text-xs text-muted-foreground">Made daily</p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="p-4 text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-sm">Premium Quality</h3>
                  <p className="text-xs text-muted-foreground">Finest ingredients</p>
                </CardContent>
              </Card>
            </div>

            {/* Product Details */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-4">Product Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category:</span>
                    <span className="font-medium">{product.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Size:</span>
                    <span className="font-medium">1 Pint (16 oz)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Storage:</span>
                    <span className="font-medium">Keep Frozen</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Allergens:</span>
                    <span className="font-medium">Contains Dairy</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;