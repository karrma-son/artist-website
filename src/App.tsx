// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GalleryPage from './pages/GalleryPage'
import BioPage from './pages/BioPage'
import ResumePage from './pages/Resume'
import CartPage from './pages/CartPage'
import Layout from './components/Layout'
import Home from './pages/Home'
import ArtCategoryPage from './pages/ArtCategoryPage'

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
          highlightMessage="Welcome to the online gallery of"
          introText="Browse original works — painting, serigraphy, and digital design."
          />
        } 
      />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/art" element={<GalleryPage />} />
          <Route path="/art/:category" element={<ArtCategoryPage />} />
          <Route path="/bio" element={<BioPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
