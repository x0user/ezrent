"use client"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface MaintenanceRequest {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  createdAt: string;
}

export default function MaintenanceRequests() {
  const [requests, setRequests] = useState<MaintenanceRequest[]>([]);
  const [newRequest, setNewRequest] = useState({ title: '', description: '' });

  useEffect(() => {
    // Fetch maintenance requests from API
    const fetchRequests = async () => {
      // Replace with actual API call
      const response = await fetch('/api/maintenance-requests');
      const data = await response.json();
      setRequests(data);
    };

    fetchRequests();
  }, []);

  const handleSubmitRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    // Submit new request to API
    // Replace with actual API call
    const response = await fetch('/api/maintenance-requests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRequest),
    });

    if (response.ok) {
      const createdRequest = await response.json();
      setRequests([...requests, createdRequest]);
      setNewRequest({ title: '', description: '' });
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Maintenance Requests</h2>
      <form onSubmit={handleSubmitRequest} className="mb-6">
        <Input
          className="mb-2"
          placeholder="Request Title"
          value={newRequest.title}
          onChange={(e) => setNewRequest({ ...newRequest, title: e.target.value })}
          required
        />
        <Textarea
          className="mb-2"
          placeholder="Request Description"
          value={newRequest.description}
          onChange={(e) => setNewRequest({ ...newRequest, description: e.target.value })}
          required
        />
        <Button type="submit">Submit Request</Button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {requests.map((request) => (
          <Card key={request.id}>
            <CardHeader>
              <CardTitle>{request.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{request.description}</p>
              <p className="mt-2"><strong>Status:</strong> {request.status}</p>
              <p><strong>Created:</strong> {new Date(request.createdAt).toLocaleDateString()}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}