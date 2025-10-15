import React from "react";
import { motion } from "framer-motion";

const MotionNav: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.nav
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    className="sticky top-0 z-50 bg-black/30 backdrop-blur-md"
  >
    {children}
  </motion.nav>
)

export default MotionNav;
