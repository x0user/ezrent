import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function TenantsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">For Tenants</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Find Your Perfect Home</CardTitle>
            <CardDescription>Browse thousands of listings</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Use our advanced search tools to find the ideal rental property for you.</p>
            <Button>Start Searching</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tenant Resources</CardTitle>
            <CardDescription>Everything you need for a smooth renting experience</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Access helpful guides, FAQs, and tools for tenants.</p>
            <Button>View Resources</Button>
          </CardContent>
        </Card>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Benefits for Tenants</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Wide selection of verified properties</li>
          <li>Secure application process</li>
          <li>Online rent payments</li>
          <li>Maintenance request tracking</li>
          <li>Renter's insurance options</li>
        </ul>
      </div>
    </div>
  );
}