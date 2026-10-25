import { useRef, useState } from "react";
import { Link } from "react-router";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Car } from "../data/cars";
import { useScrollLock } from "../LenisProvider";

// Horizontal finger travel (px) before a touch on the photo counts as a swipe
const SWIPE_THRESHOLD = 50;

interface CarDetailModalProps {
  car: Car;
  onClose: () => void;
}

export default function CarDetailModal({ car, onClose }: CarDetailModalProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const imageCount = car.images.length;

  useScrollLock();

  const prevImage = () => setImageIndex((i) => (i - 1 + imageCount) % imageCount);
  const nextImage = () => setImageIndex((i) => (i + 1) % imageCount);

  const handleTouchStart = (e: React.TouchEvent) => {
    // Two-finger pinch-zoom shouldn't count as a swipe
    if (e.touches.length > 1) {
      touchStart.current = null;
      return;
    }
    const { clientX, clientY } = e.touches[0];
    touchStart.current = { x: clientX, y: clientY };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start || imageCount < 2) return;
    const dx = e.changedTouches[0].clientX - start.x;
    const dy = e.changedTouches[0].clientY - start.y;
    // Ignore taps and mostly-vertical drags so the popup can still scroll
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return;
    // Swiping right reveals the previous photo, like a phone's photo gallery
    if (dx > 0) prevImage();
    else nextImage();
  };

  // "N/A" values in the data are hidden
  const specs = [
    { label: "Year", value: car.year },
    { label: "Body", value: car.BodyStyle },
    { label: "Exterior", value: car.ExteriorColor },
    { label: "Interior", value: car.InteriorColor },
  ].filter((s) => s.value && s.value !== "N/A");

  // No bounce on touch screens; mouse/trackpad users keep the native vertical bounce
  return (
    <div
      className="fixed inset-0 z-50 flex overflow-y-auto overflow-x-hidden overscroll-none pointer-fine:overscroll-y-contain touch-pan-y touch-pinch-zoom bg-black/85 backdrop-blur-sm p-4"
      onClick={onClose}
      data-lenis-prevent
    >
      <div
        className="m-auto bg-zinc-950 border border-white/10 max-w-2xl w-full rounded-sm overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image carousel */}
        <div
          className="relative aspect-[16/10] bg-zinc-900 overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img
            key={imageIndex}
            src={car.images[imageIndex]}
            alt={`${car.brand} ${car.model}`}
            className="w-full h-full object-cover"
          />

          {/* Prev / Next arrows — only if multiple images */}
          {imageCount > 1 && (
            <>
              <button
                onClick={prevImage}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-1.5 rounded-full transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-1.5 rounded-full transition-colors"
              >
                <ChevronRight size={20} />
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                {car.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImageIndex(i)}
                    aria-label={`Photo ${i + 1}`}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${i === imageIndex ? "bg-white" : "bg-white/35 hover:bg-white/60"}`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-3 right-3 bg-black/50 hover:bg-black/80 text-white p-1.5 rounded-full transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Info */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-5">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">{car.brand}</p>
              <h2 className="text-3xl tracking-tight">
                {car.model}
                {car.Trim && car.Trim !== "N/A" && (
                  <span className="text-gray-400 ml-2 text-2xl">{car.Trim}</span>
                )}
              </h2>
            </div>
            {imageCount > 1 && (
              <span className="text-xs text-gray-600 mt-1">{imageIndex + 1} / {imageCount}</span>
            )}
          </div>

          {/* Specs */}
          {specs.length > 0 && (
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm mb-6 border-t border-white/10 pt-5">
              {specs.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-wider text-gray-600 mb-0.5">{s.label}</span>
                  <span className="text-gray-200">{s.value}</span>
                </div>
              ))}
            </div>
          )}

          <Link
            to="/contact"
            state={{ selectedCar: `${car.brand} ${car.model}` }}
            className="block w-full bg-white text-black text-center py-3 text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors font-medium"
          >
            Contact Us to Book
          </Link>
        </div>
      </div>
    </div>
  );
}
