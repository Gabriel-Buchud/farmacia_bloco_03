import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="relative w-full h-64 sm:h-80 lg:h-96 xl:h-[24rem] 2xl:h-[28rem] mb-4">
      <img
        src="https://img.freepik.com/vetores-gratis/fundo-vermelho-em-branco-simples-para-negocios_53876-115949.jpg?t=st=1725460475~exp=1725464075~hmac=0ab25ab3d92f9dd382182f322fcee192bfd6c1d40d7ca48889d80bce0aa4d5c8&w=740"
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent flex items-center justify-center text-center text-gray-800 p-4">
        <div className="text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-2">
            Bem-vindo à Farmácia Saúde e Bem Estar!
          </h2>
          <p className="text-lg md:text-2xl mb-4">
            Descontos especiais em todos os produtos.<br />
            Aproveite nossas promoções e cuide da sua saúde!
          </p>
          <a
            href="#"
            className="bg-red-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
          >
            Confira Agora
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
