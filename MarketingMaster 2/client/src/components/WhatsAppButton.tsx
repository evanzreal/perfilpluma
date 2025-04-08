import React from 'react';

export default function WhatsAppButton() {
  return (
    <a 
      href="http://wa.me/+5511967336619?text=Olá!%20Tenho%20interesse%20no%20PerfilPluma.%20Poderia%20me%20dar%20mais%20informações?" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
      aria-label="Contato via WhatsApp"
    >
      <div className="relative">
        <i className="fa-brands fa-whatsapp text-2xl"></i>
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" style={{top: 0, left: 0}}></span>
      </div>
    </a>
  );
}