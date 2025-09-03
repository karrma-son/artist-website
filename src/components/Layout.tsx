// src/components/Layout.tsx
import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-gradient-to-br from from-gray-900 via-purple-900 to-indigo-900 ..." >
      <header className='flex justify-between content-center'>                
        < h1 className= "w-12 h-12 rounded-sm border-4 border-solid justify-center bg-radial from-indigo-900 to-purple-400"> 
          Mason Karr
        </h1>
  
         <Header></Header>
        <nav className=''>
          <Navbar ></Navbar>
        </nav>
      </header>
        <div></div>
          <main >{children}</main>
            <br />
            <br />
              <Footer></Footer>  
    </div>
  )
      
}

export default Layout
