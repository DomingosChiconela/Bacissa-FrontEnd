import React, { useState } from 'react';
import CardFt from '../Media/foto.jpeg';
import { NumberFormatBase } from 'react-number-format';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Cards = () => {
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
            className="fixed right-2  mt-3 text-base w-36 h-12 md:h-auto md:w-auto md:py-2 md:p-2 text-center  md:text-lg bg-green-500 text-white py-0 px-1 rounded-lg shadow-lg z-50"
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
                <label className="block text-gray-700">Quantity</label>
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
                <label className="block text-gray-700">Location</label>
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
                <label className="block text-gray-700">Image</label>
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
 {cards.map((card) => (
        <div key={card.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <Link to={`/residuos/${card.id}`}> 
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img src={card.image || CardFt} alt="Product" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h1 className="text-xl font-semibold mb-2">{card.category}</h1>
                <p className="text-gray-700 mb-1">Preço: {card.price} MT</p>
                <p className="text-gray-700 mb-1">Quantidade: {card.quantity} {parseInt(card.quantity) > 1 ? 'Disponíveis' : 'Disponível'}</p>
                <p className="text-gray-700 mb-4">Localização: {card.location}</p>
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                  Enviar Proposta
                </button>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </motion.div>
  );
};
