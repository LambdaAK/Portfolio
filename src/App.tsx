import Nav from './components/Nav'
import TitleBar from './components/TitleBar'
import Welcome from './components/Welcome'
import Index from './pages/Index'

export default function App() {
  return (

    <div className="bg-black min-h-screen">


            <div className="
            
              min-h-screen
            
              flex items-center justify-center -translate-y-64

            ">

            <div>

            <TitleBar/>
            <div className="py-8"></div>
            <Nav/>
            <div className="pb-96"></div>
            <Welcome/>

            </div>

            </div>

          <Index/>
    </div>
    
  )
}