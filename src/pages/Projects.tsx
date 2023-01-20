import Project from "../components/Project";

export default function Projects() {



    





    return (
        <div>
            <div className="text-5xl text-blue text-left pb-20"> My Projects</div>

                    <Project 
                    title="RGBScript" 
                    description={"An interpreted programming language written in Java"} 
                    githubLink={"www.google.com"} 
                    images={["code3.jpg"]} 
                    />    
        </div>
        
    )

}