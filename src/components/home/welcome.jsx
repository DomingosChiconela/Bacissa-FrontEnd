import BgVideo from "../Media/Reciclagem.mp4";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { ArrowCircleDown } from "@phosphor-icons/react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import '../animations.css';

export const Welcome = () => {
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted); 
        }
    };

    return (
        <div className="w-full">
            <motion.div
                initial={{ y: '-50%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="relative w-full"
            >
                <video
                    ref={videoRef}
                    src={BgVideo}
                    autoPlay
                    muted={isMuted}
                    loop
                    className="w-full  object-cover"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2.0, delay: 0.2 }}
                        className="flex flex-col items-center justify-center pt-16 md:pt-24"
                    >
                <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2.0, delay: 2.5 }}
                    onClick={toggleMute}
                    className="absolute top-4 left-4 bg-black/50 text-white px-4 py-2 rounded-full hover:bg-black/80 transition-colors duration-300"
                >
                    {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
                </motion.button>
                        <h1 className="text-xl md:text-2xl xl:text-3xl font-bold my-2 text-center items-center text-white rounded-lg px-2 h-8">
                            Bem-vindo ao Bacissa
                        </h1>

                        <Link to="/residuos">
                            <button className="flex relative mt-4 md:mt-20 justify-center items-center bg-black/60 text-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-colors duration-300">
                                <ArrowCircleDown />
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>

            < motion.div 
            initial={{ y: '50%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.0 }}
            className="bg-gray-100 py-12">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-center text-2xl md:text-3xl xl:text-4xl font-bold text-gray-800 mb-8">
                        Sobre a Bacissa
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-lg font-semibold mb-2 text-blue-600">
                                Nossa Missão
                            </h3>
                            <p className="text-gray-700">
                                A Bacissa é uma aplicação dedicada à reciclagem de resíduos sólidos.
                                Nossa missão é promover práticas sustentáveis de gestão de resíduos,
                                ajudando indivíduos e organizações a minimizar seu impacto ambiental e
                                transformar resíduos em recursos valiosos.
                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-lg font-semibold mb-2 text-blue-600">
                                Conexões Locais
                            </h3>
                            <p className="text-gray-700">
                                Conectamos usuários a centros de reciclagem locais para facilitar o
                                descarte adequado de materiais, garantindo que os resíduos sejam tratados
                                corretamente e contribuindo para a economia circular.
                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-lg font-semibold mb-2 text-blue-600">
                                Educação e Consciência
                            </h3>
                            <p className="text-gray-700">
                                Promovemos a conscientização ambiental através de campanhas e eventos
                                comunitários, e fornecemos recursos educacionais para ajudar escolas e
                                organizações a implementar programas de reciclagem eficazes.
                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-lg font-semibold mb-2 text-blue-600">
                                Ajuda
                            </h3>
                            <p className="text-gray-700">
                               Se precisarem de outro Card podem replicar essa div varias vezes
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
