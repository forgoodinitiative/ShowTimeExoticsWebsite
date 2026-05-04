import { Link } from "react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { cars } from "../data/cars";
import { useState, useEffect } from "react";
import LoadingScreen from "../components/LoadingScreen";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if user has already seen loading screen in this session
    const hasSeenLoading = sessionStorage.getItem("hasSeenLoading");
    if (hasSeenLoading) {
      setLoading(false);
      setShowContent(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    sessionStorage.setItem("hasSeenLoading", "true");
    setLoading(false);
    setTimeout(() => setShowContent(true), 100);
  };

  if (loading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className={`transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${cars[0].image})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight">
            Rent the Dream
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Luxury, for your shoots. | Vancouver, CA
          </p>
          <Link
            to="/inventory"
            className="inline-flex items-center space-x-2 bg-white text-black px-8 py-4 uppercase text-sm tracking-wider hover:bg-gray-200 transition-colors"
          >
            <span>View Fleet</span>
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white/60" />
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12 tracking-tight">
            Our Partners
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
            {["Ferrari", "Lamborghini", "Bugatti", "Bentley", "Porsche", "Rolls-Royce"].map((brand) => (
              <div key={brand} className="text-center">
                <p className="text-lg uppercase tracking-widest">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Fleet Preview */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-12 tracking-tight">The Fleet</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {cars.slice(0, 3).map((car) => (
              <div
                key={car.id}
                className="group relative aspect-[4/3] overflow-hidden bg-white/5"
              >
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm uppercase tracking-wider text-gray-300">
                    {car.brand}
                  </p>
                  <h3 className="text-xl">{car.model}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/inventory"
              className="inline-flex items-center space-x-2 text-white hover:text-gray-300 transition-colors uppercase text-sm tracking-wider"
            >
              <span>See More</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl mb-6 tracking-tight">
            Made your pick?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Get in touch to book your dream car for your next shoot
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-white text-black px-8 py-4 uppercase text-sm tracking-wider hover:bg-gray-200 transition-colors"
            >
              <span>Book Now</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center space-x-2 border border-white text-white px-8 py-4 uppercase text-sm tracking-wider hover:bg-white hover:text-black transition-colors"
            >
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-2">Find us on Instagram</p>
          <a
            href="https://www.instagram.com/showtimexotics"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl md:text-4xl hover:text-gray-300 transition-colors"
          >
            @ShowtimeExotics
          </a>
        </div>
      </section>
    </div>
  );
}
