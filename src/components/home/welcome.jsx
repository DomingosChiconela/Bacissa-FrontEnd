import BgVideo from "../Media/Reciclagem.mp4"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import '../animations.css'
import { ArrowCircleDown } from "@phosphor-icons/react"

export const Welcome = () => {
    return (
        <div>
            <video src={BgVideo} autoPlay muted loop />        
        <div className="absolute w-full top-10  h-56 md:h-px  text-white ">
                
                <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.0, delay: 0.2 }}
            className="flex flex-col items-center justify-center pt-8  md:pt-52"
          >
            <h1 className="text-2xl font-bold my-2 text-center items-center text-white rounded-lg px-2 h-8  bg-slate-500/50 md:bg-slate-500/30">Bem-vindo ao Bacissa</h1>
            

            <Link to="/login">
              <button className="flex relative mt-12 md:mt-20 justify-center items-center bg-black/60 text-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-colors duration-300">
              <ArrowCircleDown/>
              </button>
            </Link>
            

           
          </motion.div> 


            </div>
        </div>
    )
}