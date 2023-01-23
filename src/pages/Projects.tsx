import { SyntheticEvent, useEffect } from "react";
import Nav from "../components/Nav";
import Project from "../components/Project";
import "./css/Projects.css"



// transition handler for RGBScript
const handleClickRGBScript = (e:SyntheticEvent) => {
    e.preventDefault();

    const images = document.getElementsByClassName("project-image")

    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove("opacity-50")
        images[i].classList.add("opacity-0")
    }

    const header = document.getElementById("RBGScript-project-header")

    if (header == null) return

    header.classList.remove("opacity-60")
    header.classList.add("opacity-0")

    // navigate to RGBScript page
    setTimeout(() => {
        location.replace("RGBScript")
    }, 5000)
   
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
                    <div id="RGBScript-project-header" className="grid grid-cols-3">
                        <div className="
                        text-3xl
                        text-blue
                        transition transform
                        opacity-60

                        hover:translate-x-10
                        hover:scale-125
                        hover:opacity-90

                        glassmorphism
                        px-5 py-5 mr-10 

                        h-full

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

                <div id="Tau-project" className="mt-10 mx-5">

                    <div id="Tau-project-header" className="grid grid-cols-3">
                        <div className="
                            text-3xl
                            text-blue
                            transition transform
                            opacity-60

                            hover:translate-x-10
                            hover:scale-125
                            hover:opacity-90

                            glassmorphism
                            px-5 py-5 mr-10 

                            h-full

                            "
                            onClick={handleClickRGBScript}
                            >
                                Tau <span className="text-xl text-slate-500"> <br/>A Discord bot written with Discord.js</span>
                                <div className="mt-10 text-slate-400 text-lg">Tau is a fully-featured discord bot with music playing functionality, moderation capabilities, and other utilities. 
                                Tau is written in TypeScript and runs with Node.js with transpilation to JavaScript.</div>
                            </div>
                            <div id="RBGScript-project-pictures" className="col-span-2 grid grid-cols-2 grid-rows-2 gap-2 mr-5">
                                <ProjectImage src={"/RGBScript/RGBScript-1.jpg"} alt={""} bg={"bg-ide"} xDir={1} yDir={1}/>
                                <ProjectImage src={"/RGBScript/RGBScript-2.jpg"} alt={""} bg={"bg-ide"} xDir={-1} yDir={1}/>
                                <ProjectImage src={"/RGBScript/RGBScript-3.jpg"} alt={""} bg={"bg-ide"} xDir={1} yDir={-1}/>
                                <ProjectImage src={"/RGBScript/RGBScript-4.jpg"} alt={""} bg={"bg-ide"} xDir={-1} yDir={-1}/>
                            </div>


                    </div>


                </div>

                <div id="Critterworld-project" className="mt-10 mx-5">

                    <div id="Critterworld-header" className="grid grid-cols-3">
                        <div className="
                            text-3xl
                            text-blue
                            transition transform
                            opacity-60

                            hover:translate-x-10
                            hover:scale-125
                            hover:opacity-90

                            glassmorphism
                            px-5 py-5 mr-10 

                            h-full

                            "
                            onClick={handleClickRGBScript}
                            >
                                Critterworld <span className="text-xl text-slate-500"> <br/>An evolution simulator written in Java.</span>
                                <div className="mt-10 text-slate-400 text-lg">Critter world is an evolution simulator written in Java, featuring a recursive descent parsed programming language to model the behavior of subjects.</div>
                            </div>
                            <div id="Critterworld-project-pictures" className="col-span-2 grid grid-cols-2 grid-rows-2 gap-2 mr-5">
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

    let classesArr: string[] = [
        'transition',
        'opacity-60',
        'transform',
        'scale-90',
        'flex',
        'justify-center',
        'items-center',
        'rounded-lg',
        'z-0',
        'hover:z-10',
        'hover:opacity-90',
        'hover:scale-150',
        'project-image',
        props.bg
    ]

    if (props.xDir == 1) {
        classesArr.push("hover:translate-x-14")
    }
    else if (props.xDir == -1) {
        classesArr.push("hover:-translate-x-14")
    }

    if (props.yDir == 1) {
        classesArr.push("hover:translate-y-14")
    }
    else if (props.yDir == -1) {
        classesArr.push("hover:-translate-y-14")
    }


    let classes:string = "";

    classesArr.forEach((c) => {
        classes += c + " ";
    })
    

    return (
        <div className={classes}>
            <img src={props.src} alt={props.alt}/>
        </div>
    )
}