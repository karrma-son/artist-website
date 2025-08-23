// src/components/Modal.tsx
import React from "react";
import { X } from "lucide-react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose} // ✅ close on background click
    >
      <div
        className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg max-w-4xl w-full p-6"
        onClick={(e) => e.stopPropagation()} // ✅ prevent closing when clicking inside
      >
        <button title="close-btn"
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
