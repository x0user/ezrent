import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-secondary mt-8">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">RentEase</h3>
            <p className="text-sm">Find your perfect rental property or manage your real estate portfolio with ease.</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/properties">Properties</Link></li>
              <li><Link href="/landlords">For Landlords</Link></li>
              <li><Link href="/tenants">For Tenants</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Contact Us</h4>
            <p className="text-sm">Email: info@rentease.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} RentEase. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;