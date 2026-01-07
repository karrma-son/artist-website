
import { Link } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import { motion } from 'framer-motion';

export default function Header() {
  

  return (
    
    <motion.header  
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: -100, opacity: .8 }}
      whileInView={{y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "circOut" }}    
      className="header1 flex:auto justify-center " >
            <Link to="/">
                <VideoPlayer
                src="/videos/loop3.mp4" 
                title="Loop" 
                autoPlay
                loop
                muted
                controls={false}
                className=" img rounded-full  border-6 border-gray-900 bm-auto mx-auto z-30"
                
                />
                </Link>

    </motion.header>
  )
}
