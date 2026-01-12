// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GalleryPage from './pages/GalleryPage'
import BioPage from './pages/BioPage'
import ResumePage from './pages/Resume'
import CartPage from './pages/CartPage'
import Layout from './components/Layout'
import Home from './pages/Home'
import ArtCategoryPage from './pages/ArtCategoryPage'
import ExamplePage from './pages/Work/WorkExamples'
import PrintedPage from './pages/Work/PrintedPage'
import PillowPage from './pages/Work/PillowPage'
// import WorkCategoryPage from './pages/WorkCategoryPage'



const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route 
          path="/" 
          element={
          <Home
          artistName="Mason Karr"
          welcomeMessage='Welcome'
          highlightMessage="to the gallery of"
          introText="Browse original works of "
          introWorks='painting, printmaking,'
          outroWorks= 'and design.'
          />
        } 
      />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/art" element={<GalleryPage />} />
          <Route path="/art/:category" element={<ArtCategoryPage />} />
          <Route path="/bio" element={<BioPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/workexamples" element={<ExamplePage />} />
           <Route path = "/printed" element={<PrintedPage/>} />
          <Route path = "/pillows" element={<PillowPage/>} />
          {/* <Route path = "/workexamples/:category" element={<WorkCategoryPage />} /> */}
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
