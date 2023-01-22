import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutMeSection from './components/AboutMeSection'
import Nav from './components/Nav'
import TitleBar from './components/TitleBar'
import Welcome from './components/Welcome'
import Index from './pages/Index'
import Projects from './pages/Projects'
import RGBScript from './pages/RGBScript'

export default function App() {
  return (

    <div className="bg-black min-h-screen scroll-smooth">
            

          <BrowserRouter>
            <Routes>

              <Route path="/" element={<Index/>} />
              <Route path="/projects" element={<Projects/>} />
              <Route path="/about" element={<AboutMeSection/>} />
              <Route path="RGBScript" element={<RGBScript/>}/>
              
            </Routes>
          
          
          </BrowserRouter>
    </div>
    
  )
}