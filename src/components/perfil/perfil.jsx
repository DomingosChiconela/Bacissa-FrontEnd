import { motion } from "framer-motion"
import Img from "../Media/perfil.jpg";




export const Perfil = () => {
    return (
        <motion.div>
          <div className="">
            <img src={Img} alt="" className="w-36 h-36 rounded-full mt-36 items-center "/>
           <div>
           <label htmlFor="name" className="block text-black ">Nome Completo</label>
           <div className="flex items-center border border-slate-900 rounded-2xl  w-40 bg-gray-100">
           <span id="name" className="text-gray-400 font-light text-center text-sm ml-6">Nome completo</span>
  </div>
  </div>
  <div className="relative">
    <label htmlFor="location" className="block text-black">Região</label>
    <div className="flex items-center border border-slate-900 rounded-2xl  w-40 bg-gray-100">
           <span id="location" className="text-gray-400 font-light text-center text-sm ml-6">Região</span>
  </div>
           </div>
           <button
    type="submit"
    className="w-40 bg-cyan-500 text-black text-sm py-1 px-1 rounded-2xl mt-20 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    Editar Informações
  </button>
  </div>

        </motion.div>
    )
}