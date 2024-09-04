import React from 'react';

interface ProductCardProps {
  imageSrc: string;
  title: string;
  price: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, title, price, description }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:bg-red-50">
      <img src={imageSrc} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-red-600">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-xl font-bold text-gray-800">{price}</span>
          <button className="bg-red-600 text-white py-1 px-4 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
