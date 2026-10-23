import { Link } from "react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { cars, Car } from "../data/cars";
import { useState, useEffect } from "react";
import LoadingScreen from "../components/LoadingScreen";
import CarDetailModal from "../components/CarDetailModal";
import heroVideo from "../../images/SnapInsta.to_AQNIH7zPEQEe4d1DkpsmhBczR1lcWHkIW9gGBam_tauLEV-Z2b4KhxsWQgFvEvMF_1BfQd6mpXdjh76IhYXwF0uluWbSB9soWCQEd1U.mp4";
import { useLenis } from "../LenisProvider";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const lenis = useLenis();

  useEffect(() => {
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
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            src={heroVideo}
          />
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

        <button
          onClick={() => lenis?.scrollTo("#inventory")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer bg-transparent border-none p-0"
        >
          <ChevronDown size={32} className="text-white/60" />
        </button>
      </section>

      {/* Our Fleet Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12 tracking-tight">
            Our Fleet
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-7 items-center">
            {["Ferrari", "Lamborghini","Rolls-Royce", "Cadillac", "Mercedes-Benz", "Acura"].map((brand) => (
              <div key={brand} className="text-center opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer">
                <p className="text-lg whitespace-nowrap uppercase tracking-widest hover:font-bold hover:text-white">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Fleet Preview */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="inventory" className="text-3xl md:text-4xl mb-12 tracking-tight">Inventory</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {["ferrari-f8-tributo-purple", "lamborghini-huracan-evo", "lamborghini-urus-performante"]
              .map((id) => cars.find((c) => c.id === id)!)
              .map((car) => (
              <button
                key={car.id}
                onClick={() => setSelectedCar(car)}
                className="group relative aspect-[4/3] overflow-hidden bg-white/5 text-left"
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
              </button>
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
              className="inline-flex items-center justify-center space-x-2 bg-white text-black px-8 py-4 uppercase text-sm tracking-wider hover:bg-gray-300 transition-colors"
            >
              <span>Book Now</span>
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
            className="text-3xl md:text-4xl hover:text-gray-400 transition-colors"
          >
            @showtimexotics
          </a>
        </div>
      </section>

      {/* Car Detail Modal */}
      {selectedCar && (
        <CarDetailModal key={selectedCar.id} car={selectedCar} onClose={() => setSelectedCar(null)} />
      )}
    </div>
  );
}
