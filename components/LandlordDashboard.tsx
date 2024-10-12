"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MessageCenter from "@/components/MessageCenter";
import MaintenanceRequests from "@/components/MaintenanceRequests";
import PaymentHistory from "@/components/PaymentHistory";

interface Property {
  id: string;
  title: string;
  type: string;
  price: number;
  location: string;
}

export default function LandlordDashboard() {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const response = await fetch("/api/properties/landlord");
      if (response.ok) {
        const data = await response.json();
        setProperties(data);
      }
    };
    fetchProperties();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Landlord Dashboard</h2>
        <Button asChild>
          <Link href="/properties/new">Add New Property</Link>
        </Button>
      </div>
      <Tabs defaultValue="properties">
        <TabsList>
          <TabsTrigger value="properties">Properties</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
        </TabsList>
        <TabsContent value="properties">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <Card key={property.id}>
                <CardHeader>
                  <CardTitle>{property.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p><strong>Type:</strong> {property.type}</p>
                  <p><strong>Price:</strong> ${property.price}/month</p>
                  <p><strong>Location:</strong> {property.location}</p>
                  <Button asChild className="mt-4">
                    <Link href={`/properties/${property.id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="messages">
          <MessageCenter />
        </TabsContent>
        <TabsContent value="maintenance">
          <MaintenanceRequests />
        </TabsContent>
        <TabsContent value="payments">
          <PaymentHistory />
        </TabsContent>
      </Tabs>
    </div>
  );
}