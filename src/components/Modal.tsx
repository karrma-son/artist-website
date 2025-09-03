// src/components/Modal.tsx
import React from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      key="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose} // ✅ close on background click
    >
     <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 1 }}
        exit={{ scale: 1.9, opacity: 0 }}
        transition={{ duration: 0.7 }}
        className="relative bg-gradient-to-b from-gray-800 to-gray-950 rounded-2xl shadow-lg max-w-4xl w-full p-6"
        onClick={(e) => e.stopPropagation()} // ✅ prevent closing when clicking inside
      >
        <button title="close-btn"
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Modal;
