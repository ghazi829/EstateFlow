import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Square, MapPin, Heart, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Property } from '@/types';

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, featured = false }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const typeColors: Record<string, string> = {
    Apartment: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    House: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    Villa: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  };

  return (
    <Card className={`group overflow-hidden bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 ${featured ? 'ring-2 ring-blue-500/20' : ''}`}>
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Type Badge */}
        <Badge 
          className={`absolute top-4 left-4 ${typeColors[property.type]} font-medium`}
        >
          {property.type}
        </Badge>
        
        {/* Featured Badge */}
        {featured && (
          <Badge className="absolute top-4 right-14 bg-amber-500 text-white font-medium">
            Featured
          </Badge>
        )}
        
        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-900 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <Heart className="w-4 h-4 text-gray-600 dark:text-gray-400" />
        </Button>
        
        {/* Price Overlay */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-2xl font-bold">{formatPrice(property.price)}</p>
        </div>
      </div>

      {/* Content */}
      <CardContent className="p-5">
        {/* Title & Price */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-semibold text-lg text-gray-900 dark:text-white line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {property.title}
          </h3>
          <p className="text-blue-600 dark:text-blue-400 font-bold whitespace-nowrap">
            {formatPrice(property.price)}
          </p>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 mb-4">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span className="text-sm line-clamp-1">{property.location}</span>
        </div>

        {/* Features */}
        <div className="flex items-center gap-4 mb-5 text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-1.5">
            <Bed className="w-4 h-4" />
            <span className="text-sm">{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="w-4 h-4" />
            <span className="text-sm">{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Square className="w-4 h-4" />
            <span className="text-sm">{property.area} sqft</span>
          </div>
        </div>

        {/* View Details Button */}
        <Link to={`/property/${property.id}`}>
          <Button 
            variant="outline" 
            className="w-full group/btn border-gray-200 dark:border-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 dark:hover:bg-blue-600 dark:hover:border-blue-600 transition-all"
          >
            View Details
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
