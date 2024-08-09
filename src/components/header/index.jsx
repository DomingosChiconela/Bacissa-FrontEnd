import { Link } from "react-router-dom"
import { NavBar } from "./nav-bar"

export const Header = () => {
    return (
        <header className="flex  w-full h-12 md:h-16 bg-zinc-900 text-base md:text-lg text-white justify-between items-center ">
            <Link to={"/"}>
            <h1 className="p-2 md:p-6 md:font-bold hover:text-blue-600 transition-all duration-300 ease-in-out">Bacissa</h1>
            </Link>
            <NavBar/>
        </header>
    )
}