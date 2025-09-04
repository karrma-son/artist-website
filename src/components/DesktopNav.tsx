import { useRef } from "react";
import { Link } from "react-router-dom";
import Draggable from "react-draggable";
import { motion } from "framer-motion";
import {  ShoppingCart, Images,  Brush, FileUser,   FileText } from 'lucide-react'; // npm install lucide-react

const DesktopNav = () => {
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef}>
      <nav
        ref={nodeRef}
        className="hidden md:flex fixed top-2 right-2 flex-col w-40 h-64 bg-gradient-to-bl from-slate-700 to-fuchsia-600 border border-gray-900 rounded-2xl p-6 shadow-xl z-50 cursor-move"
      >
        {/* Desktop nav content */}
              <motion.div
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: .95 }}
                  transition={{ duration: 3, ease: "easeIn" }}
        className="hidden md:flex flex-col gap-14 text-gray-100 text-lg w-40 h-48 bg-gradient-to-bl from-slate-700 to-gray-600  border-gray-800 border-2 shadow-lg shadow-gray-950  rounded-4xl p-6 fixed right-48">
        <ul>
        <li>
          <Link to="/art/Paintings" className="hover:text-fuchsia-300 flex items-center gap-2">
            <Brush size={18} /> Art
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
      
      </nav>
    </Draggable>
  );
};

export default DesktopNav;