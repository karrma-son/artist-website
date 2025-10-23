import { Link } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import {motion} from "framer-motion";


export default function Footer() {
    return(
        <div>
        <p className="text-center m-auto mt-36">© 2025 Mason Karr</p>
        <motion.footer 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className='footer1'>
            <Link to="/">
                    <VideoPlayer
                    src="/videos/loop3.mp4" 
                    title="Loop" 
                    autoPlay
                    loop
                    muted
                    controls={false}
                    className=" footer img rounded-full border-6 border-gray-900 bm-auto mx-auto"
                    />
                </Link>

        </motion.footer>
        </div>
    )     
}