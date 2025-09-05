
import { Link } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import { motion } from 'framer-motion';

export default function Header() {
  

  return (
    
    <motion.header  
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 2, ease: "circOut" }}    
      className="header1 flex:auto justify-center " >
      <Link to="/">
                <VideoPlayer
                src="/videos/loop3.mp4" 
                title="Loop" 
                autoPlay
                loop
                muted
                controls={false}
                className=" img rounded-full  border-gray-900 bm-auto mx-auto"
                
                />
      </Link>
    </motion.header>
  )
}
