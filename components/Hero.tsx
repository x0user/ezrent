import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 rounded-lg mt-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Find Your Perfect Rental Home</h1>
        <p className="text-xl mb-8">Discover a wide range of properties tailored to your needs.</p>
        <Button size="lg" variant="secondary">Start Your Search</Button>
      </div>
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-contain bg-no-repeat bg-right-bottom"
           style={{backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80')"}}></div>
    </div>
  );
};

export default Hero;