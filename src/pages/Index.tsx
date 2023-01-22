import AboutMeSection from "../components/AboutMeSection";
import Nav from "../components/Nav";
import TitleBar from "../components/TitleBar";
import Welcome from "../components/Welcome";


export default function Index() {
    return (
        <div className="
            
              flex items-center justify-center

            ">

              <div>
                <TitleBar/>
                <div className="py-8"></div>
                <Nav/>

                <div className="py-8"></div>

                <Welcome/>
                
              </div>

            </div>

           
    )
}