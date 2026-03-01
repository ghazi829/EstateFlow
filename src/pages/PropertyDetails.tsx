import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Bed, Bath, Square, MapPin, Heart, Share2, Phone, Mail, 
  ChevronLeft, ChevronRight, Check, Home, Car, Wind, Waves,
  Dumbbell, Shield, UtensilsCrossed, TreePine, Wine, Film
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import propertiesData from '@/data/properties.json';
import ContactAgentForm from '@/components/ContactAgentForm';

const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const property = propertiesData.properties.find((p) => p.id === parseInt(id || '0'));

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Property Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The property you're looking for doesn't exist.
          </p>
          <Button onClick={() => navigate('/listings')}>Browse Properties</Button>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.gallery.length) % property.gallery.length);
  };

  const amenityIcons: Record<string, React.ElementType> = {
    'Swimming Pool': Waves,
    'Fitness Center': Dumbbell,
    '24/7 Security': Shield,
    'Parking': Car,
    'Elevator': ChevronLeft,
    'Air Conditioning': Wind,
    'Balcony': Home,
    'Pet Friendly': Heart,
    'Garden': TreePine,
    'Garage': Car,
    'Fireplace': Home,
    'Home Office': Home,
    'Wine Cellar': Wine,
    'Smart Home System': Home,
    'Gated Entry': Shield,
    'Private Beach': Waves,
    'Infinity Pool': Waves,
    'Outdoor Kitchen': UtensilsCrossed,
    'Home Theater': Film,
    'Spa': Heart,
    'Boat Dock': Waves,
    'Panoramic Views': Home,
    'Climate Control': Wind,
    'Private Pool': Waves,
    'Concierge': Heart,
    'Spa Access': Heart,
    'Private Cinema': Film,
    'Helipad': Home,
    'Valet Parking': Car,
    'Ski Access': TreePine,
    'Hot Tub': Waves,
    'Fire Pit': Home,
    'Mountain Views': Home,
    'Game Room': Home,
    'Heated Floors': Wind,
    'Snow Melt Driveway': Wind,
    'Exposed Brick': Home,
    'High Ceilings': Home,
    'Original Hardwood': Home,
    'Rooftop Access': Home,
    'Bike Storage': Home,
    'Intercom': Phone,
    'High-Speed Internet': Wind,
    'Built-in Storage': Home,
    'Murphy Bed': Bed,
    'City Views': Home,
    'Near Transit': Car,
    'Laundry Facility': Home,
    'Bicycle Parking': Car,
    'Rural Views': TreePine,
    'Workshop': Home,
    'Greenhouse': TreePine,
    'Period Features': Home,
    'Country Kitchen': UtensilsCrossed,
    'Rooftop Terrace': Home,
    'Private Garage': Car,
    'Finished Basement': Home,
    "Chef's Kitchen": UtensilsCrossed,
    'Skylights': Home,
    'Custom Built-ins': Home,
    'Near Subway': Car,
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16 lg:pt-20">
      {/* Image Gallery */}
      <div className="relative h-[50vh] lg:h-[60vh] bg-gray-900">
        <img
          src={property.gallery[currentImageIndex]}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        
        {/* Gallery Navigation */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
          {currentImageIndex + 1} / {property.gallery.length}
        </div>

        {/* Thumbnail Navigation */}
        <div className="absolute bottom-4 left-4 flex gap-2">
          {property.gallery.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentImageIndex
                  ? 'border-white'
                  : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors">
            <Heart className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                  {property.type}
                </Badge>
                {property.featured && (
                  <Badge className="bg-amber-500 text-white">Featured</Badge>
                )}
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                {property.title}
              </h1>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">{property.location}</span>
              </div>
            </div>

            {/* Key Features */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Bed className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {property.bedrooms}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Bedrooms</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <Bath className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {property.bathrooms}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Bathrooms</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <Square className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {property.area}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Sq Ft</p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                About This Property
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {property.description}
              </p>
            </div>

            <Separator />

            {/* Amenities */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Amenities
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.amenities.map((amenity) => {
                  const Icon = amenityIcons[amenity] || Check;
                  return (
                    <div
                      key={amenity}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-100 dark:bg-gray-800"
                    >
                      <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {amenity}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <Separator />

            {/* Map Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Location
              </h2>
              <div className="aspect-video rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-700">
                <iframe
                  title="Property Location"
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986652089301!3d40.69714941680757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2s${encodeURIComponent(property.location)}!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Price Card */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Price</p>
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                    {formatPrice(property.price)}
                  </p>

                  {/* Agent Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={property.agent.image}
                      alt={property.agent.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {property.agent.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Real Estate Agent
                      </p>
                    </div>
                  </div>

                  {/* Contact Buttons */}
                  <div className="space-y-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                          <Mail className="w-4 h-4 mr-2" />
                          Contact Agent
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle>Contact Agent</DialogTitle>
                        </DialogHeader>
                        <ContactAgentForm agent={property.agent} propertyTitle={property.title} />
                      </DialogContent>
                    </Dialog>

                    <Button variant="outline" className="w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      {property.agent.phone}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Info Card */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                    Property Details
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Property ID</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        #{property.id.toString().padStart(5, '0')}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Property Type</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {property.type}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Bedrooms</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {property.bedrooms}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Bathrooms</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {property.bathrooms}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Area</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {property.area} sq ft
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
