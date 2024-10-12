"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { usePathname } from 'next/navigation';
import NotificationCenter from '@/components/NotificationCenter';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">RentEase</Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link href="/" className={pathname === '/' ? 'text-primary font-semibold' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/properties" className={pathname === '/properties' ? 'text-primary font-semibold' : ''}>
                Properties
              </Link>
            </li>
            <li>
              <Link href="/landlords" className={pathname === '/landlords' ? 'text-primary font-semibold' : ''}>
                For Landlords
              </Link>
            </li>
            <li>
              <Link href="/tenants" className={pathname === '/tenants' ? 'text-primary font-semibold' : ''}>
                For Tenants
              </Link>
            </li>
            <li>
              <Button variant="outline">Sign In</Button>
            </li>
            <li>
              <NotificationCenter />
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;