import { useEffect } from "react";
import Nav from "../components/Nav";
import Project from "../components/Project";
import "./css/Projects.css"


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
        <div>
            <div id="projects" className="transition transform opacity-0 duration-1000 pb-20">
                
                <div className="text-5xl text-blue text-left pb-20 flex justify-center"> My Projects</div>
                    
                <Nav/>

                <div id="RGBScript-project" className="mt-10 mx-5">
                    <div id="RBGScript-project-header" className="grid grid-cols-3">
                        <div className="
                        text-5xl 
                        text-blue
                        
                        transition transform
                        opacity-60
                        hover:opacity-90 bg-gray-900
                        rounded-2xl
                        hover:translate-x-5
                        hover:scale-100
                        scale-90

                        px-10 py-10 mr-10
                        

                        
                        
                        ">
                            RGBScript <span className="text-3xl text-slate-400"> - an interpreted programming language</span>
                            <div className="mt-10 text-slate-400 text-2xl">RGBScript is a C-style, procedural programming language that supports **basic types**, **variables**, **functions**, and **control structures**.
                                This language gets its name from the fact that it outputs programs and program results in a colorful, fun way.</div>
                        </div>
                        <div id="RBGScript-project-pictures" className="col-span-2 grid grid-cols-2 grid-rows-2 gap-4">
                            <img src="/RGBScript/RGBScript-1.jpg" alt="" className="
                                transition 
                                transform 
                                hover:scale-125 
                                hover:translate-x-10 
                                hover:translate-y-10
                                duration-200
                                project-picture
                                opacity-60
                                hover:opacity-90

                            "/>
                            <img src="/RGBScript/RGBScript-2.jpg" alt="" className="
                                transition 
                                transform 
                                hover:scale-125 
                                hover:-translate-x-10 
                                hover:translate-y-10
                                duration-200
                                project-picture
                                opacity-60
                                hover:opacity-90
                            
                            "/>
                            <img src="/RGBScript/RGBScript-3.jpg" alt="" className="
                                transition 
                                transform 
                                hover:scale-125
                                hover:translate-x-10 
                                hover:-translate-y-10
                                duration-200
                                project-picture
                                opacity-60
                                hover:opacity-90
                            
                            "/>
                            <img src="/RGBScript/RGBScript-4.jpg" alt="" className="
                                transition 
                                transform 
                                hover:scale-125 
                                hover:-translate-x-10 
                                hover:-translate-y-10
                                duration-200
                                project-picture
                                opacity-60
                                hover:opacity-90
                            
                            "/>
                        </div>

                    </div>

                </div>
                            
            </div>
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