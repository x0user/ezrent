"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface Property {
  id: string;
  title: string;
  description: string;
  type: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  images: string[];
}

export default function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState<Property | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      const response = await fetch(`/api/properties/${id}`);
      if (response.ok) {
        const data = await response.json();
        setProperty(data);
      }
    };
    fetchProperty();
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{property.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Carousel>
            <CarouselContent>
              {property.images.map((image, index) => (
                <CarouselItem key={index}>
                  <img src={image} alt={`Property image ${index + 1}`} className="w-full h-64 object-cover rounded-lg" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Property Details</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2"><strong>Type:</strong> {property.type}</p>
              <p className="mb-2"><strong>Price:</strong> ${property.price}/month</p>
              <p className="mb-2"><strong>Location:</strong> {property.location}</p>
              <p className="mb-2"><strong>Bedrooms:</strong> {property.bedrooms}</p>
              <p className="mb-2"><strong>Bathrooms:</strong> {property.bathrooms}</p>
              <p className="mb-4"><strong>Description:</strong> {property.description}</p>
              <Button className="w-full">Schedule a Viewing</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}