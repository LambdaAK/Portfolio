import Nav from './components/Nav'
import TitleBar from './components/TitleBar'
import Welcome from './components/Welcome'
import Index from './pages/Index'
import Projects from './pages/Projects'

export default function App() {
  return (

    <div className="bg-black min-h-screen scroll-smooth">


            <div className="
            
              min-h-screen flex items-center justify-center

            ">

            <div>

            <TitleBar/>
            <div className="py-8"></div>
            <Nav/>
            <div className="pb-96"></div>
            <Welcome/>

            </div>

            </div>

          <Projects/>


    </div>
    
  )
}