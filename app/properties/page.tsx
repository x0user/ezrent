import PropertyList from '@/components/PropertyList';
import PropertyFilters from '@/components/PropertyFilters';
import MapView from '@/components/MapView';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PropertiesPage() {
  // Mock data for demonstration
  const properties = [
    { id: '1', title: 'Cozy Apartment', lat: 40.7128, lng: -74.0060, price: 2000 },
    { id: '2', title: 'Spacious House', lat: 40.7282, lng: -73.7949, price: 3500 },
    // Add more properties as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Available Properties</h1>
      <Tabs defaultValue="list" className="mb-6">
        <TabsList>
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="map">Map View</TabsTrigger>
        </TabsList>
        <TabsContent value="list">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <PropertyFilters />
            </div>
            <div className="md:col-span-3">
              <PropertyList />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="map">
          <MapView properties={properties} />
        </TabsContent>
      </Tabs>
    </div>
  );
}