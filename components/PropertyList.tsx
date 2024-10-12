"use client"

import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const PropertyList = () => {
  const [properties] = useState([
    // ... (same properties as in FeaturedProperties)
    {
      id: 1,
      title: 'Modern Downtown Apartment',
      type: 'Apartment',
      price: 1800,
      location: 'New York, NY',
      bedrooms: 2,
      bathrooms: 1,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 2,
      title: 'Cozy Suburban House',
      type: 'House',
      price: 2500,
      location: 'Los Angeles, CA',
      bedrooms: 3,
      bathrooms: 2,
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 3,
      title: 'Luxury Waterfront Condo',
      type: 'Condo',
      price: 3500,
      location: 'Miami, FL',
      bedrooms: 2,
      bathrooms: 2,
      image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    // Add more properties here...
  ]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {properties.map((property) => (
        <Card key={property.id}>
          <CardHeader>
            <img src={property.image} alt={property.title} className="w-full h-48 object-cover rounded-t-lg" />
          </CardHeader>
          <CardContent>
            <CardTitle>{property.title}</CardTitle>
            <div className="flex justify-between items-center mt-2">
              <Badge>{property.type}</Badge>
              <span className="font-semibold">${property.price}/month</span>
            </div>
            <p className="text-sm mt-2">{property.location}</p>
            <div className="flex justify-between mt-2 text-sm">
              <span>{property.bedrooms} Bedrooms</span>
              <span>{property.bathrooms} Bathrooms</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">View Details</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default PropertyList;