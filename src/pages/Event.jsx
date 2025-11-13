import { useParams } from "react-router-dom";

export const Event = () => {
  const { section } = useParams();

  const backgroundLayers = [
    { src: "/2.png.webp", alt: "Stars", zIndex: 1 },
    { src: "/1.png.webp", alt: "Dark Cloud", zIndex: 2 },
    { src: "/0.png.webp", alt: "White cloud", zIndex: 3 },
  ];

  return (
    <section
      id="event"
      className="relative w-screen h-screen bg-blue-950  bg-linear-to-b from-[#162145] via-[#122D53_35%] to-[#016797] overflow-hidden cursor-pointer"
    >

      {backgroundLayers.map((layer) => (
        <img
          key={layer.src}
          src={layer.src}
          alt={layer.alt}
          className={`absolute inset-0 w-full h-full object-cover`}
          style={{ zIndex: layer.zIndex }}
        />
      ))}

    </section>
  );
}