import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function PostSlider() {

    return (
      <Carousel showArrows showThumbs={false} infiniteLoop={true} width={600}>
        <div className="flex flex-row justify-evenly items-center h-48">
          <div className="flex flex-row h-24 w-24 bg-green-900">
            <img src="./thubnail-slider-img.png" />
          </div>
          <div className="flex flex-row h-24 w-24 bg-green-900">
            <img src="./thubnail-slider-img.png" />
          </div>
          <div className="flex flex-row h-24 w-24 bg-green-900">
            <img src="./thubnail-slider-img.png" />
          </div>
          <div className="flex flex-row h-24 w-24 bg-green-900">
            <img src="./thubnail-slider-img.png" />
          </div>
        </div>
        <div className="flex flex-row justify-evenly items-center h-48">
          <div className="flex flex-row h-24 w-24 bg-green-900">
            <img src="./thubnail-slider-img.png" />
          </div>
          <div className="flex flex-row h-24 w-24 bg-green-900">
            <img src="./thubnail-slider-img.png" />
          </div>
          <div className="flex flex-row h-24 w-24 bg-green-900">
            <img src="./thubnail-slider-img.png" />
          </div>
          <div className="flex flex-row h-24 w-24 bg-green-900">
            <img src="./thubnail-slider-img.png" />
          </div>
        </div>
        <div className="flex flex-row justify-evenly items-center h-48">
          <div className="flex flex-row h-24 w-24 bg-green-900">
            <img src="./thubnail-slider-img.png" />
          </div>
          <div className="flex flex-row h-24 w-24 bg-green-900">
            <img src="./thubnail-slider-img.png" />
          </div>
          <div className="flex flex-row h-24 w-24 bg-green-900">
            <img src="./thubnail-slider-img.png" />
          </div>
          <div className="flex flex-row h-24 w-24 bg-green-900">
            <img src="./thubnail-slider-img.png" />
          </div>
        </div>
        <div className="flex flex-row justify-evenly items-center h-48">
          <div className="flex flex-row h-24 w-24 bg-green-900">
            <img src="./thubnail-slider-img.png" />
          </div>
          <div className="flex flex-row h-24 w-24 bg-green-900">
            <img src="./thubnail-slider-img.png" />
          </div>
          <div className="flex flex-row h-24 w-24 bg-green-900">
            <img src="./thubnail-slider-img.png" />
          </div>
          <div className="flex flex-row h-24 w-24 bg-green-900">
            <img src="./thubnail-slider-img.png" />
          </div>
        </div>
      </Carousel>
    );
  }