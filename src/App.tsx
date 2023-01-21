import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutMeSection from './components/AboutMeSection'
import Nav from './components/Nav'
import TitleBar from './components/TitleBar'
import Welcome from './components/Welcome'
import Index from './pages/Index'
import Projects from './pages/Projects'

export default function App() {
  return (

    <div className="bg-black min-h-screen scroll-smooth">
            

          <BrowserRouter>
            <Routes>

              <Route path="/projects" element={<Projects/>} />
              <Route path="/" element={<Index/>} />
              <Route path="/about" element={<AboutMeSection/>} />
            </Routes>
          
          
          </BrowserRouter>
    </div>
    
  )
}