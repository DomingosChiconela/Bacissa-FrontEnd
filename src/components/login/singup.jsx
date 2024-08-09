import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Header } from "../header";
import Modal from 'react-modal';
import { useState } from 'react';
import { useAuth } from "../../AuthContext";

Modal.setAppElement('#root');

export const RegisterForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const { login } = useAuth();
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    console.log("User Registration Data:", data);

    try {
      // Integrar api aqui boss nao sei se esta bem mas tentei
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erro ao registrar usuário");
      }

      login({ name: data.name, email: data.email });
      setIsSuccessModalOpen(true);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error("Erro de registro:", error);
      setErrorMessage("Erro ao registrar usuário. Tente novamente.");
      setIsErrorModalOpen(true);
    }
  };

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };

  const closeErrorModal = () => {
    setIsErrorModalOpen(false);
  };

  return (
    <div className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500 min-h-screen">
      <Header />
      <div className="flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-80 md:w-full max-w-lg p-6 bg-white rounded-lg shadow-md"
        >
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Bacissa</h1>
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Registrar</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">Nome</label>
              <input
                type="text"
                id="name"
                placeholder="Digite seu nome"
                {...register("name", {
                  required: "Nome é obrigatório",
                  minLength: {
                    value: 3,
                    message: "Nome deve ter mais de 2 letras",
                  },
                })}
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Digite seu email"
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
              <label htmlFor="password" className="block text-gray-700">Senha</label>
              <input
                type="password"
                id="password"
                placeholder="Digite sua senha"
                {...register("password", {
                  required: "Senha é obrigatória",
                  minLength: {
                    value: 8,
                    message: "Senha deve ter pelo menos 8 caracteres",
                  },
                })}
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-gray-700">Confirmar Senha</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirme sua senha"
                {...register("confirmPassword", {
                  required: "Confirmação de senha é obrigatória",
                  validate: value => value === watch("password") || "As senhas não coincidem",
                })}
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="region" className="block text-gray-700">Região</label>
              <input
                type="text"
                id="region"
                placeholder="Digite sua região"
                {...register("region", {
                  required: "Região é obrigatória",
                  minLength: {
                    value: 3,
                    message: "Região deve ter mais de 2 letras",
                  },
                })}
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
              />
              {errors.region && (
                <p className="text-red-500 text-sm mt-1">{errors.region.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded mt-4 hover:bg-blue-600 transition duration-300"
            >
              Registrar
            </button>
          </form>
        </motion.div>
      </div>

      <Modal
        isOpen={isSuccessModalOpen}
        onRequestClose={closeSuccessModal}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        overlayClassName="fixed inset-0"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-blue-600">Registro bem-sucedido!</h2>
          <p className="mt-2 text-gray-700">Você será redirecionado para a página inicial.</p>
          <button
            onClick={closeSuccessModal}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Fechar
          </button>
        </div>
      </Modal>

      <Modal
        isOpen={isErrorModalOpen}
        onRequestClose={closeErrorModal}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        overlayClassName="fixed inset-0"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-red-600">Erro ao Registrar!</h2>
          <p className="mt-2 text-gray-700">{errorMessage}</p>
          <button
            onClick={closeErrorModal}
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
          >
            Fechar
          </button>
        </div>
      </Modal>
    </div>
  );
};
