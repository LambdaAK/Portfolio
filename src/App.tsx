import Nav from './components/Nav'
import TitleBar from './components/TitleBar'
import Index from './pages/Index'

export default function App() {
  return (

    <div className="bg-black h-screen">
            <TitleBar/>

            <div className="my-12"></div> /** vertical space */


            <Nav/>
  
          <Index/>
    </div>
    
  )
}