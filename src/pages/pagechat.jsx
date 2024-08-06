import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/header';
import userPhoto from '../components/Media/user-photo.jpeg';

const conversations = [
  { id: 1, title: 'João', photo: userPhoto },
  { id: 2, title: 'Maria', photo: userPhoto },
  { id: 3, title: 'Pedro', photo: userPhoto },
];

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
    { text: 'ola!', sender: 'user', id: 1 },
    { text: 'Ola', sender: 'bot', id: 2 },
  ],
};

export const ConversationsList = () => {
  return (
    <div>
      <Header />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Minhas Conversas</h1>
        <ul className="space-y-2">
          {conversations.map((convo) => {
            const lastMessage = mockMessages[convo.id]?.slice(-1)[0]?.text || 'Sem mensagens recentes';
            return (
              <li key={convo.id}>
                <Link
                  to={`/chat/${convo.id}`}
                  className="flex items-center p-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                >
                  <img
                    src={convo.photo}
                    alt={convo.title}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div className="flex-1">
                    <div className="font-bold">{convo.title}</div>
                    <div className="text-sm text-gray-600">{lastMessage}</div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
