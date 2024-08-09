import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ArrowCircleDown } from "@phosphor-icons/react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import "../animations.css";
import bgVideo from "../Media/Reciclagem.mp4";
import { Link } from "react-router-dom";
import { useAuth } from "../../AuthContext";

export const Welcome = () => {
  const { user } = useAuth();
  const [isMuted, setIsMuted] = useState(true);
  const [setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const aboutRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const smoothScrollTo = (element, duration) => {
    const start = window.scrollY;
    const end = element.getBoundingClientRect().top + window.scrollY;
    const distance = end - start;
    let startTime = null;

    const scroll = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = progress * (2 - progress);
      window.scrollTo(0, start + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  };

  const scrollToAbout = () => {
    if (aboutRef.current) {
      smoothScrollTo(aboutRef.current, 1200);
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoElement.play();
          setIsPlaying(true);
        } else {
          videoElement.pause();
          setIsPlaying(false);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, );

  return (
    <div className="w-full">
      <motion.div
        initial={{ y: "-50%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative w-full"
      >
        <video
          ref={videoRef}
          src={bgVideo}
          muted={isMuted}
          loop
          className="w-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.0, delay: 1.0 }}
            className="flex flex-col items-center justify-center pt-16 md:pt-0"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2.0, delay: 3.5 }}
              onClick={toggleMute}
              className="absolute top-4 left-4 bg-black/50 text-white px-4 py-2 rounded-full hover:bg-black/80 transition-colors duration-300"
            >
              {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
            </motion.button>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-white rounded-lg px-2">
              Bem-vindo ao Bacissa
            </h1>

            <button
              onClick={scrollToAbout}
              className="relative mt-6 md:mt-16 xl:mt-32 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-blue-600/80 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-110 duration-300"
            >
              <ArrowCircleDown size={32} color="#fff" />
            </button>

            {!user && (
              <Link to={"/login"}>
                <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300">
                  Iniciar Sessão
                </button>
              </Link>
            )}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: "50%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="bg-gray-100 py-12"
        ref={aboutRef}
        id="about-section"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-2xl md:text-3xl xl:text-4xl font-bold text-gray-800 mb-8">
            Sobre a Bacissa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-green-600">
                O que é o Bacissa
              </h3>
              <p className="text-gray-700">
                A Bacissa é uma aplicação dedicada à reciclagem de resíduos
                sólidos, oferecendo uma plataforma fácil de usar para encontrar
                centros de reciclagem e monitorar atividades.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-green-600">
                Nossa missão
              </h3>
              <p className="text-gray-700">
                Nossa missão é promover práticas sustentáveis de gestão de
                resíduos, ajudando indivíduos e organizações a minimizar seu
                impacto ambiental e transformar resíduos em recursos valiosos.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-green-600">
                Conexões Locais
              </h3>
              <p className="text-gray-700">
                Conectamos usuários a centros de reciclagem locais para
                facilitar o descarte adequado de materiais, garantindo que os
                resíduos sejam tratados corretamente e contribuindo para a
                economia circular.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-green-600">
                Educação e Consciência
              </h3>
              <p className="text-gray-700">
                Promovemos a conscientização ambiental através de campanhas e
                eventos comunitários, e fornecemos recursos educacionais para
                ajudar escolas e organizações a implementar programas de
                reciclagem eficazes.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-green-600">
                Características da Aplicação
              </h3>
              <p className="text-gray-700">
                A Bacissa oferece uma interface intuitiva, monitoramento de
                atividades de reciclagem, notificações sobre eventos e
                integração com centros locais de reciclagem.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-green-600">
                Benefícios da Bacissa
              </h3>
              <p className="text-gray-700">
                Contribua para um impacto ambiental positivo, aumente sua
                conscientização e faça parte de uma comunidade engajada em
                práticas sustentáveis.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
