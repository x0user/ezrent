"use client"

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const SearchSection = () => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleSearch = () => {
    // Implement search functionality
    console.log('Searching:', { location, propertyType, priceRange });
  };

  return (
    <div className="bg-card shadow-md rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-semibold mb-4">Find Your Ideal Rental</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Select value={propertyType} onValueChange={setPropertyType}>
          <SelectTrigger>
            <SelectValue placeholder="Property Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="house">House</SelectItem>
            <SelectItem value="condo">Condo</SelectItem>
            <SelectItem value="townhouse">Townhouse</SelectItem>
          </SelectContent>
        </Select>
        <Select value={priceRange} onValueChange={setPriceRange}>
          <SelectTrigger>
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0-1000">$0 - $1,000</SelectItem>
            <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
            <SelectItem value="2000-3000">$2,000 - $3,000</SelectItem>
            <SelectItem value="3000+">$3,000+</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={handleSearch}>Search</Button>
      </div>
    </div>
  );
};

export default SearchSection;