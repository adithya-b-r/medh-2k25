import { useRef, useState } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(useGSAP);

export const Events = () => {
  const backgroundLayers = [
    { src: "/2.png.webp", alt: "Stars", zIndex: 1 },
    { src: "/1.png.webp", alt: "Dark Cloud", zIndex: 2 },
    { src: "/0.png.webp", alt: "White cloud", zIndex: 3 },
  ];

  const images = [
    { src: "planet-blue.webp", alt: "Planet Blue", zIndex: 1 },
    { src: "planet-green.webp", alt: "Planet Green", zIndex: 1 },
    { src: "planet-yellow.webp", alt: "Planet Yellow", zIndex: 1 },
    { src: "indica-product.webp", alt: "Event 1", zIndex: 1 },
  ]

  const events = [
    { name: "event1" },
    { name: "event2" },
    { name: "event3" },
    { name: "event4" },
    { name: "event5" },
    { name: "event6" },
    { name: "event7" },
  ]

  const eventRef = useRef(null);
  const textRef = useRef(null);

  const [startIndex, setStartIndex] = useState(0);
  const eventsPerPage = 3;

  const handleScrollRight = () => {
    setStartIndex(prev => Math.min(prev + 1, events.length - eventsPerPage));
  };

  const handleScrollLeft = () => {
    setStartIndex(prev => Math.max(prev - 1, 0));
  };

  const visibleEvents = events.slice(startIndex, startIndex + eventsPerPage);

  useGSAP(() => {
    gsap.to(eventRef.current, {
      y: -20,
      x: -20,
      duration: 3,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
      repeatDelay: 0
    });

    gsap.to(textRef.current, {
      x: "100vw",
      duration: 20,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: (x) => {
          const xNum = parseFloat(x);
          return `${(xNum % 100) - 100}vw`;
        }
      }
    });
  });

  return (
    <section
      id="events"
      className="relative w-screen h-screen bg-blue-900 [background:linear-gradient(180deg,#162145_0%,#122D53_35%,#0B4772_55%,#016797_100%)] overflow-hidden"
    >
      <div className="absolute inset-0 z-0" />

      {backgroundLayers.map((layer) => (
        <img
          key={layer.src}
          src={layer.src}
          alt={layer.alt}
          className={`absolute inset-0 w-full h-full object-cover`}
          style={{ zIndex: layer.zIndex }}
        />
      ))}

      <div className="absolute top-50 z-10 w-full overflow-hidden">
        <h1
          ref={textRef}
          className="uppercase text-[220px] font-bold whitespace-nowrap [-webkit-text-stroke:1px_lightblue] [-webkit-text-fill-color:transparent] [color:transparent] filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
        >
          Technical Events Technical Events Technical Events
        </h1>
      </div>

      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <img className="absolute -bottom-220 transition duration-[10s] ease-in-out" src={images[0].src} alt="" style={{
          animation: 'spin-reverse 180s linear infinite'
        }} />
      </div>

      <div ref={eventRef} className="relative z-30 w-full h-full flex items-center justify-center">
        <img className="absolute bottom-200 h-[60%]" src={images[3].src} alt="" />
      </div>


      <div style={{ bottom: "20px" }} className="left-[50%] transform w-auto max-w-[560px] m-auto nav-holder">
        <div className="clipped-shape relative w-[90%] h-20">
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="w-full font-rust overflow-hidden h-full flex justify-around items-center text-white bg-gray-600/60 font-bold nav-inner-fill">
            {/* Left Scroll Button */}
            <button
              onClick={handleScrollLeft}
              disabled={startIndex === 0}
              className={`p-2 rounded-full text-white transition ${startIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/30'}`}
            >
              <ChevronLeft size={24} />
            </button>

            {/* Event Buttons Container */}
            <div className="w-[90%] font-rust overflow-hidden h-full flex justify-around items-center text-white bg-gray-600/60 font-bold nav-inner-fill mx-2">
              {visibleEvents.map((event) => (
                <button key={event.name} className="px-4 py-2 cursor-pointer transition hover:scale-105">
                  {event.name}
                </button>
              ))}
            </div>

            {/* Right Scroll Button */}
            <button
              onClick={handleScrollRight}
              disabled={startIndex >= events.length - eventsPerPage}
              className={`p-2 rounded-full text-white transition ${startIndex >= events.length - eventsPerPage ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/30'}`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};