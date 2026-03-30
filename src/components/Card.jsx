import React from 'react';

const Card = ({ cartItems, onRemove, totalPrice, onCheckout }) => {
  return (
    <div className="card p-6 bg-slate-900/70 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold mb-4">Your Cart</h3>
      {cartItems.length === 0 ? (
        <p className="text-slate-300">No items in the card yet. Add some products!</p>
      ) : (
        <>
          <ul className="space-y-3 mb-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center justify-between bg-slate-800/80 p-3 rounded-lg">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-slate-300">${item.price}</p>
                </div>
                <button onClick={() => onRemove(item.id)} className="text-red-400 hover:text-red-300">Remove</button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg">Total:</span>
            <span className="text-xl font-bold">${totalPrice.toFixed(2)}</span>
          </div>
          <button onClick={onCheckout} className="btn w-full bg-violet-600 text-white hover:bg-violet-500">Checkout</button>
        </>
      )}
    </div>
  );
};

export default Card;