import Nav from './components/Nav'
import TitleBar from './components/TitleBar'
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

            <div className="my-20"></div>


            <Nav/>

            </div>

        </div>


            
  
          <Index/>
    </div>
    
  )
}