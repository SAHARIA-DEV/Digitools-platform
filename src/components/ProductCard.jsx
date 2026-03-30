import React, { useState } from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="border border-slate-200 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <span className="text-3xl">{product.icon}</span>
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${product.tagType === 'best seller' ? 'bg-amber-100 text-amber-700' : product.tagType === 'popular' ? 'bg-indigo-100 text-indigo-700' : 'bg-emerald-100 text-emerald-700'}`}>
          {product.tag}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
      <p className="text-slate-600 text-sm mb-4">{product.description}</p>
      <div className="mb-4">
        <span className="text-3xl font-extrabold text-slate-900">${product.price}</span>
        <span className="text-sm text-slate-400 ml-2">{product.period}</span>
      </div>
      <ul className="text-sm text-slate-600 mb-5 space-y-1">
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-violet-600">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <button
        onClick={handleAdd}
        className={`w-full py-2 rounded-lg font-bold text-white transition ${added ? 'bg-emerald-500' : 'bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:opacity-90'}`}
      >
        {added ? 'Added to Cart' : 'Buy Now'}
      </button>
    </div>
  );
};

export default ProductCard;