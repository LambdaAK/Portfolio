import { useEffect } from "react"
import RightChevron from "./icons/RightChevron";


export default function Welcome() {



    useEffect(() => {
        setTimeout(() => {

            const bar: HTMLElement|null = document.getElementById("welcome")

                                if (bar == null) return;

                                bar.classList.remove("opacity-0")
                                bar.classList.add("opacity-100")


        }, 6000)
    })





    return (
        <div id="welcome" className="text-9xl text-blue opacity-0 transition transform duration-1000">

            Welcome to my website

        </div>
    )


}