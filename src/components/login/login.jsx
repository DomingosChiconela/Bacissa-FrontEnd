import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../header";
import Modal from 'react-modal';
import { useState } from 'react';
import { useAuth } from "../../AuthContext";
import { httpClient } from "../../axios/axios";

Modal.setAppElement('#root'); 

export const LoginForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false); 



  const onSubmit = async(data) => {
    try {
        console.log(data)
      const response = await httpClient.post("/api/auth/login",{
        email: data.email,
        password: data.password
      });
      if(response.status == 200){
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      navigate('/residuos');
      }
   
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Falha ao realizar login. Verifique suas credenciais e tente novamente.');
    }
    
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-green-500 to-green-600 shadow-2xl">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-80 md:w-full max-w-lg p-6 bg-white rounded-lg shadow-2xl"
        >
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Bacissa</h1>
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email é obrigatório",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Email inválido",
                  },
                })}
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: "Password é obrigatório",
                  minLength: {
                    value: 8,
                    message: "Password deve ter pelo menos 8 caracteres",
                  },
                })}
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>
            <Link to={"/login/forgotpass"}>
            <div className="text-black-600 hover:text-green-600 hover:underline mt-1">
              Esqueci-me da Password
              </div></Link>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded mt-4 hover:bg-green-600 transition duration-300"
            >
              Login
            </button>
            <Link to={"/login/sing-up"}>
              <button
                type="button"
                className="w-full py-2  hover:text-green-900/90 rounded mt-4 transition duration-300"
              >
                Criar conta
              </button>
            </Link>
          </form>
        </motion.div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        overlayClassName="fixed inset-0"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-blue-600">Login bem-sucedido!</h2>
          <p className="mt-2 text-gray-700">Você será redirecionado para a página inicial.</p>
        
          <button
            onClick={closeModal}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Fechar
          </button>
        </div>
      </Modal>
    </div>
  );
};
