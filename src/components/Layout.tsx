// src/components/Layout.tsx
import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-gradient-to-br from from-gray-900 via-purple-900 to-indigo-900 ..." >
      <header className=''>
       <div className='w-19.25'></div>
         <Header></Header>
        <nav className=''>
          <Navbar ></Navbar>
        </nav>
      </header>
        <div></div>
          <main >{children}</main>
              <Footer></Footer>  
    </div>
  )
      
}

export default Layout
