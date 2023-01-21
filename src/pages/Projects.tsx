import { useEffect } from "react";
import Project from "../components/Project";



const RBGScriptDescription:string = "RGBScript is a C-style, procedural programming language that supports **basic types**, **variables**, **functions**, and control structures. This language gets its name from the fact that it outputs programs and program results in a colorful, fun way."



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
        <div id="projects" className="transition transform opacity-0 duration-1000 pb-20">
            <div className="text-5xl text-blue text-left pb-20 flex justify-center"> My Projects</div>


                <Project title={"RBGScript"} description={"An interpreted programming language"} images={["code3.jpg"]}/>






        </div>
        
    )

}






/*
return (
        <div id="projects" className="transition transform opacity-0 duration-1000 pb-20">
            <div className="text-5xl text-blue text-left pb-20 flex justify-center"> My Projects</div>

                    <Project
                    title="RGBScript" 
                    description={RBGScriptDescription}
                    githubLink={"www.google.com"} 
                    images={["code3.jpg"]} 
                    />    
        </div>
        
    )
*/