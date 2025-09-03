import { Link } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';

export default function Footer() {
    return(
       <footer className='footer1'>
            <Link to = "/">
                <VideoPlayer
                src="/videos/loop2.mp4" 
                title="Loop2" 
                autoPlay
                loop
                muted
                controls={false}
                className=" w-148 h-40  rounded-full object-contain border-3 border-gray-900 bm-auto mx-auto"
                />
            </Link>
        </footer>   
    )     
}