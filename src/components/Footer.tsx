import { Link } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';

export default function Footer() {
    return(
        <div>

            <footer className='footer1'>
                <Link to = "/">
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
            </footer>
        </div>
    )     
}