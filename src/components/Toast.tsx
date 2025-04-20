import React, { useState } from 'react';
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimesCircle } from 'react-icons/fa';

interface ToastProps {
     type: 'success' | 'error' | 'info' | 'warning';
     message: string;
     onClose: () => void;
}

export default function Toast({ type, message, onClose }: ToastProps) {
     let border_color = "";
     let icon = null;
     let icon_color = "";

     switch (type) {
          case "success":
               border_color = "border-l-green-500";
               icon = <FaCheckCircle />;
               icon_color = "text-green-500";
               break;
          case "error":
               border_color = "border-l-red-500";
               icon = <FaTimesCircle />;
               icon_color = "text-red-500";
               break;
          case "info":
               border_color = "border-l-blue-500";
               icon = <FaInfoCircle />;
               icon_color = "text-blue-500";
               break;
          case "warning":
               border_color = "border-l-yellow-500";
               icon = <FaExclamationCircle />;
               icon_color = "text-yellow-500";
               break;
          default:
               border_color = "";
     }

     // Fechar o toast
     const handleClose = () => {
          setIsVisible(false);
          setTimeout(onClose, 300); // Chama a função onClose após a animação de saída
     };

     return (
          <div className={`bg-white w-80 h-16 border-l-4 shadow-xl ${border_color} flex items-center p-4 space-x-3 rounded-lg`}>
               {/* Ícone */}
               <span className={`text-xl ${icon_color}`}>
                    {icon}
               </span>
               {/* Mensagem */}
               <h1 className="text-sm font-medium text-gray-800 flex-1">{message}</h1>
               {/* Botão de fechar */}
               <button onClick={handleClose} className="text-xl text-gray-400 hover:text-gray-600">
                    <FaTimesCircle />
               </button>
          </div>
     );
}