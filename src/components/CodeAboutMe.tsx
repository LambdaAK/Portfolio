
interface WrapperProps {
    data:object
}

function Wrapper(props:WrapperProps) {
    

    const element:JSX.Element = <div>{JSON.stringify(props.data)}</div>



    


}




const data:object = {
    pronouns: ["He", "Him"],
    hobbies: [
        "coding",
        "making music",
        "crypto",
        "Rubik's cube"
    ]
}


export default function CodeAboutMe() {
    return (
        
       

        <code className="language-javascript">
                        {
                            JSON.stringify(data)
                        }

                    </code>

   

            

        
    )
}