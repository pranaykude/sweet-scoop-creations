import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Calendar, Clock, User, Share2, Heart, MessageCircle } from 'lucide-react';

const BlogDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const post = location.state?.post;

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold mb-4">Article not found</h1>
          <Button onClick={() => navigate('/blog')}>Back to Blog</Button>
        </div>
      </div>
    );
  }

  const blogContent = `
    <p class="mb-6">Welcome to the fascinating world of artisan ice cream making! At Sweet Scoops, every scoop tells a story of passion, precision, and the pursuit of the perfect frozen treat. Today, we're taking you behind the scenes to discover what makes our ice cream truly special.</p>

    <h3 class="text-2xl font-heading font-semibold mb-4 text-foreground">The Foundation: Premium Ingredients</h3>
    <p class="mb-6">Our journey begins with sourcing the finest ingredients from trusted partners around the world. We work directly with local dairy farms to ensure our cream and milk are fresh and of the highest quality. Our vanilla beans come from Madagascar, our chocolate from Belgium, and our fruits are sourced locally when in season.</p>

    <h3 class="text-2xl font-heading font-semibold mb-4 text-foreground">The Art of Flavor Development</h3>
    <p class="mb-6">Creating a new flavor is like composing a symphony. Our master ice cream makers spend weeks perfecting each recipe, balancing sweetness, texture, and flavor intensity. Every ingredient must harmonize perfectly to create that moment of pure bliss when the ice cream touches your taste buds.</p>

    <blockquote class="border-l-4 border-primary pl-6 italic text-lg mb-6 text-muted-foreground">
      "Ice cream making is both an art and a science. You need to understand the chemistry of freezing and crystallization, but you also need to have an intuitive sense for flavor and texture." - Sarah Johnson, Founder
    </blockquote>

    <h3 class="text-2xl font-heading font-semibold mb-4 text-foreground">The Churning Process</h3>
    <p class="mb-6">Our small-batch approach ensures that every gallon receives the attention it deserves. We use traditional churning methods combined with modern temperature control to achieve the perfect texture. The process can take anywhere from 20 to 45 minutes, depending on the flavor complexity.</p>

    <h3 class="text-2xl font-heading font-semibold mb-4 text-foreground">Quality Control and Testing</h3>
    <p class="mb-6">Before any batch reaches our customers, it undergoes rigorous quality testing. Our team evaluates texture, flavor balance, temperature consistency, and visual appeal. Only batches that meet our exacting standards make it to the freezer cases.</p>

    <h3 class="text-2xl font-heading font-semibold mb-4 text-foreground">Sustainability Commitment</h3>
    <p class="mb-6">We believe great ice cream shouldn't come at the expense of our planet. That's why we use eco-friendly packaging, source ingredients responsibly, and minimize waste in our production process. Every scoop is a step towards a more sustainable future.</p>

    <h3 class="text-2xl font-heading font-semibold mb-4 text-foreground">The Sweet Conclusion</h3>
    <p class="mb-6">Creating exceptional ice cream is more than just following a recipe – it's about passion, dedication, and an unwavering commitment to quality. Every member of our team, from our sourcing specialists to our scoop artists, plays a crucial role in bringing you the perfect ice cream experience.</p>

    <p>The next time you enjoy a scoop of Sweet Scoops ice cream, remember the journey it took to reach you. From the farms where our ingredients grow to the skilled hands that craft each batch, every scoop is a testament to our commitment to excellence.</p>
  `;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/blog')}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Button>

        {/* Article Header */}
        <header className="mb-8">
          <Badge className="mb-4 bg-accent text-accent-foreground">
            {post.category}
          </Badge>
          
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div className="flex items-center space-x-6 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative mb-12 overflow-hidden rounded-2xl shadow-premium">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div 
            className="text-muted-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blogContent }}
          />
        </div>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Like this article
              </Button>
              <Button variant="outline" size="sm">
                <MessageCircle className="h-4 w-4 mr-2" />
                Leave a comment
              </Button>
            </div>
            
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share article
            </Button>
          </div>
        </footer>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-12">
            Related Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="hover-lift shadow-soft bg-card cursor-pointer">
                <div className="relative">
                  <img
                    src={`https://images.unsplash.com/photo-${1488900128323 + i}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
                    alt={`Related article ${i}`}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    Related Article Title {i}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Brief description of this related article that might interest the reader.
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Jan {15 - i}, 2024</span>
                    <span>3 min read</span>
                  </div>
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

export default BlogDetail;