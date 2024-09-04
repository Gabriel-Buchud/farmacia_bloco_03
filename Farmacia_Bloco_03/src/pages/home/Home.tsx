import React from 'react';
import ProductCard from '../../components/productcard/ProductCard';
import BannerHorizontal from '../../components/banner/BannerHorizontal';

const Home: React.FC = () => {
  return (
    <>
      <div className="min-h-full">
        
        <BannerHorizontal />

        
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard
            imageSrc="https://img.freepik.com/fotos-gratis/close-up-em-complementos-alimentares_23-2149103172.jpg?t=st=1725460167~exp=1725463767~hmac=7c6eb3529bbfa3c23e46216b26a98de9d98cf44f3da0a0984efdfeacce82113d&w=740"
            title="Vitaminas C"
            price="R$ 49,90"
            description="Suplemento diário que fortalece o sistema imunológico e aumenta a absorção de ferro. Ideal para reforçar sua saúde durante o ano todo."
          />
          <ProductCard
            imageSrc="https://img.freepik.com/fotos-gratis/colher-de-angulo-alto-com-comprimidos-amarelos_23-2149080570.jpg?t=st=1725460234~exp=1725463834~hmac=38183b5c89b309952a2d8c56b8bca176430977fea93f755fb6df260b95c1ab42&w=360"
            title="Óleo de Peixe Ômega-3"
            price="R$ 79,90"
            description="Fonte natural de ácidos graxos essenciais, auxilia na saúde do coração e na redução de triglicerídeos. Perfeito para quem busca um estilo de vida mais saudável."
          />
          <ProductCard
            imageSrc="https://img.freepik.com/psd-gratuitas/levitando-o-recipiente-de-creme-em-estudio-ainda-vida_23-2150807021.jpg?t=st=1725460285~exp=1725463885~hmac=8f8a7e9117a6897cfe822c21888610ece90e3e4d8e6757ff0a61c3866026b9a6&w=740"
            title="Creme Hidratante"
            price="R$ 29,90"
            description="Hidratação intensa para pele seca. Com ingredientes naturais que ajudam a manter a pele macia e saudável."
          />
          <ProductCard
            imageSrc="https://img.freepik.com/fotos-gratis/composicao-de-vista-frontal-de-elementos-de-natureza-morta-medica_23-2148854051.jpg?t=st=1725460356~exp=1725463956~hmac=6ba5baf4a0e52fdf5934c9125a7d697fcd0363f998ed6958a8213039a03651d0&w=826"
            title="Kit de Primeiros Socorros"
            price="R$ 199,90"
            description="Tudo que você precisa para lidar com pequenos acidentes e emergências. Um item essencial para ter em casa."
          />
          <ProductCard
            imageSrc="https://img.freepik.com/psd-gratuitas/renderizacao-3d-de-produto-cosmetico_23-2149929596.jpg?t=st=1725460392~exp=1725463992~hmac=2f1c921a4bd7207d513b8bbedf66925767704992d37738f051eaeccd669da170&w=740"
            title="Protetor Solar FPS 50"
            price="R$ 59,90"
            description="Proteção eficaz contra os raios UV. Fórmula leve e resistente à água, ideal para uso diário."
          />
          <ProductCard
            imageSrc="https://img.freepik.com/vetores-gratis/pacote-complexo-vitaminico-realista_23-2148484093.jpg?t=st=1725460427~exp=1725464027~hmac=dae3a4f8ecc3c19ce8acee950d93704d23fe8492bee30799492651d2a84c56dc&w=740"
            title="Multivitamínico Completo"
            price="R$ 89,90"
            description="Uma combinação de vitaminas e minerais para manter seu corpo em equilíbrio. A melhor escolha para sua rotina diária."
          />

         
        </div>
      </div>
    </>
  );
};

export default Home;
