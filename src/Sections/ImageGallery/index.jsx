import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { FaPlayCircle } from 'react-icons/fa';

const data = {
    title: "Get ready for new Adidas Brand",
    description: "Adidas track all begin with a starting date and end with a finish line, but everything in between varies from track to track. Because no two tracks are alike, this action sport keeps you on your toes wherever you're racing."
}

export function ImageGallery() {
    return (
        <Carousel showArrows showThumbs={false} infiniteLoop={true}>
            <div className="w-full flex flex-row justify-center items-center h-130 gap-x-8 px-30 bg-[url(/hero-bg.png)] bg-green-900/60 bg-blend-darken">
                <div className="flex flex-col w-1/3 gap-y-4 text-left justify-around items-center">
                    <p className="font-impact text-white text-3xl">{data.title}</p>
                    <p className="font-sans text-white text-l">{data.description}</p>
                </div>
                <div className="h-70 w-70 flex justify-center items-center">
                    <img src="./video-thumbnail-img.png" />
                    <div className="relative z-20 bottom-5 right-40 hover:cursor-pointer" 
                        onClick={() => window.open("https://www.youtube.com/watch?v=wQZQADpna9Q&t=58s")}
                    > 
                        <FaPlayCircle color="black" opacity={0.7} size={54} />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-row justify-center items-center h-130 gap-x-8 px-30 bg-[url(/hero-bg.png)] bg-green-900/60 bg-blend-darken">
                <div className="flex flex-col w-1/3 gap-y-4 text-left justify-around items-center">
                    <p className="font-impact text-white text-3xl">{data.title}</p>
                    <p className="font-sans text-white text-l">{data.description}</p>
                </div>
                <div className="h-70 w-70 flex justify-center items-center">
                    <img src="./video-thumbnail-img.png" />
                    <div className="relative z-20 bottom-5 right-40"> 
                        <FaPlayCircle color="black" opacity={0.7} size={54} />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-row justify-center items-center h-130 gap-x-8 px-30 bg-[url(/hero-bg.png)] bg-green-900/60 bg-blend-darken">
                <div className="flex flex-col w-1/3 gap-y-4 text-left justify-around items-center">
                    <p className="font-impact text-white text-3xl">{data.title}</p>
                    <p className="font-sans text-white text-l">{data.description}</p>
                </div>
                <div className="h-70 w-70 flex justify-center items-center">
                    <img src="./video-thumbnail-img.png" />
                    <div className="relative z-20 bottom-5 right-40"> 
                        <FaPlayCircle color="black" opacity={0.7} size={54} />
                    </div>
                </div>
            </div>
        </Carousel>
    );
}