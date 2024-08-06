import { Header } from "../components/header"
import { Welcome } from "../components/home/welcome"
import { Featured } from "../components/slider/slider"

export const Home = () => {
    return (
        <>
        <Header/>
        <Welcome/>
        <Featured/>
        </>
    )
}