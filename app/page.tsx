import Hero from '@/components/Hero';
import FeaturedProperties from '@/components/FeaturedProperties';
import SearchSection from '@/components/SearchSection';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <SearchSection />
      <FeaturedProperties />
    </div>
  );
}