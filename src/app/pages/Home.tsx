import { Link } from "react-router";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react";
import { cars, Car } from "../data/cars";
import { useState, useEffect } from "react";
import LoadingScreen from "../components/LoadingScreen";
import heroVideo from "../../images/SnapInsta.to_AQNIH7zPEQEe4d1DkpsmhBczR1lcWHkIW9gGBam_tauLEV-Z2b4KhxsWQgFvEvMF_1BfQd6mpXdjh76IhYXwF0uluWbSB9soWCQEd1U.mp4";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);

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

  const openModal = (car: Car) => {
    setSelectedCar(car);
    setModalImageIndex(0);
  };

  const closeModal = () => setSelectedCar(null);

  const prevImage = () =>
    setModalImageIndex((i) => (i - 1 + (selectedCar?.images.length ?? 1)) % (selectedCar?.images.length ?? 1));

  const nextImage = () =>
    setModalImageIndex((i) => (i + 1) % (selectedCar?.images.length ?? 1));

  if (loading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  const specs = selectedCar
    ? [
        { label: "Make", value: selectedCar.brand },
        { label: "Model", value: selectedCar.model },
        ...(selectedCar.Trim && selectedCar.Trim !== "N/A" ? [{ label: "Trim", value: selectedCar.Trim }] : []),
        ...(selectedCar.year && selectedCar.year !== "N/A" ? [{ label: "Year", value: selectedCar.year }] : []),
        ...(selectedCar.BodyStyle && selectedCar.BodyStyle !== "N/A" ? [{ label: "Body", value: selectedCar.BodyStyle }] : []),
        ...(selectedCar.ExteriorColor && selectedCar.ExteriorColor !== "N/A" ? [{ label: "Exterior", value: selectedCar.ExteriorColor }] : []),
        ...(selectedCar.InteriorColor && selectedCar.InteriorColor !== "N/A" ? [{ label: "Interior", value: selectedCar.InteriorColor }] : []),
        ...(selectedCar.StandoutFeatures && selectedCar.StandoutFeatures !== "N/A" ? [{ label: "Features", value: selectedCar.StandoutFeatures }] : []),
      ]
    : [];

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
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
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
          <h2 className="text-3xl md:text-4xl mb-12 tracking-tight">Inventory</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {["ferrari-f8-tributo-purple", "lamborghini-huracan-evo", "lamborghini-urus-performante"]
              .map((id) => cars.find((c) => c.id === id)!)
              .map((car) => (
              <button
                key={car.id}
                onClick={() => openModal(car)}
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
            className="text-2xl sm:text-3xl md:text-4xl hover:text-gray-400 transition-colors"
          >
            @showtimexotics
          </a>
        </div>
      </section>

      {/* Car Detail Modal */}
      {selectedCar && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div
            className="bg-zinc-950 border border-white/10 max-w-2xl w-full rounded-sm overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image carousel */}
            <div className="relative aspect-[16/10] bg-zinc-900 overflow-hidden">
              <img
                key={modalImageIndex}
                src={selectedCar.images[modalImageIndex]}
                alt={`${selectedCar.brand} ${selectedCar.model}`}
                className="w-full h-full object-cover"
              />

              {selectedCar.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-1.5 rounded-full transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-1.5 rounded-full transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>

                  <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                    {selectedCar.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setModalImageIndex(i)}
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${i === modalImageIndex ? "bg-white" : "bg-white/35 hover:bg-white/60"}`}
                      />
                    ))}
                  </div>
                </>
              )}

              <button
                onClick={closeModal}
                className="absolute top-3 right-3 bg-black/50 hover:bg-black/80 text-white p-1.5 rounded-full transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Info */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">{selectedCar.brand}</p>
                  <h2 className="text-3xl tracking-tight">
                    {selectedCar.model}
                    {selectedCar.Trim && selectedCar.Trim !== "N/A" && (
                      <span className="text-gray-400 ml-2 text-2xl">{selectedCar.Trim}</span>
                    )}
                  </h2>
                </div>
                {selectedCar.images.length > 1 && (
                  <span className="text-xs text-gray-600 mt-1">{modalImageIndex + 1} / {selectedCar.images.length}</span>
                )}
              </div>

              {specs.filter(s => !["Make","Model","Trim"].includes(s.label)).length > 0 && (
                <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm mb-6 border-t border-white/10 pt-5">
                  {specs.filter(s => !["Make","Model","Trim"].includes(s.label)).map((s) => (
                    <div key={s.label} className="flex flex-col">
                      <span className="text-[11px] uppercase tracking-wider text-gray-600 mb-0.5">{s.label}</span>
                      <span className="text-gray-200">{s.value}</span>
                    </div>
                  ))}
                </div>
              )}

              <Link
                to="/contact"
                state={{ selectedCar: `${selectedCar.brand} ${selectedCar.model}` }}
                className="block w-full bg-white text-black text-center py-3 text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors font-medium"
              >
                Contact Us to Book
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
