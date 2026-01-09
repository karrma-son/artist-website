// src/components/Navbar.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ShoppingCart, SquareChevronDown, Images,  FileUser, House,  FileText } from 'lucide-react'; // npm install lucide-react
import Modal from './Modal';
import {motion} from 'framer-motion'


const Navbar = () => {
 
  const [mobileOpen, setMobileOpen]  =  useState(false);
  const [artOpen, setArtOpen]  =  useState(false);

return (
<nav className = " mt-12 w-full z-40 content-center text-center  ">
  <motion.div
    initial = {{ y:0, opacity: 0 }}
    animate = {{  y: 0, opacity: .4 }}
    whileHover = {{
      scale: .98,
      opacity: .58,
      transition: { duration: .2 },
      z: 240
      }}
    transition = {{ duration: 0.6, ease: "easeOut" }}
    className = "hidden xl:flex pointer-events-auto overflow-x-auto whitespace-nowrap bg-linear-to-r from-gray-800/90 to-slate-500/90 backdrop-blur-md border-b border-gray-900 shadow-lg justify-center z-100">
    <motion.ul onClick = {(e) => console.log("Clicked element:", e.target)}
      className = "flex gap-8 px-6 py-6 text-gray-100 text-2xl z-40 lg:text-4xl">
      <motion.li
        whileHover = {{
          scale: 1.3,
          opacity: 1,
          transition: { duration: .4 },
          z: 40
        }}>
        <Link 
          to = "/" 
          className = "hover:text-fuchsia-400 flex items-center gap-2">
          <House size = {18} /> Home
        </Link>
      </motion.li>
      <motion.li
        whileHover = {{
          scale: 1.3,
          opacity: 1,
          transition: { duration: .2 },
          z: 40
        }} >
      <Link 
        to = "/art/Paintings" 
        className = "hover:text-fuchsia-400 flex items-center gap-1 ">
        Paintings 
      </Link> 
      </motion.li> 
      <motion.li
        whileHover = {{
          scale: 1.3,
          opacity: 1,
          transition: { duration: .4 },
          z: 40
        }} >     
        <Link 
          to = "/art/Printmaking" 
          className = "hover:text-fuchsia-400 flex items-center gap-1 ">
          Printmaking
        </Link> 
      </motion.li>    
      <motion.li
        whileHover = {{
          scale: 1.3,
          opacity: 1,
          transition: { duration: .4 },
          z: 40
        }} >        
        <Link 
          to = "/art/Illustrations" 
          className = "hover:text-fuchsia-400 flex items-center gap-1">
          Illustrations
        </Link> 
      </motion.li>
      <motion.li
        whileHover = {{
          scale: 1.3,
          opacity: 1,
          transition: { duration: .4 },
          z: 40
        }} >            
      <Link 
        to = "/art/Digital" 
        className = "hover:text-fuchsia-400 flex items-center gap-1">
        Design/Digital
      </Link> 
      </motion.li>
      <motion.li
        whileHover = {{
          scale: 1.3,
          opacity: 1,
          transition: { duration: .4 },
          z: 40
        }} >
      <Link 
        to = "/gallery" 
        className = "hover:text-fuchsia-400 flex items-center gap-1">
        <Images size = {18} /> Gallery
      </Link>
      </motion.li>
      <motion.li
        whileHover = {{
          scale: 1.3,
          opacity: 1,
          transition: { duration: .4 },
          z: 40
        }} >
        <Link 
          to = "/bio" 
          className = "hover:text-fuchsia-400 flex items-center gap-1">
          <FileUser size = {18} /> Bio
        </Link>
      </motion.li>
      <motion.li
        whileHover = {{
          scale: 1.3,
          opacity: 1,
          transition: { duration: .4 },
          z: 40
        }} >
        <Link 
          to = "/resume" 
          className = "hover:text-fuchsia-400 flex items-center gap-1">
          <FileText size = {18} /> Resume
        </Link>
      </motion.li>
      <motion.li
        whileHover = {{
          scale: 1.3,
          opacity: 1,
          transition: { duration: .4 },
          z: 40
        }} >
        <Link to = "/cart" className = "hover:text-fuchsia-400 flex items-center gap-1">
          <ShoppingCart size = {18} /> Cart
        </Link>
      </motion.li>
    </motion.ul>
  </motion.div>


  <motion.div 
    drag
    dragConstraints={{
      top: -50,
      left: 20,
      right: 0,
      bottom: 50,
    }}
    dragElastic={.6}
    className = "xl:hidden bg-radial from-black to-gray-700 border-gray-800 shadow-lg shadow-gray-900 border-4 rounded-4xl flex justify-end fixed right-10 z-70">
    <button onClick = {() => setMobileOpen(!mobileOpen)}>
      {mobileOpen ? 
      <X size = {30} color = "#cdaaeeb3" /> : 
      <SquareChevronDown size = {60} color = "#cdaaeeb3" />}
    </button>
  </motion.div>


  {mobileOpen && (
    <Modal isOpen  =  {mobileOpen} onClose  =  {() => setMobileOpen(false)}    
      variant = "drawer" className = 'w-160 rounded-lg'>
      <div className = "flex flex-col mb-10 mt-180 justify-center justify-items-center" >
        <motion.ul className = "m-auto text-xl/40">
          <motion.li> 
            <div className =  'flex justify-center h-24 w-48 mb-4 border-4 bg-linear-to-bl from-slate-500  bg border-t border-gray-900 rounded-4xl mt-8'>
              <button className = 'flex flex-col justify-center align-middle' title = 'art-button'
                onClick = {() => setArtOpen(!artOpen)}>
                <SquareChevronDown size = {20} className = {artOpen ? 'rotate-180 transition-transform' : ''} />
              </button>

              {artOpen && (
                <Modal isOpen = {artOpen} onClose = {() => setArtOpen(false)} variant = "popup" >
                  <div className = "h-168 text-xl/40 flex flex-col justify-center gap-1  mt-130 ">
                    <button className = " flex justify-center h-24 w-48 ml-1 mb-4 border-4 bg-linear-to-bl from-slate-500  bg border-t border-gray-900 rounded-4xl" 
                     onClick = {() => setMobileOpen(false)}>
                      <Link to = "/art/Paintings" 
                        className = "hover:text-fuchsia-300 flex flex-col justify-center align-middle" title ='paintingbtn'> 
                        Paintings
                      </Link> 
                    </button>
                    <button className = "hover:text-fuchsia-300 flex justify-center h-24 w-48 ml-1 mb-4 border-4 bg-linear-to-bl from-slate-500  bg border-t border-gray-900 rounded-4xl"
                      onClick = {() => setMobileOpen(false)}> 
                      <Link to = "/art/Printmaking" className = "flex flex-col justify-center align-middle" title ='paintingbtn'>
                        Printmaking
                      </Link>
                    </button>
                    <button className = "hover:text-fuchsia-300 flex justify-center h-24 w-48 ml-1 mb-4 border-4 bg-linear-to-bl from-slate-500  bg border-t border-gray-900 rounded-4xl"
                      onClick = {() => setMobileOpen(false)}>   
                      <Link to = "/art/Illustrations" className = "illustrations flex flex-col justify-center align-middle ">
                        Drawings
                      </Link>
                    </button>
                    <button className = "hover:text-fuchsia-300 flex justify-center h-24 w-48 ml-1 mb-4 border-4 bg-linear-to-bl from-slate-500  bg border-t border-gray-900 rounded-4xl"
                      onClick = {() => setMobileOpen(false)}>   
                      <Link to = "/art/Digital" className = " flex flex-col justify-center align-middle ">
                        Design
                      </Link>
                    </button>
                  </div>
                </Modal>
              )}
            </div >
          </motion.li>

          <motion.li>
            <div className =  'flex justify-center h-24 w-48 mb-4 border-4 bg-linear-to-bl from-slate-500 to-fuchsia-900 bg border-t border-gray-900 rounded-4xl'>
              <button  className = "flex flex-col justify-center align-middle" title ='gallerybtn'
                onClick = {() => setMobileOpen(false)}>
                <Link to = "/gallery">
                    <Images className = ' ' size = {20} /> 
                </Link>
              </button>
            </div>   
          </motion.li> 

          <motion.li>
            <div className =  'flex justify-center h-24 w-48 mb-4 border-4  bg-linear-to-bl from-slate-500  bg border-t border-gray-900 rounded-4xl'> 
              <button  className = "flex flex-col justify-center align-middle" title = 'homebtn'
                onClick = {() => setMobileOpen(false)}> 
                <Link to = "/" className = "home">
                  <House size = {20} /> 
                </Link>
              </button>
            </div>              
            
          </motion.li>

          <motion.li>
            <div className =  'flex justify-center h-24 w-48 mb-4 border-4 bg-linear-to-bl from-slate-500 to-fuchsia-900 bg border-t border-gray-900 rounded-4xl'> 
              <button title = 'biobtn'
                onClick = {() => setMobileOpen(false)}> 
                <Link to = "/bio" className = "bio">
                  <FileUser size = {20} /> 
                </Link>
              </button>
            </div>              
            
          </motion.li>
          <motion.li>
            <div className =  'flex justify-center h-24 w-48 mb-4 border-4 bg-linear-to-bl from-slate-500 bg border-t border-gray-900 rounded-4xl'>
              <button title = 'resumebtn'> 
                <Link to = "/resume" className = "resume"
                  onClick = {() => setMobileOpen(false)}> 
                  <FileText size = {20} /> 
                </Link>
              </button>
            </div>
          </motion.li>
          
          <motion.li>
            <div className =  'flex justify-center h-24 w-48 mb-4 border-4 bg-linear-to-bl from-slate-500 to-fuchsia-900  bg border-t border-gray-900 rounded-4xl'>
              <button title = 'cartbtn'> 
              <Link to = "/cart" className = "cart flex items-center gap-1"
              onClick = {() => setMobileOpen(false)}> 
              <ShoppingCart size = {20} /> 
              </Link>
              </button>
            </div>
          </motion.li>
        </motion.ul>
      </div>
    </Modal>
  )}
  </nav>
    //</Draggable>
  );
};

export default Navbar;


