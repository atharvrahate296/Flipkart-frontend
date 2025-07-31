import React, { useState } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "Mattress",
    price: "From ₹2,999",
    subtitle: "Wakefit, Sleepwell & more",
    bg: "bg-gradient-to-r from-blue-500 to-blue-400",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    title: "Sofas",
    price: "From ₹7,999",
    subtitle: "Godrej, Urban Ladder & more",
    bg: "bg-gradient-to-r from-blue-500 to-blue-400",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80",
    title: "Dining Sets",
    price: "From ₹4,999",
    subtitle: "HomeTown, Nilkamal & more",
    bg: "bg-gradient-to-r from-blue-500 to-blue-400",
  },
];

function Carousel() {
  const [current, setCurrent] = useState(0);
  const prevSlide = () =>
    setCurrent((current - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((current + 1) % slides.length);

  return (
    <div className="relative w-full h-96 md:h-[30rem] rounded-xl overflow-hidden mb-10 shadow-lg">
      {/* Slides */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-500 ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          } ${slide.bg}`}
        >
          <div className="flex items-center justify-center h-full px-4 md:px-16">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-8 bg-white bg-opacity-10 rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-72 h-52 md:w-96 md:h-64 object-cover rounded-2xl shadow-2xl border-4 border-white"
              />
              <div className="text-white text-center md:text-left mt-0 mb-5 md:mt-0">
                <div className="text-3xl mb-1 font-bold mb-2">
                  {slide.title}
                </div>
                <div className="text-xl md:text-2xl font-semibold mb-1">
                  {slide.price}
                </div>
                <div className="text-base md:text-lg opacity-90">
                  {slide.subtitle}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-1 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 text-gray-800 rounded-1 px-3 py-5 focus:outline-none z-20"
        aria-label="Previous"
      >
        &#60;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-1 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 text-gray-800 rounded-r px-3 py-5 focus:outline-none z-20"
        aria-label="Next"
      >
        &#62;
      </button>
      {/* Centered Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-5 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-6 h-2 rounded-full ${
              idx === current
                ? "bg-white ring-2 ring-blue-800"
                : "bg-gray-300 bg-opacity-60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
