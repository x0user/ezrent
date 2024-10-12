import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function LandlordsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">For Landlords</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>List Your Property</CardTitle>
            <CardDescription>Reach thousands of potential tenants</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Easily list your property and manage inquiries through our platform.</p>
            <Button>Get Started</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Property Management Tools</CardTitle>
            <CardDescription>Streamline your rental business</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Access powerful tools to manage your properties, tenants, and finances.</p>
            <Button>Explore Tools</Button>
          </CardContent>
        </Card>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Why Choose RentEase?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Reach a wide audience of potential tenants</li>
          <li>Efficient property management tools</li>
          <li>Secure payment processing</li>
          <li>24/7 customer support</li>
          <li>Legal document templates and resources</li>
        </ul>
      </div>
    </div>
  );
}