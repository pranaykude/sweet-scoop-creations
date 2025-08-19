import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/ui/product-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter } from 'lucide-react';
import { Product } from '@/contexts/CartContext';
import strawberryImage from '@/assets/strawberry-ice-cream.jpg';
import vanillaImage from '@/assets/vanilla-ice-cream.jpg';
import chocolateImage from '@/assets/chocolate-ice-cream.jpg';
import mintChipImage from '@/assets/mint-chip-ice-cream.jpg';
import cookiesCreamImage from '@/assets/cookies-cream-ice-cream.jpg';
import saltedCaramelImage from '@/assets/salted-caramel-ice-cream.jpg';
import rockyRoadImage from '@/assets/rocky-road-ice-cream.jpg';
import pistachioImage from '@/assets/pistachio-ice-cream.jpg';
import mangoImage from '@/assets/mango-ice-cream.jpg';
import blueberryImage from '@/assets/blueberry-ice-cream.jpg';
import coffeeImage from '@/assets/coffee-ice-cream.jpg';

const Products = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [filterBy, setFilterBy] = useState('all');

  const products: Product[] = [
    {
      id: '1',
      name: 'Strawberry Delight',
      price: 8.99,
      image: strawberryImage,
      description: 'Fresh strawberry ice cream made with real strawberries and cream',
      category: 'Fruit'
    },
    {
      id: '2',
      name: 'Vanilla Bean Classic',
      price: 7.99,
      image: vanillaImage,
      description: 'Rich vanilla ice cream with real Madagascar vanilla beans',
      category: 'Classic'
    },
    {
      id: '3',
      name: 'Chocolate Brownie',
      price: 9.99,
      image: chocolateImage,
      description: 'Decadent chocolate ice cream with chunky brownie pieces',
      category: 'Chocolate'
    },
    {
      id: '4',
      name: 'Mint Chocolate Chip',
      price: 8.49,
      image: mintChipImage,
      description: 'Refreshing mint ice cream with dark chocolate chips',
      category: 'Mint'
    },
    {
      id: '5',
      name: 'Cookies & Cream',
      price: 8.99,
      image: cookiesCreamImage,
      description: 'Vanilla ice cream loaded with chocolate cookie pieces',
      category: 'Classic'
    },
    {
      id: '6',
      name: 'Salted Caramel',
      price: 9.49,
      image: saltedCaramelImage,
      description: 'Sweet and salty caramel ice cream with caramel swirls',
      category: 'Caramel'
    },
    {
      id: '7',
      name: 'Rocky Road',
      price: 9.99,
      image: rockyRoadImage,
      description: 'Chocolate ice cream with marshmallows and almonds',
      category: 'Chocolate'
    },
    {
      id: '8',
      name: 'Pistachio Perfection',
      price: 10.99,
      image: pistachioImage,
      description: 'Creamy pistachio ice cream with roasted pistachio pieces',
      category: 'Nut'
    },
    {
      id: '9',
      name: 'Mango Madness',
      price: 9.49,
      image: mangoImage,
      description: 'Tropical mango ice cream with real mango chunks',
      category: 'Fruit'
    },
    {
      id: '10',
      name: 'Blueberry Burst',
      price: 8.99,
      image: blueberryImage,
      description: 'Creamy blueberry ice cream with fresh blueberry swirls',
      category: 'Fruit'
    },
    {
      id: '11',
      name: 'Coffee Bean Supreme',
      price: 9.99,
      image: coffeeImage,
      description: 'Rich coffee ice cream made with premium roasted beans',
      category: 'Coffee'
    },
    {
      id: '12',
      name: 'Double Chocolate Fudge',
      price: 10.49,
      image: chocolateImage,
      description: 'Ultra-rich chocolate ice cream with fudge ribbons',
      category: 'Chocolate'
    },
    {
      id: '13',
      name: 'Strawberry Cheesecake',
      price: 11.99,
      image: strawberryImage,
      description: 'Strawberry ice cream with cheesecake pieces and graham cracker crumbs',
      category: 'Fruit'
    },
    {
      id: '14',
      name: 'Butter Pecan',
      price: 9.49,
      image: vanillaImage,
      description: 'Creamy butter ice cream with toasted pecan pieces',
      category: 'Nut'
    },
    {
      id: '15',
      name: 'Neapolitan Classic',
      price: 8.49,
      image: vanillaImage,
      description: 'Three flavors in one: vanilla, chocolate, and strawberry',
      category: 'Classic'
    },
    {
      id: '16',
      name: 'Coconut Cream',
      price: 9.99,
      image: vanillaImage,
      description: 'Tropical coconut ice cream with coconut flakes',
      category: 'Tropical'
    },
    {
      id: '17',
      name: 'Banana Split',
      price: 10.99,
      image: vanillaImage,
      description: 'Banana ice cream with chocolate chips and strawberry swirls',
      category: 'Fruit'
    },
    {
      id: '18',
      name: 'Caramel Praline',
      price: 11.49,
      image: saltedCaramelImage,
      description: 'Caramel ice cream with praline pieces and caramel swirls',
      category: 'Caramel'
    },
    {
      id: '19',
      name: 'Chocolate Mint Swirl',
      price: 9.49,
      image: mintChipImage,
      description: 'Chocolate ice cream with refreshing mint swirls',
      category: 'Chocolate'
    },
    {
      id: '20',
      name: 'Lemon Sorbet',
      price: 7.99,
      image: vanillaImage,
      description: 'Refreshing lemon sorbet made with real lemon juice',
      category: 'Sorbet'
    },
    {
      id: '21',
      name: 'Black Cherry',
      price: 9.99,
      image: strawberryImage,
      description: 'Rich vanilla ice cream with black cherry pieces',
      category: 'Fruit'
    },
    {
      id: '22',
      name: 'Hazelnut Praline',
      price: 11.99,
      image: pistachioImage,
      description: 'Hazelnut ice cream with praline pieces and chocolate chips',
      category: 'Nut'
    },
    {
      id: '23',
      name: 'Rum Raisin',
      price: 10.49,
      image: vanillaImage,
      description: 'Premium vanilla ice cream with rum-soaked raisins',
      category: 'Classic'
    },
    {
      id: '24',
      name: 'Maple Walnut',
      price: 10.99,
      image: vanillaImage,
      description: 'Maple-flavored ice cream with candied walnuts',
      category: 'Nut'
    },
    {
      id: '25',
      name: 'Tiramisu',
      price: 12.99,
      image: coffeeImage,
      description: 'Coffee ice cream with mascarpone swirls and ladyfinger pieces',
      category: 'Coffee'
    },
    {
      id: '26',
      name: 'Green Tea',
      price: 9.99,
      image: mintChipImage,
      description: 'Delicate green tea ice cream with a subtle earthy flavor',
      category: 'Tea'
    },
    {
      id: '27',
      name: 'Birthday Cake',
      price: 10.49,
      image: vanillaImage,
      description: 'Vanilla ice cream with colorful sprinkles and cake pieces',
      category: 'Classic'
    },
    {
      id: '28',
      name: 'Peanut Butter Cup',
      price: 11.49,
      image: chocolateImage,
      description: 'Peanut butter ice cream with chocolate peanut butter cups',
      category: 'Nut'
    },
    {
      id: '29',
      name: 'Orange Cream',
      price: 8.99,
      image: vanillaImage,
      description: 'Creamy orange ice cream reminiscent of creamsicles',
      category: 'Fruit'
    },
    {
      id: '30',
      name: 'Espresso Chip',
      price: 10.99,
      image: coffeeImage,
      description: 'Bold espresso ice cream with dark chocolate chips',
      category: 'Coffee'
    },
    {
      id: '31',
      name: 'Strawberry Basil',
      price: 11.99,
      image: strawberryImage,
      description: 'Gourmet strawberry ice cream with fresh basil infusion',
      category: 'Fruit'
    },
    {
      id: '32',
      name: 'Lavender Honey',
      price: 12.49,
      image: vanillaImage,
      description: 'Delicate lavender ice cream sweetened with local honey',
      category: 'Floral'
    },
    {
      id: '33',
      name: 'Dark Chocolate Sea Salt',
      price: 11.99,
      image: chocolateImage,
      description: 'Rich dark chocolate ice cream with sea salt crystals',
      category: 'Chocolate'
    },
    {
      id: '34',
      name: 'Peach Cobbler',
      price: 10.99,
      image: vanillaImage,
      description: 'Peach ice cream with cobbler crust pieces and cinnamon',
      category: 'Fruit'
    },
    {
      id: '35',
      name: 'Brown Butter Sage',
      price: 13.99,
      image: vanillaImage,
      description: 'Artisan brown butter ice cream with fresh sage',
      category: 'Gourmet'
    },
    {
      id: '36',
      name: 'Blackberry Lemon',
      price: 11.49,
      image: blueberryImage,
      description: 'Blackberry ice cream with lemon zest and berry swirls',
      category: 'Fruit'
    },
    {
      id: '37',
      name: 'Chai Spice',
      price: 10.49,
      image: coffeeImage,
      description: 'Spiced ice cream with cardamom, cinnamon, and tea flavors',
      category: 'Tea'
    },
    {
      id: '38',
      name: 'Fig & Mascarpone',
      price: 13.49,
      image: vanillaImage,
      description: 'Creamy mascarpone ice cream with fresh fig pieces',
      category: 'Gourmet'
    },
    {
      id: '39',
      name: 'Hibiscus Berry',
      price: 11.99,
      image: strawberryImage,
      description: 'Floral hibiscus ice cream with mixed berry swirls',
      category: 'Floral'
    },
    {
      id: '40',
      name: 'Rosemary Olive Oil',
      price: 14.99,
      image: vanillaImage,
      description: 'Unique savory-sweet ice cream with rosemary and olive oil',
      category: 'Gourmet'
    },
    {
      id: '41',
      name: 'Passion Fruit Sorbet',
      price: 9.49,
      image: mangoImage,
      description: 'Tropical passion fruit sorbet with tart and sweet notes',
      category: 'Sorbet'
    },
    {
      id: '42',
      name: 'Earl Grey Tea',
      price: 10.99,
      image: vanillaImage,
      description: 'Sophisticated Earl Grey tea ice cream with bergamot',
      category: 'Tea'
    },
    {
      id: '43',
      name: 'Goat Cheese & Honey',
      price: 13.99,
      image: vanillaImage,
      description: 'Tangy goat cheese ice cream drizzled with wildflower honey',
      category: 'Gourmet'
    },
    {
      id: '44',
      name: 'Balsamic Strawberry',
      price: 12.99,
      image: strawberryImage,
      description: 'Gourmet strawberry ice cream with aged balsamic reduction',
      category: 'Gourmet'
    },
    {
      id: '45',
      name: 'Saffron Cardamom',
      price: 15.99,
      image: vanillaImage,
      description: 'Luxurious saffron ice cream with aromatic cardamom spice',
      category: 'Gourmet'
    }
  ];

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = products
    .filter(product => 
      (filterBy === 'all' || product.category === filterBy) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const handleViewDetails = (product: Product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="gradient-hero py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Our Premium Ice Cream Collection
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handcrafted artisan ice cream flavors, made with the finest ingredients and lots of love.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search ice cream flavors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <Select value={filterBy} onValueChange={setFilterBy}>
                <SelectTrigger className="w-[180px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name (A-Z)</SelectItem>
                  <SelectItem value="price-low">Price (Low to High)</SelectItem>
                  <SelectItem value="price-high">Price (High to Low)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;