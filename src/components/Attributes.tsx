import { useEffect, useState } from "react";
import sleep from "../util/sleep";

interface AttributeProps {
    num: number
}


const attributeCollection = [
    "Pronouns: He/Him",
    "Age: 18",
    "Location: Ithaca, NY",
    "Current School: Cornell University, Bowers CIS",
    "Area of study: Computer Science and Mathematics",
    "Interests: Programming language design, web development, mathematics",
    "Hobbies: Programming, music, Rubik's cube"
]


const max = attributeCollection.length - 1;


export default function Attributes() {

    const [num, setNum] = useState(0)
    
    // make this element scroll through the attributes
    // every 5 seconds


    useEffect(() => {
        const f  = async () => {
            await sleep(4000)

            // change opacity

            const attributes: HTMLElement|null = document.getElementById("attributes")
            if (attributes == null) return

            attributes.classList.remove("opacity-100")
            attributes.classList.add("opacity-0")

            await sleep(1000)

            // change the attribute
            if (num == max) {
                setNum(0)
            } else {
                setNum(num + 1)
            }

            // put the opacity back  
            attributes.classList.remove("opacity-0")
            attributes.classList.add("opacity-100")
            await sleep(1000)

            f() // tail recursion so constant stack space
        }

        f()
    }, [])


    return (
        <div id="attributes" className="transition-all transform opacity-100 duration-1000">
            <Attribute num={num} />
        </div>
    )
}


function Attribute(props: AttributeProps) {
    return (
        <div className="flex justify-center">
            <span className="text-4xl text-green-400">
                {attributeCollection[props.num]}
            </span>
        </div>
    )
}