

import VideoPlayer from './VideoPlayer';
import { motion } from 'framer-motion';

export default function Header() {
  

  return (
    
    <motion.header  
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 2, ease: "circOut" }}    
      className="header1 flex:auto justify-center " >

                <VideoPlayer
                src="/videos/loop3.mp4" 
                title="Loop" 
                autoPlay
                loop
                muted
                controls={false}
                className=" img rounded-full  border-2 border-gray-900 bm-auto mx-auto z-50"
                
                />

    </motion.header>
  )
}
