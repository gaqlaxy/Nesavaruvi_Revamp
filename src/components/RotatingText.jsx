import { useState, useEffect } from "react";

export default function Marquee({ texts }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 5000); // 5 seconds per message
    return () => clearTimeout(timer);
  }, [index, texts.length]);

  return (
    <div className="fixed top-0 left-0 right-0 z-[999] bg-black">
      <div className="overflow-hidden py-2">
        <div className="whitespace-nowrap flex will-change-transform justify-center">
          <span className="px-4 text-sm font-medium text-white">
            <span className="mx-4">✨ {texts[index]} ✨</span>
          </span>
        </div>
      </div>
    </div>
  );
}
