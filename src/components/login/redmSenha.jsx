import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {  useNavigate } from "react-router-dom";
import { Header } from "../header";

export const RedmSenha = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch } = useForm();

  const onSubmit = (data) => {
    console.log("User Data:", data);
    alert("Login successful!");
    navigate("/"); 
  };

  return (
    <div>

   
        <Header/>
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-green-500 to-green-600">
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
          Redifinir Senha
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-gray-700">
              Nova Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua nova senha"
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
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <div>
          <label htmlFor="confirmPassword" className="block text-gray-700">Confirmar Senha</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirme sua senha nova senha"
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
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded mt-4 hover:bg-green-600 transition duration-300"
          >
            Redifinir Senha
          </button>

        </form>
      </motion.div>
    </div>
    </div>
  );
};
