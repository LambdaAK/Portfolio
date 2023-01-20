import { useEffect } from "react"
import Attributes from "./Attributes";



export default function TitleBar() {


    useEffect(() => {


        setTimeout(() => {
            const bar: HTMLElement|null = document.getElementById("title-bar")

                    if (bar == null) return;

                    bar.classList.remove("opacity-0")
                    bar.classList.add("opacity-100")

        }, 1500)

        setTimeout(() => {
            const bar: HTMLElement|null = document.getElementById("title-description")

                    if (bar == null) return;

                    bar.classList.remove("opacity-0")
                    bar.classList.add("opacity-100")

        }, 3000)

        // make the attributes element appear after 4500
        setTimeout(() => {
            const bar: HTMLElement|null = document.getElementById("attributes-wrapper")

                    if (bar == null) return;

                    bar.classList.remove("opacity-0")
                    bar.classList.add("opacity-100")

        }, 4500)

    }, [])


    return(
        <div className="">

                <span id="title-bar" className=" text-blue flex justify-center pb-12 text-9xl opacity-0 transition transform duration-1000">
                    
                    Alex Kozik
                    
                </span>

                

                <span id="title-description" className="text-4xl flex justify-center text-slate-500 opacity-0 transition transform duration-1000">

                    Aspiring Software Engineer

                </span>

                <span id="attributes-wrapper" className="flex justify-center pt-10 opacity-0 transition transform duration-1000">

                    <Attributes/>

                </span>

                

        </div>
    )
}