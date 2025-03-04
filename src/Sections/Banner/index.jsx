import { IoCloseCircle } from "react-icons/io5";

export function Banner() {
    return(
        <div className="fixed top-0 left-0 z-50 flex flex-row justify-between items-center w-full bg-white h-10">
            <div></div>
            <p className="text-black font-bold">
                LIVE RACE STREAM FROM GATOR NATIONALS IN SARASOTA, FL / <span className="text-green-700 underline">WATCH NOW</span>
            </p>
            <div className="mr-4">
                <IoCloseCircle color="#15803d" size={24}/>
            </div>
        </div>
    );
}