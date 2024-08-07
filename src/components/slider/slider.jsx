import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imagens = [
  { image: 'https://www.terradecultivo.com.br/tcsolucoesambientais/wp-content/uploads/2021/04/Plano-de-Gerenciamento-de-Residuos-Solidos1-2048x1152.png' },
  { image: 'https://plus.unsplash.com/premium_photo-1682310562583-bfc0a85646da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlY2ljbGFnZW0lMjBubyUyMG1laW8lMjBhbWJpZW50ZXxlbnwwfHwwfHx8MA%3D%3D' },
  { image: 'https://plus.unsplash.com/premium_photo-1683121758343-8da46d7b2c9e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { image: 'https://plus.unsplash.com/premium_photo-1683121710842-acbb16d12261?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { image: 'https://images.unsplash.com/photo-1721622248864-08cd5427f7a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SXJvbiUyMFJlY3ljbGluZ3xlbnwwfHwwfHx8MA%3D%3D' },
  { image: 'https://images.unsplash.com/photo-1507560461415-997cd00bfd45?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { image: 'https://images.unsplash.com/photo-1721622248657-55b1c5ec1dbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlY3ljbGluZyUyMG9mJTIwYm90dGxlc3xlbnwwfHwwfHx8MA%3D%3D' },
  { image: 'https://media.istockphoto.com/id/1462151791/photo/girl-collecting-garbage-from-nature.webp?b=1&s=170667a&w=0&k=20&c=CeNhjc_qXGJPHWfml2axneQi8UQEAalmhyjfy3t9ai0=' },
  { image: 'https://media.istockphoto.com/id/829504010/photo/hands-holding-plastic-bottle.webp?b=1&s=170667a&w=0&k=20&c=LEFcVO5EyqWZLZ_Re4KNNC07E_Pkfz7VF4kpx7zzAqk=' },
  { image: 'https://images.unsplash.com/photo-1721622248852-b22f47e9b9ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SXJvbiUyMFJlY3ljbGluZ3xlbnwwfHwwfHx8MA%3D%3D' },
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
