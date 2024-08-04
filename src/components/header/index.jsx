import { NavBar } from "./nav-bar"

export const Header = () => {
    return (
        <header className="flex w-full h-10 bg-black text-base md:text-lg text-white justify-between items-center ">
            <h1 className="p-2">Bacissa</h1>
            <NavBar/>
        </header>
    )
}