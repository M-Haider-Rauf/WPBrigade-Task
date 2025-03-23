export function EventList(props) {
    return(
        <div className="flex flex-col w-48">
            <div className="flex w-full bg-green-800 p-2">
                <p className="font-impact text-white uppercase">Events</p>
            </div>
            <ul className="flex flex-col bg-green-700 px-2 py-4 gap-y-2">
            {
                props.data.map(value => (
                    <li className="flex flex-col">
                        <p className="font-impact text-sm text-white uppercase underline">{value.name}</p>
                        <p className="text-white text-xs">{value.location}</p>
                    </li>
                ))
            }
            </ul>
        </div>
    );
}