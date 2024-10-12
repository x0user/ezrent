"use client"

import { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 40.7128,
  lng: -74.0060
};

interface Property {
  id: string;
  title: string;
  lat: number;
  lng: number;
  price: number;
}

interface MapViewProps {
  properties: Property[];
}

const MapView: React.FC<MapViewProps> = ({ properties }) => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {properties.map((property) => (
          <Marker
            key={property.id}
            position={{ lat: property.lat, lng: property.lng }}
            onClick={() => setSelectedProperty(property)}
          />
        ))}

        {selectedProperty && (
          <InfoWindow
            position={{ lat: selectedProperty.lat, lng: selectedProperty.lng }}
            onCloseClick={() => setSelectedProperty(null)}
          >
            <div>
              <h3>{selectedProperty.title}</h3>
              <p>${selectedProperty.price}/month</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapView;