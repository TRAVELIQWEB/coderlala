// components/WhatsAppButton.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';

interface WhatsAppButtonProps {
  phoneNumber: string; // Format: "1234567890" (without + or spaces)
  message?: string; // Optional default message
  position?: 'bottom-right' | 'bottom-left';
  showPopup?: boolean;
  popupMessage?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message = "Hello, I need assistance with your services.",
  position = 'bottom-right',
  showPopup = true,
  popupMessage = "Chat with us on WhatsApp!",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(true);

  useEffect(() => {
    // Show button after a short delay for better UX
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Auto-hide popup bubble after 5 seconds
    const bubbleTimer = setTimeout(() => {
      setShowBubble(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(bubbleTimer);
    };
  }, []);

  const handleWhatsAppClick = () => {
    // Format the WhatsApp URL
    const formattedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${formattedMessage}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank');
  };

  const positionClasses = {
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed ${positionClasses[position]} z-50 flex flex-col items-end`}>
      {/* Popup Bubble */}
      {showPopup && showBubble && (
        <div className="relative mb-3 animate-fade-in">
          <div className="bg-white rounded-lg shadow-lg p-3 max-w-50 text-sm text-gray-700">
            <p>{popupMessage}</p>
            {/* Arrow pointing down to button */}
            <div className="absolute -bottom-1.5 right-4 w-3 h-3 bg-white text-white! transform rotate-45"></div>
          </div>
          {/* Close button for popup */}
          <button
            onClick={() => setShowBubble(false)}
            className="absolute -top-2 -right-2 bg-gray-200 rounded-full w-5 h-5 text-black flex items-center justify-center text-xs hover:bg-gray-300 transition-colors"
          >
            ×
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="group relative bg-green-500 hover:bg-green-600 text-white! rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-5 h-5" />
        
        {/* Ripple effect */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 group-hover:opacity-30"></span>
        
        {/* Tooltip on hover */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white! text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
      </button>
    </div>
  );
};

export default WhatsAppButton;