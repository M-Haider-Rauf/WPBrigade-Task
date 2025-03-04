export function Post(props) {
    return (
        <li className="flex flex-row w-2/3 h-60 justify-center items-center even:flex-row-reverse">
            <div className="flex h-full w-1/2 justify-center bg-white">
                <img className="object-contain" src={props.image} />
            </div>
            <div className="h-full w-1/2 px-4 flex flex-col justify-center items-start bg-green-700 ">
                <p className="font-impact text-white">{props.title}</p>
                <p className="font-mono text-white">{props.description}</p>
            </div>
        </li>
    )
}