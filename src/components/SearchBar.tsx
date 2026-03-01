import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const SearchBar: React.FC = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    
    if (location) params.append('location', location);
    if (propertyType) params.append('type', propertyType);
    if (priceRange) {
      const [min, max] = priceRange.split('-');
      if (min) params.append('minPrice', min);
      if (max) params.append('maxPrice', max);
    }
    
    navigate(`/listings?${params.toString()}`);
  };

  const priceRanges = [
    { value: '0-500000', label: 'Under $500,000' },
    { value: '500000-1000000', label: '$500,000 - $1,000,000' },
    { value: '1000000-2000000', label: '$1,000,000 - $2,000,000' },
    { value: '2000000-5000000', label: '$2,000,000 - $5,000,000' },
    { value: '5000000-', label: '$5,000,000+' },
  ];

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 lg:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Location Input */}
          <div className="relative">
            <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wider">
              Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Enter city or area..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-10 h-12 bg-gray-50 dark:bg-gray-700 border-0 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Property Type Select */}
          <div>
            <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wider">
              Property Type
            </label>
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger className="h-12 bg-gray-50 dark:bg-gray-700 border-0 focus:ring-2 focus:ring-blue-500">
                <div className="flex items-center gap-2">
                  <Home className="w-5 h-5 text-gray-400" />
                  <SelectValue placeholder="All Types" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Apartment">Apartment</SelectItem>
                <SelectItem value="House">House</SelectItem>
                <SelectItem value="Villa">Villa</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Price Range Select */}
          <div>
            <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wider">
              Price Range
            </label>
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="h-12 bg-gray-50 dark:bg-gray-700 border-0 focus:ring-2 focus:ring-blue-500">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-gray-400" />
                  <SelectValue placeholder="Any Price" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Price</SelectItem>
                {priceRanges.map((range) => (
                  <SelectItem key={range.value} value={range.value}>
                    {range.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Search className="w-5 h-5 mr-2" />
              Search Properties
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
