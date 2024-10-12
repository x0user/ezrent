"use client"

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';

const PropertyFilters = () => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');

  const handleSearch = () => {
    // Implement search functionality
    console.log('Filtering:', { location, propertyType, priceRange, bedrooms, bathrooms });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      
      <div>
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          placeholder="Enter city or zip code"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="propertyType">Property Type</Label>
        <Select value={propertyType} onValueChange={setPropertyType}>
          <SelectTrigger id="propertyType">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="house">House</SelectItem>
            <SelectItem value="condo">Condo</SelectItem>
            <SelectItem value="townhouse">Townhouse</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Price Range</Label>
        <Slider
          min={0}
          max={10000}
          step={100}
          value={priceRange}
          onValueChange={setPriceRange}
        />
        <div className="flex justify-between mt-2">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      <div>
        <Label htmlFor="bedrooms">Bedrooms</Label>
        <Select value={bedrooms} onValueChange={setBedrooms}>
          <SelectTrigger id="bedrooms">
            <SelectValue placeholder="Select bedrooms" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1+</SelectItem>
            <SelectItem value="2">2+</SelectItem>
            <SelectItem value="3">3+</SelectItem>
            <SelectItem value="4">4+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="bathrooms">Bathrooms</Label>
        <Select value={bathrooms} onValueChange={setBathrooms}>
          <SelectTrigger id="bathrooms">
            <SelectValue placeholder="Select bathrooms" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1+</SelectItem>
            <SelectItem value="2">2+</SelectItem>
            <SelectItem value="3">3+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button className="w-full" onClick={handleSearch}>Apply Filters</Button>
    </div>
  );
};

export default PropertyFilters;