import  { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

const ArtScroller = () => {
  const controls = useAnimation();
  const xRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = [
    { name: "Paintings", path: "/art/paintings", image: "/images/paintings/2018-Shelter.jpg" },
    { name: "Printmaking", path: "/art/printmaking", image: "/images/printmaking/IMG_0233.JPG" },
    { name: "Illustrations", path: "/art/illustrations", image: "/images/illustrations.jpg" },
    { name: "Design", path: "/art/design", image: "/images/design.jpg" },
  ];

  const scrollItems = [...categories, ...categories,...categories, ...categories,...categories, ...categories];

  const startScrolling = () => {
    if (!containerRef.current) return;
    const width = containerRef.current.scrollWidth / 3;

    controls.start({
      x: [xRef.current, xRef.current - width],
      transition: {
        x: { repeat: Infinity, repeatType: "loop", duration: 70 , ease: "linear" },
      },
    });
  };

  const stopScrolling = () => {
    controls.stop();
  };

  return (
    <div className="overflow-hidden w-full">
      <motion.div
      
        ref={containerRef}
        className="flex w-dvw gap-8"
        animate={controls}
          drag="x"
        dragConstraints={{ left: -500, right: 0 }} // adjust based on how far you want it to pull
        dragElastic={0.2} 
        onUpdate={(latest) => {
          xRef.current = latest.x as number;
        }}
        onHoverStart={stopScrolling}
        onHoverEnd={startScrolling}
        onViewportEnter={startScrolling} // starts when in view
      >
        {scrollItems.map((cat, i) => (
          <motion.div
            key={i}
            className="relative min-w-[250px] h-[150px] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
          >
          <Link to={cat.path}>
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition"
            />
        
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white text-xl font-semibold">{cat.name}</span>
            </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ArtScroller;
