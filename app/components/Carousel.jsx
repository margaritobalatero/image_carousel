// app/components/Carousel.jsx
import { useEffect, useRef } from "react";

export default function Carousel({ images, currentIndex, setCurrentIndex, autoPlayInterval = 5000 }) {
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [images, setCurrentIndex, autoPlayInterval]);

  if (!images || images.length === 0) return <p>No images to display.</p>;

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const handleTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const handleTouchMove = (e) => (touchEndX.current = e.touches[0].clientX);
  const handleTouchEnd = () => {
    const delta = touchStartX.current - touchEndX.current;
    if (delta > 50) next();
    else if (delta < -50) prev();
  };

  return (
    <div
      className="w-full max-w-2xl mx-auto mb-8 relative overflow-hidden rounded-xl"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <img
        src={images[currentIndex].url}
        alt={images[currentIndex].caption || `Image ${currentIndex + 1}`}
        className="w-full h-64 sm:h-80 object-cover rounded-xl transition-transform duration-300"
      />

      {images[currentIndex].caption && (
        <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded">
          {images[currentIndex].caption}
        </p>
      )}

      <button
        onClick={prev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded hover:bg-opacity-75"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded hover:bg-opacity-75"
      >
        ›
      </button>

      <div className="absolute bottom-2 right-2 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
