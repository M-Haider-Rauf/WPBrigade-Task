export function PostSmall(props) {
    return(
        <div className="flex flex-col h-72 w-50">
            <div className="flex h-30 w-full">
                <img src={props.img} />
            </div>
            <div className="flex flex-col px-2 py-4 bg-green-600 h-30 w-full">
                <p className="font-impact text-white uppercase">{props.title}</p>
                <p className="text-white">{props.content}</p>
            </div>
            <div className="flex w-full h-12 justify-center items-center bg-green-800">
                <p className="font-impact text-white uppercase">Read More</p>
            </div>
        </div>
    )
}