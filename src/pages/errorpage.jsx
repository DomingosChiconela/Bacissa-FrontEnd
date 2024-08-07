import { Header } from "../components/header";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <main className="main ">
        <div className="flex h-[80vh] justify-center items-center flex-col ">
          <img src="https://img.freepik.com/free-photo/cancel-icon-right-side-white-background_187299-40277.jpg?t=st=1723044084~exp=1723047684~hmac=5139b7d1a078077dbcb38d52a34417009d1556802e0f84b43743552a0d3392f1&w=826" alt="Imagem de erro" className="w-[40%] md:w-[38%] lg:w-[25%] xl:w-[20%]" />
          <div className="border-b-black flex justify-center flex-col">
            <strong className="text-7xl flex justify-center lg:text-8xl text-orange-400">OOPS</strong>
            <p className="text-center text-2xl mt-12">Página não encontrada!</p>
            <div className="flex justify-center items-center">
              <button
                onClick={() => navigate(-1)}
                className="text-white text-sm border-black border-spacing-4 shadow-lg rounded-2xl bg-indigo-700 w-40 h-10 hover:bg-indigo-950 hover:transition-all duration-500 ease-in-out hover:duration-200 hover:ease-in-out hover:w-44 mt-11 hover:mt-12 hover:shadow-2xl hover:rounded-3xl"
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
