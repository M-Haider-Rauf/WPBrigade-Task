import { SkewedButton } from "../../Components/SkewedButton/SkewedButton";

export function LogoBar() {
    return(
        <div className="flex flex-row w-full h-14 bg-green-900 justify-around items-center">
            <img src="./logo-white.svg" className="h-8"/>
            <div className="flex flex-row space-x-4">
                <SkewedButton small>Login</SkewedButton>
                <SkewedButton small>Account</SkewedButton>
            </div>
        </div>
    )
}