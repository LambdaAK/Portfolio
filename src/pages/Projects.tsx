import { SyntheticEvent, useEffect } from "react";
import Nav from "../components/Nav";
import Project from "../components/Project";
import "./css/Projects.css"


const RBGScriptDescription:string = "RGBScript is a C-style, procedural programming language that supports **basic types**, **variables**, **functions**, and control structures. This language gets its name from the fact that it outputs programs and program results in a colorful, fun way."




const handleClickRGBScript = (e:SyntheticEvent) => {
    e.preventDefault();
    location.replace("RGBScript")
}



export default function Projects() {

    // use effect for changing oopacity to 100 after 10000ms

    useEffect(() => {
            
            setTimeout(() => {
    
                const bar: HTMLElement|null = document.getElementById("projects")
    
                if (bar == null) return;
    
                bar.classList.remove("opacity-0")
                bar.classList.add("opacity-100")
    
            }, 0)
    })


    return (
        <div>
            <div id="projects" className="transition transform opacity-0 duration-1000 pb-20">
                
                <div className="text-5xl text-blue text-left pb-20 flex justify-center"> My Projects</div>
                    
                <Nav/>

                <div id="RGBScript-project" className="mt-10 mx-5">
                    <div id="RBGScript-project-header" className="grid grid-cols-3">
                        <div className="
                        text-3xl 
                        text-blue
                        
                        transition transform
                        opacity-60
                        hover:opacity-90 bg-gray-900
                        rounded-2xl
                        hover:translate-x-20
                        hover:scale-125
                        scale-90

                        px-5 py-5 mr-10 

                        hover:cursor-pointer
                        
                        "
                        onClick={handleClickRGBScript}
                        >
                            RGBScript <span className="text-xl text-slate-500"> <br/>an interpreted programming language</span>
                            <div className="mt-10 text-slate-400 text-lg">RGBScript is a C-style, procedural programming language that supports **basic types**, **variables**, **functions**, and **control structures**.
                                This language gets its name from the fact that it outputs programs and program results in a colorful, fun way.</div>
                        </div>
                        <div id="RBGScript-project-pictures" className="col-span-2 grid grid-cols-2 grid-rows-2 gap-2 mr-5">

                            
                            
                            <ProjectImage src={"/RGBScript/RGBScript-1.jpg"} alt={""} bg={"bg-ide"} xDir={1} yDir={1}/>
                            <ProjectImage src={"/RGBScript/RGBScript-2.jpg"} alt={""} bg={"bg-ide"} xDir={-1} yDir={1}/>
                            <ProjectImage src={"/RGBScript/RGBScript-3.jpg"} alt={""} bg={"bg-ide"} xDir={1} yDir={-1}/>
                            <ProjectImage src={"/RGBScript/RGBScript-4.jpg"} alt={""} bg={"bg-ide"} xDir={-1} yDir={-1}/>
                        </div>

                    </div>

                </div>
                            
            </div>
        </div>
  
    )

}



interface ProjectImageProps {
    src: string;
    alt: string;
    bg: string; // this is a class for the
    xDir: number // + 1 or -1
    yDir: number // + 1 or -1
}


function ProjectImage(props: ProjectImageProps) {

    let classes:string = "transition opacity-60 scale-90 flex justify-center items-center rounded-lg hover:opacity-90 hover:scale-150"

    classes += " " + props.bg

    if (props.xDir == 1) {
        classes += " hover:translate-x-14"
    }
    else if (props.xDir == -1) {
        classes += " hover:-translate-x-14"
    }

    if (props.yDir == 1) {
        classes += " hover:translate-y-14"
    }
    else if (props.yDir == -1) {
        classes += " hover:-translate-y-14"
    }



    return (
        <div className={classes}>
            <img src="/RGBScript/RGBScript-1.jpg" alt={props.alt}/>
        </div>
    )
}