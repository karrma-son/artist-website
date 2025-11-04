// src/components/Navbar.tsx
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, ShoppingCart, SquareChevronDown, Images,  FileUser, House,  FileText } from 'lucide-react'; // npm install lucide-react
import Modal from './Modal';
import {motion} from 'framer-motion'
// 

const Navbar = () => {
  const nodeRef = useRef(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [artOpen, setArtOpen] = useState(false);

  return (
    //<Draggable nodeRef={nodeRef}>
    <nav 
      ref={nodeRef}
      className="flex flex-col justify-center items-center">
      {/* Desktop Menu */}
      <motion.div
                  drag
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: .98 }}
                  transition={{ duration: 2, ease: "easeIn" }}
        className="hidden md:flex flex-col gap-14 text-gray-100 text-lg w-40 h-72 bg-linear-to-bl from-slate-700 to-gray-600  border-gray-800 border-2 shadow-lg shadow-gray-950  rounded-4xl p-6 fixed right-48">
        <ul>
        <li>
          <Link to="/" className="hover:text-fuchsia-300 flex items-center gap-2">
            <House size={18} /> Home
          </Link>
        </li>
        <li>
          <Link to="/art/Paintings" className="hover:text-fuchsia-400 flex items-center gap-1">
          Paintings 
         </Link> 

        </li> 
        <li>     
          <Link to="/art/Printmaking" className="hover:text-fuchsia-400 flex items-center gap-1 ">
          Printmaking
         </Link> 
        </li>    
        <li>       
          <Link to="/art/Illustrations" className="hover:text-fuchsia-400 flex items-center gap-1">
           Illustrations
         </Link> 
        </li>
        <li>             
          <Link to="/art/Digital" className="hover:text-fuchsia-400 flex items-center gap-1">
          Digital Art
         </Link> 
        </li>
        <li>
          <Link to="/gallery" className="hover:text-fuchsia-400 flex items-center gap-1">
            <Images size={18} /> Gallery
          </Link>
        </li>
        <li>
          <Link to="/bio" className="hover:text-fuchsia-400 flex items-center gap-1">
            <FileUser size={18} /> Bio
          </Link>
        </li>
        <li>
          <Link to="/resume" className="hover:text-fuchsia-400 flex items-center gap-1">
            <FileText size={18} /> Resume
          </Link>
        </li>
        <li>
          <Link to="/cart" className="hover:text-fuchsia-400 flex items-center gap-1">
            <ShoppingCart size={18} /> Cart
          </Link>
        </li>
      </ul>
    </motion.div>
      
    



<motion.div 
    drag
    className="md:hidden bg-radial from-black to-gray-700  border-gray-800  shadow-lg shadow-gray-900 border-3 rounded-4xl flex justify-end fixed mt-30 ml-140  z-60">
  <button onClick={() => setMobileOpen(!mobileOpen)}>
    {mobileOpen ? <X size={30} color="#cdaaeeb3" /> : <SquareChevronDown size={60} color="#cdaaeeb3" />}
  </button>
      </motion.div>


      {mobileOpen && (
         <Modal isOpen={mobileOpen} onClose={() => setMobileOpen(false)}    variant="drawer">
        <div className=" w-[18rem]  h-[40rem] flex flex-col ml-25 mt-50  justify-center justify-items-center" >
          <ul className="text-xl/40">
            <li> 
              <div className= 'flex justify-center h-24 w-48 mb-4 border-4 bg-linear-to-bl from-slate-700  bg border-t border-gray-900 rounded-4xl mt-8'>
              <button className='flex flex-col justify-center align-middle' title='art-button'
                onClick={() => setArtOpen(!artOpen)}>
                <SquareChevronDown size={20} className={artOpen ? 'rotate-180 transition-transform' : ''} />
              </button>
              {artOpen && (
                <Modal isOpen={artOpen} onClose={() => setArtOpen(false)} variant="popup" >
                  <div className="h-100 text-xl/40 flex flex-col justify-center gap-1  mt-80 ">
                  <button className=" flex justify-center h-24 w-48 ml-1 mb-4 border-4 bg-linear-to-bl from-slate-700  bg border-t border-gray-900 rounded-4xl" 
                    onClick={() => setMobileOpen(false)}>
                    <Link to="/art/Paintings" className="paintings flex flex-col justify-center align-middle ">Paintings</Link> </button>
                  <button className=" flex justify-center h-24 w-48 ml-1 mb-4 border-4 bg-linear-to-bl from-slate-700  bg border-t border-gray-900 rounded-4xl"
                    onClick={() => setMobileOpen(false)}> 
                    <Link to="/art/Printmaking" className="flex flex-col justify-center align-middle ">Printmaking</Link></button>
                  <button className=" flex justify-center h-24 w-48 ml-1 mb-4 border-4 bg-linear-to-bl from-slate-700  bg border-t border-gray-900 rounded-4xl"
                    onClick={() => setMobileOpen(false)}>   
                    <Link to="/art/Illustrations" className="illustrations flex flex-col justify-center align-middle ">Drawings</Link></button>
                  <button className=" flex justify-center h-24 w-48 ml-1 mb-4 border-4 bg-linear-to-bl from-slate-700  bg border-t border-gray-900 rounded-4xl"
                    onClick={() => setMobileOpen(false)}>   
                    <Link to="/art/Digital" className=" flex flex-col justify-center align-middle ">Digital Art</Link></button>
                  </div>
                 </Modal>
              )}
            </div >
            </li>
            <li>
            <div className= 'flex justify-center h-24 w-48 mb-4 border-4 bg-linear-to-bl from-slate-700 to-fuchsia-900 bg border-t border-gray-900 rounded-4xl'>
            <button  className="flex flex-col justify-center align-middle" title='homebtn'
            onClick={() => setMobileOpen(false)}>
              <Link to="/gallery">
                  <Images className=' ' size={20} /> 
              </Link>
              </button>
              </div>   
            </li> 
            <li>
              <div className= 'flex justify-center h-24 w-48 mb-4 border-4  bg-linear-to-bl from-slate-700  bg border-t border-gray-900 rounded-4xl'> 
                <button  className="flex flex-col justify-center align-middle" title='homebtn'
                onClick={() => setMobileOpen(false)}> 
                <Link to="/" className="home">
                <House size={20} /> 
                </Link>
                </button>
              </div>              
              
            </li>
            <li>
              <div className= 'flex justify-center h-24 w-48 mb-4 border-4 bg-linear-to-bl from-slate-700 to-fuchsia-900 bg border-t border-gray-900 rounded-4xl'> 
                <button title='biobtn'
                onClick={() => setMobileOpen(false)}> 
                <Link to="/bio" className="bio">
                <FileUser size={20} /> 
                </Link>
                </button>
              </div>              
              
            </li>
            <li>
              <div className= 'flex justify-center h-24 w-48 mb-4 border-4 bg-linear-to-bl from-slate-700 bg border-t border-gray-900 rounded-4xl'>
                <button title='resumebtn'> 
                <Link to="/resume" className="resume"
                onClick={() => setMobileOpen(false)}> 
                <FileText size={20} /> 
                </Link>
                </button>
              </div>
            </li>
            <li>
              <div className= 'flex justify-center h-24 w-48 mb-4 border-4 bg-linear-to-bl from-slate-700 to-fuchsia-900  bg border-t border-gray-900 rounded-4xl'>
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
    </nav>
    //</Draggable>
  );
};

export default Navbar;


