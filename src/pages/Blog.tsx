import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: '1',
      title: 'The Art of Ice Cream Making: Behind the Scenes at Sweet Scoops',
      excerpt: 'Discover the intricate process and passion that goes into creating our artisan ice cream flavors.',
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Behind the Scenes',
      featured: true
    },
    {
      id: '2',
      title: 'Top 10 Ice Cream Flavors for Summer 2024',
      excerpt: 'Explore our curated list of the most refreshing and exciting flavors perfect for the summer season.',
      image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Mike Chen',
      date: '2024-01-12',
      readTime: '3 min read',
      category: 'Flavors',
      featured: false
    },
    {
      id: '3',
      title: 'Hosting the Perfect Ice Cream Party: A Complete Guide',
      excerpt: 'Learn how to create memorable ice cream experiences for your next celebration or gathering.',
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Emily Rodriguez',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Events',
      featured: false
    },
    {
      id: '4',
      title: 'The Science of Perfect Ice Cream Texture',
      excerpt: 'Understand the fascinating science behind achieving the perfect creamy, smooth texture in every scoop.',
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Dr. Lisa Park',
      date: '2024-01-08',
      readTime: '6 min read',
      category: 'Science',
      featured: false
    },
    {
      id: '5',
      title: 'Sustainable Ice Cream: Our Environmental Commitment',
      excerpt: 'Learn about our sustainable practices and commitment to environmental responsibility.',
      image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Green Team',
      date: '2024-01-05',
      readTime: '4 min read',
      category: 'Sustainability',
      featured: false
    },
    {
      id: '6',
      title: 'Customer Spotlight: Sweet Memories Made',
      excerpt: 'Heartwarming stories from our customers and the special moments created with Sweet Scoops.',
      image: 'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Community Team',
      date: '2024-01-03',
      readTime: '5 min read',
      category: 'Community',
      featured: false
    }
  ];

  const categories = ['All', 'Behind the Scenes', 'Flavors', 'Events', 'Science', 'Sustainability', 'Community'];
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const handleReadMore = (post: any) => {
    navigate(`/blog/${post.id}`, { state: { post } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="gradient-hero py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Sweet Stories & Tips
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover the world of artisan ice cream through our blog - from behind-the-scenes insights 
              to flavor profiles and ice cream making tips.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Badge className="bg-primary text-primary-foreground">Featured Article</Badge>
            </div>
            
            <Card className="overflow-hidden hover-lift shadow-premium">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    {featuredPost.category}
                  </Badge>
                </div>
                
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-6 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => handleReadMore(featuredPost)}
                    className="bg-primary hover:bg-primary-dark text-primary-foreground w-fit"
                  >
                    Read Full Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover-lift shadow-soft bg-card">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                    {post.category}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleReadMore(post)}
                      className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-premium">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Never Miss a Sweet Story
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and be the first to read our latest articles, 
                get exclusive recipes, and learn about new flavors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Button className="bg-primary hover:bg-primary-dark text-primary-foreground px-8">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;