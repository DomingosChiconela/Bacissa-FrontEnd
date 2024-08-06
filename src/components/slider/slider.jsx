import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from '../Media/globo.jpg';
import Img2 from '../Media/criancas.jpg';
import Img3 from '../Media/voluntariado.jpg';
import Img4 from '../Media/garrafas-entulhadas.jpg';
import Img5 from '../Media/garrafa-praia.jpg';
import Img6 from '../Media/papelao.jpg';
import Img7 from '../Media/plastico.jpg';
import Img8 from '../Media/papelao-reciclado.jpg';
import Img9 from '../Media/madeira.jpg';
import Img10 from '../Media/ferros.jpg';

const imagens = [
  { image: Img1 },
  { image: Img2 },
  { image: Img3 },
  { image: Img4 },
  { image: Img5 },
  { image: Img6 },
  { image: Img7 },
  { image: Img8 },
  { image: Img9 },
  { image: Img10 },
];

export const Featured = () => {
  const [showAll, setShowAll] = useState(false);

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

  return (
    <div className="py-4 w-full  m-auto">
      <Slider {...settings}>
        {(showAll ? imagens : imagens.slice(0, 10)).map((imagem, index) => (
          <div key={index} className="px-4">
            <img
              className="w-full h-48  md:h-64 object-cover rounded-2xl "
              src={imagem.image}
              alt={`Imagem ${index + 1}`}
            />
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
      className={`${className} absolute top-[50%] right-0 p-2 bg-gray-200 rounded-full`}
      onClick={onClick}
    >
      <i className="fas fa-chevron-right" />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} absolute top-[50%] left-0 p-2 bg-gray-200 rounded-full`}
      onClick={onClick}
    >
      <i className="fas fa-chevron-left" />
    </div>
  );
};
