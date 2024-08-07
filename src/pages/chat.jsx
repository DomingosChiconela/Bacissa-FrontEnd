import  { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import userPhoto from '../components/Media/user-photo.jpeg';
import botPhoto from '../components/Media/bot-photo.jpeg';
import { Header } from '../components/header';

const mockMessages = {
  1: [
    { text: 'Olá, João!', sender: 'user', id: 1 },
    { text: 'Oi, tudo bem?', sender: 'bot', id: 2 },
  ],
  2: [
    { text: 'Oi, Maria!', sender: 'user', id: 1 },
    { text: 'Olá, como posso ajudar?', sender: 'bot', id: 2 },
  ],
  3: [
    { text: 'Oi, Pedro!', sender: 'user', id: 1 },
    { text: 'Olá!', sender: 'bot', id: 2 },
  ],
  4: [
    { text: 'Oi, Ana!', sender: 'user', id: 1 },
    { text: 'Olá, Ana aqui!', sender: 'bot', id: 2 },
  ],
};

export const ChatPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    const convoMessages = mockMessages[id] || [];
    
    const savedProposals = JSON.parse(localStorage.getItem('proposals')) || {};
    const savedMessages = savedProposals[id] || [];

    const newMessages = convoMessages.concat(savedMessages.map((msg, index) => ({ text: msg, sender: 'user', id: `saved-${index}` })));
    
    setMessages(newMessages);
  }, [id]);

  useEffect(() => {
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage.sender === 'user') {
        const responseTimeout = setTimeout(() => {
          switch (lastMessage.text.toLowerCase()) {
            case 'o residuo ainda esta disponivel?':
              setMessages(prevMessages => [
                ...prevMessages,
                { text: 'Está sim disponível, vai querer?', sender: 'bot', id: Date.now() }
              ]);
              break;
            case 'vou sim, mas so tenho 30':
              setMessages(prevMessages => [
                ...prevMessages,
                { text: 'Ahhh Aumenta lá 20 fecharmos.', sender: 'bot', id: Date.now() }
              ]);
              break;
            case 'ta nice, amanha as 12 venho buscar':
              setMessages(prevMessages => [
                ...prevMessages,
                { text: 'Combinado', sender: 'bot', id: Date.now() }
              ]);
              break;
            default:
              setMessages(prevMessages => [
                ...prevMessages,
                { text: 'Olá, Como posso ajudar?', sender: 'bot', id: Date.now() }
              ]);
              break;
          }
        }, 2000);

        return () => clearTimeout(responseTimeout);
      }
    }
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = { text: input, sender: 'user', id: Date.now() };
      setMessages([...messages, newMessage]);
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div>
      <Header />
      <div className="h-screen flex flex-col bg-gray-100 p-6">
        <div className="bg-white shadow-md rounded-lg overflow-hidden flex-1 flex flex-col">
          <div className="p-4 bg-blue-500 text-white font-bold">Chat</div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
                <div className={`flex items-center space-x-2 ${message.sender === 'bot' ? '' : 'flex-row-reverse space-x-reverse'}`}>
                  <img
                    src={message.sender === 'bot' ? botPhoto : userPhoto}
                    alt={message.sender}
                    className="w-8 lg:w-16 lg:h-16 xl:w-20 xl:h-20 h-8 rounded-full"
                  />
                  <div className={`p-3 rounded-lg ${message.sender === 'bot' ? 'bg-gray-200' : 'bg-blue-500 text-white'}`}>
                    {message.text}
                  </div>
                </div>
              </div>
            ))}
            <div ref={chatEndRef}></div>
          </div>
          <div className="p-4 bg-gray-200 flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Digite sua mensagem..."
              className="flex-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center space-x-2"
            >
              <span>Enviar</span>
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
        <button
          onClick={() => navigate("/chats")}
          className="mt-4 bg-gray-500/70 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors duration-300 md:absolute top-6 right-8 md:w-28  md:top-20"
        >
          Voltar
        </button>
      </div>
    </div>
  );
};
