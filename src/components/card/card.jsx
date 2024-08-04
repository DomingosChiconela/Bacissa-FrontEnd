import CardFt from '../Media/foto.jpeg';
import { motion } from 'framer-motion';

export const Cards = () => {
  const cardData = [
    {
      id: 1,
      category: 'Vidro',
      price: '200 MT',
      quantity: '10 Disponiveis',
      location: 'Maputo',
    },
    {
      id: 2,
      category: 'Plastico',
      price: '200 mt',
      quantity: '5 Disponiveis',
      location: 'Matola',
    },
    {
      id: 3,
      category: 'Garrafa',
      price: '50 MT',
      quantity: '20 Disponiveis',
      location: 'Marracuene',
    },
    {
      id: 4,
      category: 'Tigelas',
      price: '100 MT',
      quantity: '30 Disponiveis',
      location: 'Bobole',
    },
  ];

  return (
    <motion.div 
    initial={{ y: '50%', opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1.0, delay: 0.0 }}
    className="flex flex-wrap justify-center">
      {cardData.map((card) => (
        <div key={card.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <img src={CardFt} alt="Product" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h1 className="text-xl font-semibold mb-2">{card.category}</h1>
              <p className="text-gray-700 mb-1">Price: {card.price}</p>
              <p className="text-gray-700 mb-1">Quantity: {card.quantity}</p>
              <p className="text-gray-700 mb-4">Location: {card.location}</p>
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                Enviar Proposta
              </button>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};
