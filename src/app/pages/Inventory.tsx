import { useState } from "react";
import { cars } from "../data/cars";
import { Link } from "react-router";

export default function Inventory() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...new Set(cars.map((car) => car.category))];

  const filteredCars =
    selectedCategory === "All"
      ? cars
      : cars.filter((car) => car.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl mb-6 tracking-tight">Our Fleet</h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Browse our collection of luxury vehicles available for static photoshoots and content creation.
            Each vehicle is meticulously maintained and ready to elevate your creative vision.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-white/10 sticky top-20 bg-black/95 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 uppercase text-sm tracking-wider transition-colors ${
                  selectedCategory === category
                    ? "bg-white text-black"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Car Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <div
                key={car.id}
                className="group bg-white/5 overflow-hidden hover:bg-white/10 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden bg-black">
                  <img
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-sm uppercase tracking-wider text-gray-400">
                        {car.brand}
                      </p>
                      <h3 className="text-2xl mt-1">{car.model}</h3>
                    </div>
                    <span
                      className={`text-xs uppercase tracking-wider px-2 py-1 ${
                        car.available
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {car.available ? "Available" : "Booked"}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">{car.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">{car.rate}</p>
                    <Link
                      to="/contact"
                      state={{ selectedCar: `${car.brand} ${car.model}` }}
                      className="text-sm uppercase tracking-wider hover:text-gray-300 transition-colors"
                    >
                      Inquire →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6 tracking-tight">
            Ready to book?
          </h2>
          <p className="text-gray-400 mb-8">
            Contact us to discuss your project and get a custom quote
          </p>
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
