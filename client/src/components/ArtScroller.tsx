import  { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import ArtCategoryCard from "./ArtCategory";
import { ArtCategories } from "../data/artCategories";

 
const ArtScroller = () => {
  const controls = useAnimation();
  const xRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollItems = [...ArtCategories, ...ArtCategories,...ArtCategories, ...ArtCategories,...ArtCategories, ...ArtCategories];

  const startScrolling = () => {
    if (!containerRef.current) return;

    const width = containerRef.current.scrollWidth / 3;
    
    controls.start({
     x: [xRef.current, xRef.current - width],
      transition: {
        x: { repeat: Infinity, 
          repeatType: "loop", 
          duration: 60, 
          ease: "linear" 
        },
      },
    });
  };

  const stopScrolling = () => {
    controls.stop();
  };

  return (
    <div className="w-full overflow-auto md:overflow-hidden ">
      <motion.div
        ref={containerRef}
        className="flex w-dvw gap-12"
        animate={controls}
        drag="x"
        dragConstraints={{ left: -200, right: 500 }} 
        dragElastic={0.2} 
        onUpdate={(latest) => {
          xRef.current = latest.x as number;
        }}
        onDrag={stopScrolling}
        onDragEnd={startScrolling}
        onHoverEnd={startScrolling}
        onViewportEnter={startScrolling} 
      >
      {scrollItems.map((category, i) => (
      <ArtCategoryCard key={i} category={category} />
      ))}
      </motion.div>
    </div>
  );
};

export default ArtScroller;
