export function EventList(props) {
    return(
        <div className="flex flex-col w-56">
            <div className="flex w-full bg-green-800 p-2">
                <p className="font-impact text-white uppercase text-2xl">Events</p>
            </div>
            <ul className="flex flex-col bg-green-700 px-2 py-2 gap-y-3">
            {
                props.data.map(value => (
                    <li className="flex flex-col">
                        <p className="font-impact text-lg text-white uppercase underline">{value.name}</p>
                        <p className="text-white text-sm">{value.location}</p>
                    </li>
                ))
            }
            </ul>
        </div>
    );
}