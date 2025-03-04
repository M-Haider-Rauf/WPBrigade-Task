export function SkewedButton(props) {
    const classes = `${props.small ? 'h-10' : 'h-14'} w-36 bg-green-800 hover:bg-green-600 -skew-x-12 flex justify-center items-center`;

    return(
        <div className={classes}>
            <p className="skew-x-12 font-impact uppercase text-gray-100">{props.children}</p>
        </div>
    );
}