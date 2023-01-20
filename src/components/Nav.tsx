

export default function Nav() {
    return (
        <div className="flex justify-center">


            <div><Link href="#about" content="About Me"/></div>
            <div className="ml-20 rotate"><Link href="#projects" content="Projects"/></div>

            
            

        </div>
    )
}


interface LinkProps {
    href: string,
    content: string
}


function Link(props: LinkProps) {

    return (

            <div className="
            
            relative
                                
            text-blue text-5xl  rounded-lg

            px-5 py-3
                                
            ring ring-slate-500

            opacity-40

            transition

            transform

            hover:opacity-100 hover:rotate-12
            
            
            ">

                <a href={props.href} className="">{props.content}</a>


            </div>

            
            
    )

    
}