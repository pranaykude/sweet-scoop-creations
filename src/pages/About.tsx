import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Award, Leaf } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2020', event: 'Sweet Scoops Founded', description: 'Started with a dream and a single ice cream cart' },
    { year: '2021', event: 'First Store Opening', description: 'Opened our flagship store in downtown' },
    { year: '2022', event: 'Award Recognition', description: 'Won "Best Local Ice Cream" award' },
    { year: '2023', event: 'Expansion', description: 'Opened 3 new locations across the city' },
    { year: '2024', event: 'Premium Line Launch', description: 'Introduced our artisan premium collection' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every scoop is crafted with passion and care, using time-honored techniques passed down through generations.'
    },
    {
      icon: Leaf,
      title: 'Natural Ingredients',
      description: 'We source only the finest, natural ingredients from local farms and trusted suppliers worldwide.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'We believe in giving back to our community and creating moments of joy for families everywhere.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Our commitment to quality has earned us recognition as the premium ice cream brand in the region.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="gradient-hero py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Our Sweet Story
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From a small family dream to the region's most beloved ice cream brand, 
              Sweet Scoops has been spreading joy one scoop at a time since 2020.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary text-primary-foreground">Our Beginning</Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                A Dream Born from Family Tradition
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Sweet Scoops began as a family dream, inspired by generations of ice cream making 
                traditions passed down through our founder's family. What started as weekend experiments 
                in a home kitchen quickly grew into something magical.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we combine those cherished family recipes with modern techniques and the 
                finest ingredients to create ice cream experiences that bring families together 
                and create lasting memories.
              </p>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-premium">
                <img
                  src="https://images.unsplash.com/photo-1567306301408-9b74779a11af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Ice cream making process"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-primary-foreground">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              What Makes Us Special
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our core values guide everything we do, from sourcing ingredients to serving our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift bg-card shadow-soft">
                <CardContent className="p-8 text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-primary-foreground">Our Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Milestones & Achievements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow our journey from a small startup to the beloved brand we are today.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <Card className={`w-full max-w-md hover-lift shadow-soft ${index % 2 === 0 ? 'mr-8 lg:mr-16' : 'ml-8 lg:ml-16'}`}>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                          {milestone.year}
                        </div>
                      </div>
                      <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                        {milestone.event}
                      </h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-primary-foreground">Meet the Team</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              The People Behind the Magic
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our passionate team of ice cream artisans and creators work tirelessly to bring you the perfect scoop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'Founder & Head Chef', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1-5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
              { name: 'Mike Chen', role: 'Master Ice Cream Maker', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
              { name: 'Emily Rodriguez', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
            ].map((member, index) => (
              <Card key={index} className="hover-lift bg-card shadow-soft">
                <CardContent className="p-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-6 text-center">
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium">
                      {member.role}
                    </p>
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

export default About;