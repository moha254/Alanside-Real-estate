import React from 'react';
import { Award, Users, Building, Target, Eye, Heart } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Building, label: 'Properties Sold', value: '500+' },
    { icon: Users, label: 'Happy Clients', value: '1000+' },
    { icon: Award, label: 'Years Experience', value: '15+' },
    { icon: Target, label: 'Success Rate', value: '98%' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every transaction, ensuring our clients receive the highest quality service and results.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Trust is the foundation of our business. We operate with complete transparency and honesty in all our dealings.',
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Our clients\' needs come first. We listen, understand, and tailor our services to exceed expectations.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About PrimeRealty</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            Your trusted partner in real estate for over 15 years, helping clients 
            achieve their property dreams with expertise and dedication.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Founded in 2009, PrimeRealty began with a simple mission: to provide 
                  exceptional real estate services that put our clients first. What started 
                  as a small team of passionate agents has grown into one of New York's 
                  most trusted real estate agencies.
                </p>
                <p>
                  Over the years, we've helped thousands of families find their dream homes, 
                  assisted investors in building their portfolios, and supported businesses 
                  in finding the perfect commercial spaces. Our success is measured not just 
                  in transactions, but in the lasting relationships we build with our clients.
                </p>
                <p>
                  Today, we continue to innovate and adapt to the changing real estate 
                  landscape while maintaining the personal touch and attention to detail 
                  that has made us who we are.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="PrimeRealty Office"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To provide exceptional real estate services that exceed our clients' 
                expectations while building lasting relationships based on trust, 
                integrity, and professional excellence.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the most trusted and respected real estate agency in New York, 
                known for our innovative approach, market expertise, and unwavering 
                commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our relationships with clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="bg-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Team</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Our experienced agents are ready to help you navigate the real estate market 
            and achieve your property goals.
          </p>
          <a
            href="/agents"
            className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors duration-200 inline-block"
          >
            Meet Our Agents
          </a>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're buying, selling, or investing, we're here to help you 
            every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-900 transition-colors duration-200"
            >
              Contact Us
            </a>
            <a
              href="/properties"
              className="border-2 border-blue-800 text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 hover:text-white transition-colors duration-200"
            >
              View Properties
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;