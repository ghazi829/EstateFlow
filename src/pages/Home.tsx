import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Shield, Clock, Award, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchBar from '@/components/SearchBar';
import PropertyCard from '@/components/PropertyCard';
import propertiesData from '@/data/properties.json';

const Home: React.FC = () => {
  const featuredProperties = propertiesData.properties.filter((p) => p.featured).slice(0, 4);

  const stats = [
    { icon: Building2, value: '10,000+', label: 'Properties Listed' },
    { icon: Users, value: '5,000+', label: 'Happy Clients' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: TrendingUp, value: '98%', label: 'Success Rate' },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Verified Listings',
      description: 'All properties are thoroughly verified to ensure accuracy and trustworthiness.',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Our dedicated team is available around the clock to assist you.',
    },
    {
      icon: Award,
      title: 'Expert Agents',
      description: 'Work with experienced real estate professionals who know the market.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/src/assets/properties/property1.jpg"
            alt="Luxury Property"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center mb-8 lg:mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Find Your
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Dream Home{' '}
              </span>
              Today
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              Discover thousands of properties for sale and rent. Your perfect home is just a search away.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <SearchBar />
          </div>

          {/* Quick Stats */}
          <div className="mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="w-6 h-6 text-blue-400" />
                </div>
                <p className="text-2xl lg:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Properties
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-xl">
                Handpicked premium properties selected for their exceptional value, location, and quality.
              </p>
            </div>
            <Link to="/listings">
              <Button variant="outline" className="group">
                View All Properties
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} featured={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose EstateFlow?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We provide a seamless property search experience with verified listings and expert support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="/src/assets/properties/property6.jpg"
              alt="Luxury Interior"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4">
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                  Ready to Find Your Home?
                </h2>
                <p className="text-lg text-gray-200 mb-8 max-w-xl mx-auto">
                  Start your property search today and let us help you find the perfect place to call home.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/listings">
                    <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                      Browse Properties
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                      Contact Agent
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
