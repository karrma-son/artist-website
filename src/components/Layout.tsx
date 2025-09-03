// src/components/Layout.tsx
import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-gradient-to-br from from-gray-900 via-purple-900 to-indigo-900 ..." >
      <header className='flex justify-between content-center'> 
        <div className = "w-48"></div>               

         <Header></Header>
        <nav className=''>
          <Navbar ></Navbar>
        </nav>
      </header>
        <div></div>
          <main >{children}</main>
            <br />
              <motion.h1
                initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                    className= "flex m-auto w-12 h-12 rounded-sm border-4 border-solid justify-center bg-radial from-indigo-900 to-purple-400"> 
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
