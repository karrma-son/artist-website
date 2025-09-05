import React from "react";
import { motion } from "framer-motion";

interface VideoPlayerProps {
  src: string;
  title?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  className?: string;
  playsInline?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  title,
  autoPlay = false,
  loop = false,
  muted = false,
  controls = true,
  className = "",
  playsInline = true,
}) => {
  return (
    <motion.div
      drag
      dragSnapToOrigin
      style={{ position: "relative" }}
      initial={{ y: 600, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className={`w-64 h-64 mt-7 rounded-full flex items-center justify-center overflow-hidden shadow-lg shadow-gray-900 cursor-grab active:cursor-grabbing ${className}`}
    >
      
  <div className="pointer-events-none w-full h-full">
      <video
        src={src}
        title={title}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        controls={controls}
        playsInline = {playsInline}
        className="w-full h-full object-cover"
      />
      </div>
    </motion.div>
  );
};

export default VideoPlayer;
