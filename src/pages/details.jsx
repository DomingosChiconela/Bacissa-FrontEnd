import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CardFt from '../components/Media/foto.jpeg';
import { motion } from 'framer-motion';

const mockData = [
  {
    id: 1,
    category: 'Vidro',
    price: '200',
    quantity: '10',
    location: 'Maputo',
    image: CardFt,
  },
  {
    id: 2,
    category: 'Plastico',
    price: '200',
    quantity: '5',
    location: 'Matola',
    image: CardFt,
  },
  {
    id: 3,
    category: 'Garrafa',
    price: '50',
    quantity: '20',
    location: 'Marracuene',
    image: CardFt,
  },
  {
    id: 4,
    category: 'Tigelas',
    price: '100',
    quantity: '30',
    location: 'Bobole',
    image: CardFt,
  },
];

const userNames = {
  1: 'João',
  2: 'Maria',
  3: 'Pedro',
  4: 'Ana',
};

export const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [proposal, setProposal] = useState('');

  const card = mockData.find(card => card.id === parseInt(id));
  if (!card) {
    return <div>Cartão não encontrado</div>;
  }

  const handleSendProposal = () => {
    if (proposal.trim()) {
      const savedProposals = JSON.parse(localStorage.getItem('proposals')) || {};
      savedProposals[card.id] = savedProposals[card.id] || [];
      savedProposals[card.id].push(proposal);
      localStorage.setItem('proposals', JSON.stringify(savedProposals));

      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate(`/chat/${card.id}`); 
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendProposal();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.0 }}
      className="p-6 pt-4"
    >
      <div className="flex justify-between">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-500/70 text-white mb-4 md:mb-2 py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors duration-300"
        >
          Voltar
        </button>
        <h1 className="text-2xl font-bold">Detalhes do Card</h1>
      </div>
      <div className="bg-white transition-all duration-800 ease-in-out rounded-lg shadow-xl overflow-hidden">
        <motion.img
          src={card.image || CardFt}
          alt={card.category}
          className="w-full md:h-[75vh] lg:h-[85vh] xl:h-[95vh] 2xl:h-[110vh] object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 4, yoyo: Infinity, ease: 'easeInOut', delay: 0.0 }}
        />
        <motion.div
          initial={{ y: '-50%', opacity: 0 }}
          animate={{ y: 0, opacity: 0.9 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="p-4 pt-6 md:absolute md:top-16 md:right-0 md:h-[80vh] lg:h-[90vh] xl:h-[100vh] 2xl:h-[115vh] md:bg-white/70 md:p-8 w-full md:w-5/12 lg:w-4/12 xl:w-3/12 md:backdrop-blur-sm md:flex md:flex-col md:justify-center"
        >
          <h2 className="text-xl font-semibold mb-2">Categoria: {card.category}</h2>
          <p className="text-lg mb-2">Preço: {card.price} MT</p>
          <p className="text-lg mb-2">
            Quantidade: {card.quantity} {parseInt(card.quantity) > 1 ? 'Disponíveis' : 'Disponível'}
          </p>
          <p className="text-lg mb-2">Localização: {card.location}</p>
          <p className="text-lg mb-2">Nome do Usuário: {userNames[card.id]}</p>
          <textarea
            value={proposal}
            onChange={(e) => setProposal(e.target.value)}
            placeholder="Digite sua proposta..."
            className="w-full h-24 p-2 border border-gray-300 rounded-lg mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyDown={handleKeyDown}
          />
          <button
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            onClick={handleSendProposal}
          >
            Enviar Proposta
          </button>
        </motion.div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-11/12 max-w-md">
            <h2 className="text-xl font-bold mb-4">Mensagem Enviada</h2>
            <p className="text-gray-700 mb-4">Sua mensagem foi enviada com sucesso!</p>
            <div className="flex justify-between">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Fechar
              </button>
              <button
                onClick={closeModal}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Ir para o Chat
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};
