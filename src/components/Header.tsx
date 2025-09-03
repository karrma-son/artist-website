
import { Link } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';

export default function Header() {
  

  return (
    
    <header  className="header1 flex:auto justify-center " >
      <Link to="/">
                <VideoPlayer
                src="/videos/loop3.mp4" 
                title="Loop" 
                autoPlay
                loop
                muted
                controls={false}
                className=" footer img rounded-full  border-gray-900 bm-auto mx-auto"
                />
      </Link>
    </header>
  )
}
