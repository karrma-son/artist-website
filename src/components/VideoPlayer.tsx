import React from "react";
import {motion} from "framer-motion";

interface VideoPlayerProps {
  src: string;
  title?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  title,
  autoPlay = false,
  loop = false,
  muted = false,
  controls = true,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ y: 600, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 3, ease: "easeOut" }}
      className={` w-64 h-64 mt-7 rounded-full flex items-center justify-center overflow-hidden shadow-lg shadow-gray-900 ${className}`}>
        <video
          src={src}
          title={title}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          controls={controls}
          className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default VideoPlayer;