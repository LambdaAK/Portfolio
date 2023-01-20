
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import { ReactElement, useEffect } from 'react';




// this component is a showcase for one project
// it is used in the Projects component
// it will take the following props
// an array of pictures of the project
// a title
// a description
// a link to the project (github)


interface ProjectProps {
    title: string,
    description: string,
    githubLink: string,
    images: string[],
}



export default function Project(props: ProjectProps) {

    

        // render each picture

        const elements:ReactElement[] = []

        props.images.forEach((image: string) => {
            elements.push(
                <SplideSlide>
                    <img src={image} />
                </SplideSlide>
            )

        })
            

    return (
        // display an image

        <div className="grid grid-cols-3">

            <div>
                <div className="text-green-500 text-4xl pb-16">{props.title}</div>
                <div className="text-green-400 text-3xl">{props.description}</div>
            </div>

            
            <div className="col-span-2">
                <Splide aria-label={props.title}>     
                    {elements}
                </Splide>  
            </div>
            
        </div>
                
    )

}