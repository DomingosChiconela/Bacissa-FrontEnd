import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Header } from "../header";

export const PasswordRecoveryForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Password Recovery Data:", data);
    alert("Instruções para recuperação de senha foram enviadas para o seu email.");
    navigate("/");
  };

  return (
    <div className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 shadow-2xl min-h-screen">
      <Header />
      <div className="flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-80 md:w-full max-w-lg p-6 bg-white rounded-lg shadow-md"
        >
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
            Bacissa
          </h1>
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
            Recuperar Senha
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
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
                placeholder="Digite seu email"
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded mt-4 hover:bg-green-600 transition duration-300"
            >
              Enviar
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
