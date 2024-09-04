import React from 'react';

const BannerHorizontal: React.FC = () => {
  return (
    <div className="relative bg-white rounded-lg overflow-hidden shadow-lg w-[98%] mx-auto mb-8 border border-gray-300">
      <div className="absolute inset-0">
        <img
          src="https://img.freepik.com/fotos-gratis/vista-elevada-de-branca-azul-doce-capsulas-em-a-canto-de-cyan-fundo_23-2147877565.jpg?t=st=1725461202~exp=1725464802~hmac=85d14ab753838a715e6ce9ab00d74141d8a700faa15c014dbcb8c75c64585c4b&w=826" // imagem banner
          alt="Promoção"
          className="w-full h-full object-cover brightness-75"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center text-white">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">
          Promoção Imperdível!
        </h2>
        <p className="text-lg md:text-xl mb-4">
          Ganhe <span className="font-semibold text-red-500">25%</span> de desconto em todos os produtos!<br />
          Aproveite antes que acabe!
        </p>
        <a
          href="#"
          className="bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
        >
          Confira Agora
        </a>
      </div>
    </div>
  );
};

export default BannerHorizontal;
