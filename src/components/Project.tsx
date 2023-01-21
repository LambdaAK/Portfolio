
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

        <div className="px-10">
            <div className="text-blue text-5xl pb-16 text-left relative translate-x-12">{props.title}</div>

                <div className="grid grid-cols-3">

                    <div className="grid grid-rows-2">

                        <div className="text-5xl ">{props.title}</div>
                        <div className="text-3xl text-slate-400">{props.description}</div>


                    </div>

                    <div className="col-span-2">
                    <Splide>
                                            {elements}
                                        </Splide>


                    </div>


                    

                </div>



        </div>

        
                
    )

}