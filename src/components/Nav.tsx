import { useEffect } from "react"
import Computer from "./icons/Computer"
import Home from "./icons/Home"
import Person from "./icons/Person"

export default function Nav() {

    useEffect(() => {


        setTimeout(() => {

            const bar: HTMLElement|null = document.getElementById("nav-bar")

            if (bar == null) return;

            bar.classList.remove("opacity-0")
            bar.classList.add("opacity-100")

        }, 1000)
    })


    return (

        <div id="nav-bar" className="opacity-0 transition transform duration-1000">
            <div className="flex justify-center">
                <div><Link href="/about" content="About Me" icon={Person}/></div>
                <div className="ml-20"><Link href="/" content="Home" icon={Home}/></div>
                <div className="ml-20"><Link href="/projects" content="Projects" icon={Computer}/></div>
            </div>
            <hr className="mt-3"/>
        </div>

        
    )
}


interface LinkProps {
    href: string,
    content: string,
    icon: React.FC
}


function Link(props: LinkProps) {

    return (

            <div className="
            relative
                                
            text-blue text-5xl  rounded-lg

            px-5
                                
            ring ring-slate-500

            opacity-40

            transition

            transform

            glassmorphism

            hover:opacity-90 hover:-translate-y-2
            
            flex
            ">

                <a href={props.href} className="">{props.content}</a>
                <props.icon/>
            </div>

            
            
    )

    
}

