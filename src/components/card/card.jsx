import { useState } from 'react';
import CardFt from '../Media/foto.jpeg';
import { NumberFormatBase } from 'react-number-format';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trash } from '@phosphor-icons/react';
import { useAuth } from '../../AuthContext';

const isSafari = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return userAgent.includes('safari') && !userAgent.includes('chrome');
};

export const Cards = () => {
  const { user } = useAuth();

  const [cards, setCards] = useState([
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
  ]);

  const [form, setForm] = useState({
    category: '',
    price: '',
    quantity: '',
    location: '',
    image: null,
  });

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardToRemove, setCardToRemove] = useState(null);

  const categories = [
    'Vidro',
    'Plastico',
    'Garrafa',
    'Tigelas',
    'Papéis',
    'Metais',
  ];

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setForm({
          ...form,
          image: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePriceChange = (values) => {
    setForm({
      ...form,
      price: values.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCardWithId = {
      ...form,
      id: cards.length + 1,
    };
    const updatedCards = [newCardWithId, ...cards].sort((a, b) => b.id - a.id);
    setCards(updatedCards);
    setForm({ category: '', price: '', quantity: '', location: '', image: null });
    setImagePreview(null);
    setIsFormOpen(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleRemove = (id) => {
    setCardToRemove(id);
    setIsModalOpen(true);
  };

  const confirmRemove = () => {
    setCards(cards.filter(card => card.id !== cardToRemove));
    setIsModalOpen(false);
    setCardToRemove(null);
  };

  return (
    <motion.div 
      initial={{ y: '50%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.0, delay: 0.0 }}
      className="flex flex-wrap justify-start"
    >
      <div className="w-full flex justify-start ml-4 mt-4"> 
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition-colors duration-300"
        >
          Criar Novo
        </button>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ x: '50%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '50%', opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed right-2 mt-3 text-base w-36 h-12 md:h-auto md:w-auto md:py-2 md:p-2 text-center md:text-lg bg-green-500 text-white py-0 px-1 rounded-lg shadow-lg z-50"
          >
            adicionado com sucesso!
          </motion.div>
        )}
      </AnimatePresence>

      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="w-11/12 max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-4">Criar Novo Card</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Categoria</label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full mt-2 p-2 border rounded"
                  required
                >
                  <option value="">Selecione a Categoria</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Preço</label>
                <NumberFormatBase
                  name="price"
                  value={form.price}
                  onValueChange={handlePriceChange}
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix="MT "
                  className="w-full mt-2 p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Quantidade</label>
                <input
                  type="text"
                  name="quantity"
                  value={form.quantity}
                  onChange={handleChange}
                  className="w-full mt-2 p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Localização</label>
                <input
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  className="w-full mt-2 p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Imagem</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full mt-2"
                />
              </div>
              {imagePreview && (
                <div className="mb-4">
                  <img src={imagePreview} alt="Preview" className="w-full h-48 object-cover" />
                </div>
              )}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="bg-gray-500 text-white py-2 px-4 rounded-lg mr-2 hover:bg-gray-600 transition-colors duration-300"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  Adicionar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <AnimatePresence>
        {cards.map((card) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 1, z: 1 }} 
            exit={{ opacity: 0, z: -100, transition: { duration: 0.3 } }} 
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
          >
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <Link to={`/residuos/${card.id}`}>
                <img src={card.image || CardFt} alt="Product" className="w-full h-48 object-cover cursor-pointer" />
              </Link>
              <div className="p-4 flex flex-col h-full">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-xl font-semibold mb-2">{card.category}</h1>
                    <p className="text-gray-700 mb-1">Preço: {card.price} MT</p>
                    <p className="text-gray-700 mb-1">Quantidade: {card.quantity} {parseInt(card.quantity) > 1 ? 'Disponíveis' : 'Disponível'}</p>
                    <p className="text-gray-700 mb-4">Localização: {card.location}</p>
                  </div>
                  {user && user.role === 'admin' && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); 
                        handleRemove(card.id);
                      }}
                      className="text-red-500 hover:text-red-700 transition-all duration-300 ease-in-out  hover:shadow-xl"
                    >
                      <Trash size={28} />
                    </button>
                  )}
                </div>
                <Link to={`/residuos/${card.id}`} className="mt-auto">
                  <div className="bg-blue-500 text-white py-2 px-4 text-center rounded-lg hover:bg-blue-600 transition-colors duration-300">
                    Ver Detalhes
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      <AnimatePresence>
        {isModalOpen && (
          <>
            {isSafari() ? (
              <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
                <div className="bg-white rounded-lg p-6 w-11/12 max-w-md mx-auto" style={{ position: 'relative' }}>
                  <h2 className="text-lg font-bold mb-4">Confirmar Exclusão</h2>
                  <p>Tem certeza de que deseja excluir este item?</p>
                  <div className="flex justify-end mt-4">
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="bg-gray-500 text-white py-2 px-4 rounded-lg mr-2 hover:bg-gray-600 transition-colors duration-300"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={confirmRemove}
                      className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300"
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  className="bg-white rounded-lg p-6 w-11/12 max-w-md mx-auto"
                >
                  <h2 className="text-lg font-bold mb-4">Confirmar Exclusão</h2>
                  <p>Tem certeza de que deseja excluir este item?</p>
                  <div className="flex justify-end mt-4">
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="bg-gray-500 text-white py-2 px-4 rounded-lg mr-2 hover:bg-gray-600 transition-colors duration-300"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={confirmRemove}
                      className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300"
                    >
                      Excluir
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
