import { useState, useEffect } from "react";
import { cars, Car } from "../data/cars";
import { Link } from "react-router";
import rarrduoVideo from "../../images/rarriduo.mp4";
import CarDetailModal from "../components/CarDetailModal";

const heroSlides = [
  { type: "video" as const, src: rarrduoVideo, label: "SHOWTIMEXOTICS" },
  { type: "car" as const, carId: "ferrari-f8-tributo-purple", label: "Ferrari F8 Tributo", objectPosition: "center 60%" },
  { type: "car" as const, carId: "lamborghini-aventador-s-black", label: "Lamborghini Aventador S", objectPosition: "center 60%" },
  { type: "car" as const, carId: "lamborghini-urus-widebody", label: "Lamborghini Urus Widebody", objectPosition: "center 50%" },
];

export default function Inventory() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Bumped on every manual selection so the timer resets even when the active slide is re-selected
  const [slideSelection, setSlideSelection] = useState(0);
  const [sort, setSort] = useState<"relevant" | "az" | "za">("relevant");
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  // Restart the countdown whenever the slide changes, manually or automatically
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentSlide, slideSelection]);

  const selectSlide = (i: number) => {
    setCurrentSlide(i);
    setSlideSelection((n) => n + 1);
  };

  const sortedCars = [...cars].sort((a, b) => {
    if (sort === "relevant") {
      const pinA = a.priority ?? Infinity; // unpinned cars sink below all pinned ones
      const pinB = b.priority ?? Infinity;
      if (pinA !== pinB) return pinA - pinB;
    }
    const byName = `${a.brand} ${a.model}`.localeCompare(`${b.brand} ${b.model}`);
    return sort === "za" ? -byName : byName;
  });


  return (
    <div className="pt-20">
      {/* Hero Slideshow */}
      <section className="relative h-[70vh] w-full overflow-hidden bg-black">
        {heroSlides.map((slide, i) => {
          const isActive = i === currentSlide;
          if (slide.type === "video") {
            return (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-1000 ${isActive ? "opacity-100" : "opacity-0"}`}
              >
                <video autoPlay muted loop playsInline className="w-full h-full object-cover" src={slide.src} />
                <div className="absolute inset-0 bg-black/40" />
              </div>
            );
          }
          const car = cars.find((c) => c.id === slide.carId);
          return (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ${isActive ? "opacity-100" : "opacity-0"}`}
            >
              {car?.image ? (
                <img src={car.image} alt={slide.label} className="w-full h-full object-cover" style={{ objectPosition: slide.objectPosition ?? "center 50%" }} />
              ) : (
                <div className="w-full h-full bg-zinc-900" />
              )}
              <div className="absolute inset-0 bg-black/40" />
            </div>
          );
        })}
        <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-4 z-10">
          <p className="text-white text-lg tracking-widest uppercase">{heroSlides[currentSlide].label}</p>
          <div className="flex gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => selectSlide(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === currentSlide ? "bg-white" : "bg-white/30 hover:bg-white/60"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Header + Sort Toggle */}
      <section className="py-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-5xl md:text-6xl tracking-tight">Our Fleet</h1>
            <p className="text-gray-400 mt-4 max-w-2xl">
              Browse our collection of luxury vehicles available for static photoshoots and content creation. Click any car to see details.
            </p>
          </div>
          <button
            onClick={() => setSort((prev) => (prev === "relevant" ? "az" : prev === "az" ? "za" : "relevant"))}
            className="px-6 py-2 bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white text-sm uppercase tracking-wider transition-colors"
          >
            Sort: {sort === "relevant" ? "Most Relevant" : sort === "az" ? "A → Z" : "Z → A"}
          </button>
        </div>
      </section>

      {/* Car Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedCars.map((car) => (
              <button
                key={car.id}
                onClick={() => setSelectedCar(car)}
                className="group bg-white/5 overflow-hidden hover:bg-white/10 transition-all duration-300 text-left"
              >
                <div className="aspect-[4/3] overflow-hidden bg-zinc-900">
                  {car.image ? (
                    <img
                      src={car.image}
                      alt={`${car.brand} ${car.model}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/10 text-6xl font-bold">
                      {car.brand[0]}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-gray-500">{car.brand}</p>
                  <h3 className="text-2xl mt-1">{car.model}</h3>
                  {car.Trim && car.Trim !== "N/A" && (
                    <p className="text-sm text-gray-500 mt-0.5">{car.Trim}</p>
                  )}
                  <div className="flex items-center justify-between mt-3">
                    {car.ExteriorColor && car.ExteriorColor !== "N/A" && (
                      <p className="text-xs text-gray-600">{car.ExteriorColor}</p>
                    )}
                    {car.images.length > 1 && (
                      <p className="text-xs text-gray-600 ml-auto">{car.images.length} photos</p>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Car Detail Modal */}
      {selectedCar && (
        <CarDetailModal key={selectedCar.id} car={selectedCar} onClose={() => setSelectedCar(null)} />
      )}

      {/* CTA */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6 tracking-tight">Ready to book?</h2>
          <p className="text-gray-400 mb-8">Contact us to discuss your project and get a custom quote</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-white text-black px-8 py-4 uppercase text-sm tracking-wider hover:bg-gray-200 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
