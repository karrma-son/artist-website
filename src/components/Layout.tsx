// src/components/Layout.tsx
import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import MotionNav from './MotionNav'
import { motion } from "framer-motion";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-gradient-to-br from from-gray-900 via-purple-900 to-indigo-900 ..." >
      <header className='bg-[url(/pattern2.jpg)] bg-center bg-blend-luminosity flex justify-between content-center'> 
         <Header></Header>
      </header>
        <div></div>
     <MotionNav>
        <Navbar />
      </MotionNav>

          <main>{children}</main>
            <br />
              <motion.h1
                initial={{ z: 200, opacity: 0 }}
                  animate={{ z: 0, opacity: .9 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                    className= "flex m-auto w-12 h-12 rounded-sm border-4 border-solid justify-center bg-radial from-indigo-900 to-purple-400 z-0"> 
                  <Link to="/bio">
                  Mason Karr
                  </Link>
              </motion.h1>
  
            <br />
              <Footer></Footer>  
    </div>
  )
      
}

export default Layout
