import { NavBar } from "./nav-bar"

export const Header = () => {
    return (
        <header className="flex  w-full h-12 md:h-16 bg-black text-base md:text-lg text-white justify-between items-center ">
            <h1 className="p-2 md:p-6 md:font-bold">Bacissa</h1>
            <NavBar/>
        </header>
    )
}