// src/components/Modal.tsx
import React from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  variant?: "popup" | "drawer";
  className?: string;
};

const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  children, 
  variant = "popup",
  className = "",
 }) => {

  return ( 
  <AnimatePresence>
    {isOpen && (
    <motion.div
      key="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 bg-black/80 flex justify-center items-center"
      onClick={onClose} 
    >
     <motion.div
        key="modal-content"
        initial={
          variant === "drawer"
                ? { x: "100%" }
                :{ scale: 0.9, opacity: 0 }}
        animate={
           variant === "drawer"
                ? { x: 0 }
                :{ scale: 1.1, opacity: 1 }}
        exit={
            variant === "drawer"
                ? { x: "100%" }
                :{ scale: 1.9, opacity: 0 }}
        transition={{ duration: 0.7 }}
         className={`relative z-50 ${
              variant === "drawer"
                ? "fixed top-0 right-0 sm:w-1/2 bg-linear-to-bl from-slate-700 to-gray-900 rounded-l-3xl p-6"
                : "mx-auto mt-6 bg-linear-to-b from-gray-800 to-gray-950 rounded-2xl shadow-xl p-6 max-w-4xl"
            } ${className}`}
        onClick={(e) => e.stopPropagation()} 
      >
            <button
              type="button"
              title="close-btn"
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <X size={24} />
        </button>
        {children}
      </motion.div>
    </motion.div>
    )}
  </AnimatePresence>
  );
};

export default Modal;
