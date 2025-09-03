import React from "react";

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
    <div className={` w-64 h-64 mt-7 rounded-full flex items-center justify-center overflow-hidden shadow-lg shadow-gray-900 ${className}`}>
      <video
        src={src}
        title={title}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        controls={controls}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default VideoPlayer;