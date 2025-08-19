import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Truck, 
  Users, 
  Calendar, 
  ShoppingBag, 
  Palette, 
  Clock, 
  MapPin, 
  Phone, 
  Check,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: 'Ice Cream Catering',
      description: 'Professional catering for events of all sizes, from intimate gatherings to large celebrations.',
      features: ['Custom flavor selection', 'Professional setup', 'Serving equipment included', 'Staff available'],
      price: 'Starting at $150',
      popular: true
    },
    {
      icon: Calendar,
      title: 'Event Planning',
      description: 'Complete event planning services with ice cream as the centerpiece of your celebration.',
      features: ['Full event coordination', 'Themed decorations', 'Entertainment options', 'Photography services'],
      price: 'Starting at $500',
      popular: false
    },
    {
      icon: ShoppingBag,
      title: 'Bulk Orders',
      description: 'Large quantity orders for businesses, schools, and organizations at discounted rates.',
      features: ['Volume discounts', 'Custom packaging', 'Scheduled deliveries', 'Invoice billing'],
      price: 'Contact for pricing',
      popular: false
    },
    {
      icon: Palette,
      title: 'Custom Flavors',
      description: 'Work with our artisans to create unique flavors tailored to your specific preferences.',
      features: ['Flavor consultation', 'Recipe development', 'Taste testing sessions', 'Exclusive rights'],
      price: 'Starting at $200',
      popular: true
    },
    {
      icon: Truck,
      title: 'Delivery Service',
      description: 'Fast and reliable delivery service to bring our premium ice cream directly to you.',
      features: ['Same-day delivery', 'Temperature controlled', 'Contactless delivery', 'Tracking available'],
      price: 'From $5.99',
      popular: false
    },
    {
      icon: Clock,
      title: 'Corporate Packages',
      description: 'Special packages for corporate events, team building, and office celebrations.',
      features: ['Corporate discounts', 'Flexible scheduling', 'Branded packaging', 'Regular service options'],
      price: 'Starting at $300',
      popular: false
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Consultation',
      description: 'We discuss your needs, preferences, and event details to create the perfect ice cream experience.'
    },
    {
      step: 2,
      title: 'Planning',
      description: 'Our team creates a detailed plan including flavors, quantities, and logistics for your event.'
    },
    {
      step: 3,
      title: 'Preparation',
      description: 'We prepare your ice cream using fresh ingredients and our artisan techniques.'
    },
    {
      step: 4,
      title: 'Delivery & Service',
      description: 'Professional delivery and setup, with optional staff to serve your guests.'
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
              Premium Ice Cream Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              From intimate gatherings to grand celebrations, we bring the magic of premium ice cream 
              to your special events with professional service and unmatched quality.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground">
              Get Started Today
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-primary-foreground">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Complete Ice Cream Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive range of services to make your event unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`relative hover-lift bg-card shadow-soft ${service.popular ? 'ring-2 ring-primary' : ''}`}>
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardContent className="p-8">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-mint mr-2" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-heading font-bold text-primary">
                      {service.price}
                    </span>
                    <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-primary-foreground">How It Works</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Our Service Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From initial consultation to final delivery, we ensure every step is perfect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary text-primary-foreground">Get in Touch</Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Ready to Plan Your Sweet Event?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our team is ready to help you create an unforgettable ice cream experience. 
                Contact us today to discuss your needs and get a custom quote.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Call Us</p>
                    <p className="text-muted-foreground">+1 (555) 123-SWEET</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Visit Us</p>
                    <p className="text-muted-foreground">123 Sweet Street, Flavor Town</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="shadow-premium">
              <CardContent className="p-8">
                <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
                  Request a Quote
                </h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <select className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>Select Service</option>
                    <option>Ice Cream Catering</option>
                    <option>Event Planning</option>
                    <option>Bulk Orders</option>
                    <option>Custom Flavors</option>
                  </select>
                  <textarea
                    placeholder="Tell us about your event..."
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  ></textarea>
                  <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground">
                    Get Your Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;