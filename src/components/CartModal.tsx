import React from "react";
import Modal from "./Modal";
import { useCart } from "../hooks/useCart";

const CartModal: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <Modal isOpen={cart.length > 0} onClose={() => {}}>
      <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between mb-2">
          <span>{item.title}</span>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </Modal>
  );
};

export default CartModal;