import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imagens = [
  { image: 'https://www.terradecultivo.com.br/tcsolucoesambientais/wp-content/uploads/2021/04/Plano-de-Gerenciamento-de-Residuos-Solidos1-2048x1152.png' },
  { image: 'https://example.com/path/to/criancas.jpg' },
  { image: 'https://example.com/path/to/voluntariado.jpg' },
  { image: 'https://example.com/path/to/garrafas-entulhadas.jpg' },
  { image: 'https://example.com/path/to/garrafa-praia.jpg' },
  { image: 'https://example.com/path/to/papelao.jpg' },
  { image: 'https://example.com/path/to/plastico.jpg' },
  { image: 'https://example.com/path/to/papelao-reciclado.jpg' },
  { image: 'https://example.com/path/to/madeira.jpg' },
  { image: 'https://example.com/path/to/ferros.jpg' },
];

export const Featured = () => {
  const [showAll, setShowAll] = useState(false);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleWheel = (event) => {
    event.preventDefault();
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(sliderRef.current.slickCurrentSlide() + (event.deltaY > 0 ? 1 : -1));
    }
  };

  return (
    <div
      className="py-4 w-full m-auto overflow-hidden"
      onWheel={handleWheel}
    >
      <Slider ref={sliderRef} {...settings}>
        {(showAll ? imagens : imagens.slice(0, 10)).map((imagem, index) => (
          <div key={index} className="px-4">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                className="w-full h-48 border shadow-lg md:h-64 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
                src={imagem.image}
                alt={`Imagem ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} absolute top-[50%] right-4 p-3 bg-gray-800 rounded-full text-white shadow-lg cursor-pointer`}
      style={{ zIndex: 1 }}
      onClick={onClick}
    >
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} absolute top-[50%] left-4 p-3 bg-gray-800 rounded-full text-white shadow-lg cursor-pointer`}
      style={{ zIndex: 1 }}
      onClick={onClick}
    >
    </div>
  );
};
