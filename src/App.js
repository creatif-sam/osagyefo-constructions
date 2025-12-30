import React, { useState, useEffect } from 'react';
import { Building2, Hammer, Package, Phone, Mail, MapPin, ChevronRight, Award, Users, CheckCircle, Menu, X } from 'lucide-react';

export default function OsagyefoConstructions() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Building2,
      title: "Building Construction",
      description: "Residential and commercial construction projects delivered with excellence and precision."
    },
    {
      icon: Hammer,
      title: "Contracting Services",
      description: "Comprehensive contracting solutions for all your construction needs from start to finish."
    },
    {
      icon: Package,
      title: "Building Materials",
      description: "Quality building materials supplier - cement, steel, blocks, and all construction essentials."
    }
  ];

  const projects = [
    { name: "Residential Complex", location: "Mpohor", type: "Residential" },
    { name: "Commercial Plaza", location: "Western Region", type: "Commercial" },
    { name: "Educational Facility", location: "Mpohor", type: "Institutional" }
  ];

  const stats = [
    { number: "Ready", label: "To Build" },
    { number: "Expert", label: "Team" },
    { number: "Quality", label: "Materials" },
    { number: "100%", label: "Commitment" }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-blue-950 shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-2 rounded-lg">
                <Building2 className="w-8 h-8 text-blue-950" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-amber-400">Osagyefo</h1>
                <p className="text-xs text-gray-300">Constructions Limited</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-200 hover:text-amber-400 transition-colors duration-300 font-medium"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-blue-950 border-t border-blue-900">
            <div className="px-4 py-4 space-y-3">
              {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-200 hover:text-amber-400 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-32 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center py-20">
            <div className="text-white space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Building Your <span className="text-amber-400">Dreams</span> Into Reality
              </h2>
              <p className="text-xl text-gray-300">
                Premier construction contractor and building materials dealer in Mpohor, Western Region, Ghana
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="bg-amber-500 hover:bg-amber-600 text-blue-950 px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
                >
                  <span>Get Started</span>
                  <ChevronRight className="w-5 h-5" />
                </a>
                <a
                  href="#services"
                  className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-blue-950 px-8 py-4 rounded-lg font-bold transition-all duration-300"
                >
                  Our Services
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-amber-400 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-3xl shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Award className="w-12 h-12 text-amber-400" />
                    <div>
                      <h3 className="text-2xl font-bold text-white">Quality Excellence</h3>
                      <p className="text-gray-300">ISO Certified Standards</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Users className="w-12 h-12 text-amber-400" />
                    <div>
                      <h3 className="text-2xl font-bold text-white">Expert Team</h3>
                      <p className="text-gray-300">Skilled Professionals</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-12 h-12 text-amber-400" />
                    <div>
                      <h3 className="text-2xl font-bold text-white">Timely Delivery</h3>
                      <p className="text-gray-300">On Schedule, Every Time</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative -mt-16 z-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-950 to-blue-900 rounded-2xl shadow-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
              Our <span className="text-amber-500">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive construction solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-amber-500"
              >
                <div className="bg-gradient-to-br from-amber-400 to-amber-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-blue-950" />
                </div>
                <h3 className="text-2xl font-bold text-blue-950 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
              What We Can <span className="text-amber-500">Build For You</span>
            </h2>
            <p className="text-xl text-gray-600">
              Ready to bring your construction vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-900 to-blue-950 flex items-center justify-center">
                  <Building2 className="w-24 h-24 text-amber-400 opacity-50" />
                </div>
                <div className="bg-white p-6 border-t-4 border-amber-500">
                  <h3 className="text-2xl font-bold text-blue-950 mb-2">{project.name}</h3>
                  <p className="text-amber-500 mb-1">{project.location}</p>
                  <p className="text-gray-600 text-sm">{project.type}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-xl text-blue-950 font-semibold mb-4">Your Project Could Be Our First Showcase!</p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              As a new company with fresh energy and commitment to excellence, we're ready to make your project a success story. 
              Be among our pioneering clients and benefit from our dedication to prove ourselves.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-blue-950 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                About <span className="text-amber-400">Osagyefo Constructions</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                We are a leading construction company based in Mpohor, Western Region, Ghana, specializing in building construction and the supply of quality building materials.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With years of experience and a commitment to excellence, we deliver projects that stand the test of time. Our team of skilled professionals ensures every project meets the highest standards of quality, safety, and efficiency.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">Licensed & Insured</h4>
                    <p className="text-gray-400 text-sm">Fully certified professionals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">Quality Materials</h4>
                    <p className="text-gray-400 text-sm">Premium supplies only</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-amber-400 rounded-3xl transform -rotate-6"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                <h3 className="text-2xl font-bold text-blue-950 mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  {[
                    "Expert craftsmanship and attention to detail",
                    "Competitive pricing without compromising quality",
                    "Timely project completion",
                    "Comprehensive warranty coverage",
                    "Local expertise in Western Region"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
              Get In <span className="text-amber-500">Touch</span>
            </h2>
            <p className="text-xl text-gray-600">
              Ready to start your project? Contact us today
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-500 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-950" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-950 mb-2">Location</h3>
                  <p className="text-gray-600">Mpohor, Western Region<br />Ghana</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-500 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-950" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-950 mb-2">Phone</h3>
                  <p className="text-gray-600">+233 54 675 5552</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-500 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-950" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-950 mb-2">Email</h3>
                  <p className="text-gray-600">info@osagyefoconstructions.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-blue-950 mb-6">Send Us a Message</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                ></textarea>
                <button
                  onClick={() => alert('Thank you for your message! We will contact you soon.')}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-blue-950 font-bold py-4 rounded-lg transition-colors duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-amber-500 p-2 rounded-lg">
                  <Building2 className="w-6 h-6 text-blue-950" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-amber-400">Osagyefo</h3>
                  <p className="text-xs text-gray-400">Constructions Limited</p>
                </div>
              </div>
              <p className="text-gray-400">
                Building excellence in Mpohor  and across Western Region, Ghana.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-amber-400 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-amber-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-amber-400 mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Building Construction</li>
                <li>Contracting Services</li>
                <li>Building Materials Supply</li>
                <li>Project Management</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-900 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Osagyefo Constructions Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}