import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Product, useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
  onViewDetails?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart();

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
    <Card className="group overflow-hidden hover-lift shadow-soft bg-card">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Button
          variant="ghost"
          size="sm"
          className={`absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm hover:bg-white ${
            isInWishlist(product.id) ? 'text-red-500' : 'text-gray-600'
          }`}
          onClick={handleWishlistToggle}
        >
          <Heart className={`h-4 w-4 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
        </Button>
        <div className="absolute top-3 left-3">
          <Badge className="bg-primary text-primary-foreground">
            {product.category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-heading font-semibold text-lg text-foreground">
            {product.name}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-muted-foreground">4.9</span>
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-heading font-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
          <div className="flex space-x-2">
            {onViewDetails && (
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onViewDetails(product)}
                className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
              >
                View
              </Button>
            )}
            <Button 
              size="sm"
              onClick={handleAddToCart}
              className="bg-primary hover:bg-primary-dark text-primary-foreground"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;