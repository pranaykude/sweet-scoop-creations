import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send,
  CheckCircle,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, email, and message are required.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
      variant: "default"
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Stores',
      details: [
        '123 Sweet Street, Flavor Town, ST 12345',
        '456 Ice Cream Avenue, Sundae City, ST 67890',
        '789 Scoop Boulevard, Gelato Grove, ST 11111'
      ],
      color: 'text-primary'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        'Main: +1 (555) 123-SWEET',
        'Catering: +1 (555) 456-EVENT',
        'Corporate: +1 (555) 789-BULK'
      ],
      color: 'text-mint'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'hello@sweetscoops.com',
        'catering@sweetscoops.com',
        'support@sweetscoops.com'
      ],
      color: 'text-accent'
    },
    {
      icon: Clock,
      title: 'Store Hours',
      details: [
        'Mon-Thu: 11:00 AM - 9:00 PM',
        'Fri-Sat: 11:00 AM - 10:00 PM',
        'Sunday: 12:00 PM - 8:00 PM'
      ],
      color: 'text-chocolate'
    }
  ];

  const faqs = [
    {
      question: 'Do you offer ice cream catering?',
      answer: 'Yes! We provide full catering services for events of all sizes, from intimate gatherings to large celebrations.'
    },
    {
      question: 'Can I place bulk orders?',
      answer: 'Absolutely. We offer special pricing for bulk orders and can accommodate corporate events, schools, and organizations.'
    },
    {
      question: 'Do you make custom flavors?',
      answer: 'We love creating custom flavors! Work with our artisans to develop unique flavors tailored to your preferences.'
    },
    {
      question: 'What are your delivery options?',
      answer: 'We offer same-day delivery within our service area, with temperature-controlled transport to ensure quality.'
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
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Have questions about our ice cream, need catering for an event, or just want to say hello? 
              We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <Badge className="mb-4 bg-primary text-primary-foreground">Send us a message</Badge>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  We're Here to Help
                </h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <Card className="shadow-premium">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone
                        </label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Your phone number"
                          type="tel"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        type="email"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-dark text-primary-foreground"
                      size="lg"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <Badge className="mb-4 bg-mint text-mint-foreground">Contact Information</Badge>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  Multiple Ways to Reach Us
                </h2>
                <p className="text-lg text-muted-foreground">
                  Choose the method that works best for you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover-lift shadow-soft">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-full bg-background ${info.color}`}>
                          <info.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                            {info.title}
                          </h3>
                          <div className="space-y-1">
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-muted-foreground">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Media */}
              <Card className="mt-8 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="p-3">
                      <Facebook className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="sm" className="p-3">
                      <Instagram className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="sm" className="p-3">
                      <Twitter className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Find Our Locations
            </h2>
            <p className="text-lg text-muted-foreground">
              Visit any of our stores for the full Sweet Scoops experience.
            </p>
          </div>

          <Card className="shadow-premium overflow-hidden">
            <div className="h-96 bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                  Interactive Map
                </h3>
                <p className="text-muted-foreground">
                  Map integration would be implemented here with actual location data.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-primary-foreground">Frequently Asked Questions</Badge>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
              Quick Answers
            </h2>
            <p className="text-lg text-muted-foreground">
              Find answers to commonly asked questions about our services and products.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <MessageCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
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

export default Contact;