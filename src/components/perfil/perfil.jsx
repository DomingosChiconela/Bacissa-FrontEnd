import { motion } from "framer-motion";
import { useState } from "react";
import Img from "../Media/perfil.jpg"; 




export const Perfil = () => {
  
  const [isEditing, setIsEditing] = useState(false);
  const [perfilData, setPerfilData] = useState({
    nome: 'Beto Dias',
    regiao: 'Maputo',
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (novoNome, novaRegiao) => {
    setPerfilData({ nome: novoNome, regiao: novaRegiao });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const EditForm = () => {
    const [newNome, setNewNome] = useState(perfilData.nome);
    const [newRegiao, setNewRegiao] = useState(perfilData.regiao);

    return (
      <div className="flex flex-col gap-4">
        <h2>Nome Completo:</h2>
        <input
          type="text"
          value={newNome}
          onChange={(e) => setNewNome(e.target.value)}
          placeholder="Nome"
          className="w-80 p-2 border text-center border-gray-300 rounded-lg"
        />
        <h2>Regiao:</h2>
        <input
          type="text"
          value={newRegiao}
          onChange={(e) => setNewRegiao(e.target.value)}
          placeholder="Regiao"
          className="w-80 p-2 border text-center border-gray-300 rounded-lg"
        />
        <div className="flex gap-4">
          <button
            onClick={() => handleSave(newNome, newRegiao)}
            className="bg-blue-500 text-white text-base w-32 px-1 py-1 rounded-lg hover:bg-lime-400"
          >
            Salvar
          </button>
          <button
            onClick={handleCancel}
            className="bg-pink-400 text-white text-base w-32 px-1 py-1 rounded-lg hover:bg-orange-300"
          >
            Cancelar
          </button>
        </div>
      </div>
    );
  };

  const PerfilDisplay = () => (
   <motion.div>
    <div className="flex flex-col items-center gap-4">
      <img src={Img} alt="Perfil" className="w-56 h-56 rounded-full object-cover" />
      <div className="flex flex-col items-center gap-2">
        <h2>Nome Completo:</h2>
        <label className="w-72 px-1 py-1 text-lg text-center font-medium text-gray-600 bg-gray-100 rounded-lg border border-slate-400 ">
          {perfilData.nome}
        </label>
        <h2>Regiao:</h2>
        <label className="w-72 px-1 py-1 text-lg text-center font-medium text-gray-600 bg-gray-100 rounded-lg border-slate-400 border ">
          {perfilData.regiao}
        </label>
      </div>
      <button
        onClick={handleEditClick}
        className="bg-green-500 w-72 text-white px-1 py-1 rounded-lg hover:bg-green-400 hover:shadow-lg transition-shadow  cursor-pointer"
      >
        Editar Informações
      </button>
    </div>
    </motion.div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {isEditing ? <EditForm /> : <PerfilDisplay />}
    </div>
  );
};

export default Perfil;
