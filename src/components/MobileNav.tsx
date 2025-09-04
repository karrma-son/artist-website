import { useRef, useState } from "react";
import { Link } from 'react-router-dom';
import { X, ShoppingCart, SquareChevronDown, Images,  Brush, FileUser, House,  FileText } from 'lucide-react'; // npm install lucide-react
import Modal from './Modal';
import Draggable from "react-draggable";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
    const nodeRef = useRef(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [artOpen, setArtOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      className=""
      onClick={onClose} // closes when clicking backdrop
    >
      <Draggable nodeRef={nodeRef}>
        <div
          ref={nodeRef}
          className="bg-gradient-to-bl from-slate-700 to-fuchsia-600 rounded-2xl p-6 w-64 shadow-xl cursor-move"
          onClick={(e) => e.stopPropagation()} // stop click from closing when dragging
        >
          {/* Mobile nav content */}
          

<div className="md:hidden bg-radial from-black to-gray-700  border-gray-800  shadow-lg shadow-gray-900 border-3 rounded-2xl fixed top-30 right-20 z-30">
  <button onClick={() => setMobileOpen(!mobileOpen)}>
    {mobileOpen ? <X size={28} color="#cdaaeeb3" /> : <SquareChevronDown size={48} color="#cdaaeeb3" />}
  </button>
      </div>


      {mobileOpen && (
         <Modal isOpen={mobileOpen} onClose={() => setMobileOpen(false)}>
        <div className=" flex flex-col h-300 ml-1 justify-items-center  ">
          <ul className="text-xl/40">
            <li> 
              <div className= ' mb-4 border-4 bg-linear-to-bl from-slate-700 to-fuchsia-900 bg border-t border-gray-900 rounded-2xl'>
              <button className='' title='art-button'
                onClick={() => setArtOpen(!artOpen)}>
               
                 <Brush size={20} />  
                <SquareChevronDown size={20} className={artOpen ? 'rotate-180 transition-transform' : ''} />
              </button>
              {artOpen && (
                <Modal isOpen={artOpen} onClose={() => setArtOpen(false)}>
                  <div className="text-xl/40 flex flex-col gap-1  ">
                  <button className=" flex flex-col ml-1 mb-4 border-4 bg-gradient-to-bl from-slate-700 to-fushia-600 bg border-t border-gray-900 rounded-2xl"> 
                    <Link to="/art/Paintings" className="paintings py-1 px-2 ">Paintings</Link> </button>
                  <button className=" flex flex-col ml-1 mb-4 border-4 bg-gradient-to-bl from-slate-700 to-fushia-600 bg border-t border-gray-900 rounded-2xl">   
                    <Link to="/art/Printmaking" className="py-1 px-2 ">Printmaking</Link></button>
                  <button className=" flex flex-col ml-1 mb-4 border-4 bg-gradient-to-bl from-slate-700 to-fushia-600 bg border-t border-gray-900 rounded-2xl">   
                    <Link to="/art/Illustrations" className="illustrations py-1 px-2 ">Illustrations</Link></button>
                  <button className=" flex flex-col ml-1 mb-4 border-4 bg-gradient-to-bl from-slate-700 to-fushia-600 bg border-t border-gray-900 rounded-2xl">   
                    <Link to="/art/Design" className="design py-1 px-2 ">Design</Link></button>
                  </div>
                 </Modal>
              )}
            </div >
            </li>
            <li className=  'mb-4 border-4 bg-linear-to-bl from-slate-700 to-fuchsia-900 bg border-t border-gray-900 rounded-4xl'
            onClick={() => setMobileOpen(false)}>
              <Link to="/gallery">
                  <Images className='m-auto h-40' size={30} /> 
              </Link>
            </li> 
            <li>
              <div className= 'mb-4 border-4 bg-gradient-to-bl from-slate-700 to-fuchsia-900 bg border-t border-gray-900 rounded-2xl'> 
                <button title='homebtn'
                onClick={() => setMobileOpen(false)}> 
                <Link to="/" className="home">
                <House size={20} /> 
                </Link>
                </button>
              </div>              
              
            </li>
            <li>
              <div className= 'mb-4 border-4 bg-linear-to-bl from-slate-700 to-fuchsia-900 bg border-t border-gray-900 rounded-4xl'> 
                <button title='biobtn'
                onClick={() => setMobileOpen(false)}> 
                <Link to="/bio" className="bio">
                <FileUser size={20} /> 
                </Link>
                </button>
              </div>              
              
            </li>
            <li>
              <div className= 'mb-4 border-4 bg-gradient-to-bl from-slate-700 to-fushia-600 bg border-t border-gray-900 rounded-2xl'>
                <button title='resumebtn'> 
                <Link to="/resume" className="resume"
                onClick={() => setMobileOpen(false)}> 
                <FileText size={20} /> 
                </Link>
                </button>
              </div>
            </li>
            <li>
              <div className= 'mb-4 border-4 bg-gradient-to-bl from-slate-700 to-fushia-600 bg border-t border-gray-900 rounded-2xl'>
                <button title='cartbtn'> 
                <Link to="/cart" className="cart flex items-center gap-1"
                onClick={() => setMobileOpen(false)}> 
                <ShoppingCart size={20} /> 
                </Link>
                </button>
              </div>
            </li>
          </ul>
        </div>
        </Modal>
      )}
        </div>
      </Draggable>
    </div>
  );
};

export default MobileNav;
