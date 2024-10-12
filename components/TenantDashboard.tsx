"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MessageCenter from "@/components/MessageCenter";
import MaintenanceRequests from "@/components/MaintenanceRequests";
import PaymentHistory from "@/components/PaymentHistory";

interface Rental {
  id: string;
  propertyTitle: string;
  startDate: string;
  endDate: string;
  monthlyRent: number;
}

export default function TenantDashboard() {
  const [rentals, setRentals] = useState<Rental[]>([]);

  useEffect(() => {
    const fetchRentals = async () => {
      const response = await fetch("/api/rentals/tenant");
      if (response.ok) {
        const data = await response.json();
        setRentals(data);
      }
    };
    fetchRentals();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Tenant Dashboard</h2>
      <Tabs defaultValue="rentals">
        <TabsList>
          <TabsTrigger value="rentals">Your Rentals</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
        </TabsList>
        <TabsContent value="rentals">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rentals.map((rental) => (
              <Card key={rental.id}>
                <CardHeader>
                  <CardTitle>{rental.propertyTitle}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p><strong>Start Date:</strong> {new Date(rental.startDate).toLocaleDateString()}</p>
                  <p><strong>End Date:</strong> {new Date(rental.endDate).toLocaleDateString()}</p>
                  <p><strong>Monthly Rent:</strong> ${rental.monthlyRent}</p>
                  <Button asChild className="mt-4">
                    <Link href={`/rentals/${rental.id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Find a New Rental</h3>
            <Button asChild>
              <Link href="/properties">Browse Properties</Link>
            </Button>
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