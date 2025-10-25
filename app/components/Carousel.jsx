import { useState } from "react";

export default function Carousel({ items }) {
  const [index, setIndex] = useState(0);

  if (!items || items.length === 0) return <p>No media available.</p>;

  const prev = () => setIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === items.length - 1 ? 0 : i + 1));

  const isVideo = (url) => /\.(mp4|webm|ogg)$/.test(url);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-full max-w-xl h-64 flex items-center justify-center bg-gray-800 rounded-xl overflow-hidden">
        {isVideo(items[index].url) ? (
          <video
            src={items[index].url}
            controls
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={items[index].url}
            alt={items[index].caption}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <p className="text-white">{items[index].caption}</p>
      <div className="flex gap-4">
        <button onClick={prev} className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500">Prev</button>
        <button onClick={next} className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500">Next</button>
      </div>
    </div>
  );
}
