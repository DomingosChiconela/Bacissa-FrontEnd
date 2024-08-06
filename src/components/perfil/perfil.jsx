import { motion } from "framer-motion";
import { useState } from "react";
import Img from "../Media/perfil.jpg";

export const Perfil = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [perfilData, setPerfilData] = useState({
    nome: "Beto Dias",
    regiao: "Maputo",
    imagem: Img,
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (novoNome, novaRegiao, novaImagem) => {
    setPerfilData({ nome: novoNome, regiao: novaRegiao, imagem: novaImagem });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const EditForm = () => {
    const [newNome, setNewNome] = useState(perfilData.nome);
    const [newRegiao, setNewRegiao] = useState(perfilData.regiao);
    const [newImagem, setNewImagem] = useState(perfilData.imagem);

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setNewImagem(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };

    return (
      <div className="flex flex-col gap-4">
        <h2>Imagem de Perfil:</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-80 p-2 border text-center border-gray-300 rounded-lg"
        />
        {newImagem && (
          <img
            src={newImagem}
            alt="Preview"
            className="w-40 h-40 rounded-full object-cover mt-2 mx-auto"
          />
        )}
        <h2>Nome Completo:</h2>
        <input
          type="text"
          value={newNome}
          onChange={(e) => setNewNome(e.target.value)}
          placeholder="Nome"
          className="w-80 p-2 border text-center border-gray-300 rounded-lg"
        />
        <h2>Região:</h2>
        <input
          type="text"
          value={newRegiao}
          onChange={(e) => setNewRegiao(e.target.value)}
          placeholder="Região"
          className="w-80 p-2 border text-center border-gray-300 rounded-lg"
        />
        <div className="flex  justify-center items-center gap-4">
          <button
            onClick={() => handleSave(newNome, newRegiao, newImagem)}
            className="bg-blue-500 transition-all duration-300 ease-in-out text-white text-base w-32 px-1 py-1 rounded-lg hover:bg-lime-400"
          >
            Salvar
          </button>
          <button
            onClick={handleCancel}
            className="bg-pink-400 text-white transition-all duration-300 ease-in-out text-base w-32 px-1 py-1 rounded-lg hover:bg-orange-300"
          >
            Cancelar
          </button>
        </div>
      </div>
    );
  };

  const PerfilDisplay = () => (
    <motion.div>
      <div className="flex flex-col items-center gap-4 ">
        <motion.img
          initial={{ y: "-50%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          src={perfilData.imagem}
          alt="Perfil"
          className="w-56 h-56 rounded-full object-cover md:w-72 md:h-72"
        />
        <motion.div
          initial={{ x: "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center gap-2"
        >
          <h2>Nome Completo:</h2>
          <label className="w-72 px-1 py-1 text-lg text-center font-medium text-gray-600 bg-gray-100 rounded-lg border border-slate-400 ">
            {perfilData.nome}
          </label>
        </motion.div>
        <motion.div
          initial={{ x: "50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center gap-2"
        >
          <h2>Região:</h2>
          <label className="w-72 px-1 py-1 text-lg text-center font-medium text-gray-600 bg-gray-100 rounded-lg border-slate-400 border ">
            {perfilData.regiao}
          </label>
        </motion.div>
        <motion.button
          initial={{ y: "400%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          onClick={handleEditClick}
          className="bg-green-500 w-72 text-white px-1 py-1 rounded-lg hover:bg-green-400 hover:shadow-lg transition-shadow  cursor-pointer"
        >
          Editar Informações
        </motion.button>
      </div>
    </motion.div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {isEditing ? <EditForm /> : <PerfilDisplay />}
    </div>
  );
};
