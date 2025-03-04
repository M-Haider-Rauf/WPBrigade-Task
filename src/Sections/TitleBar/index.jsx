export function TitleBar() {
    return(
        <div className="flex flex-row w-full h-20 bg-green-700 justify-between items-center pl-30">
            <p1 className="font-impact text-white text-4xl">Home Page</p1>
            <div className="flex flex-col bg-white h-full w-130 justify-center pl-10">
                <p1 className="font-impact text-xs text-green-700 ml-6">Partnership By</p1>
                <img src="./src/assets/reebok.png" className="w-36"/>
            </div>
        </div>
    )
} 