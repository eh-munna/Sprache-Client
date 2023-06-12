import { useContext, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import './HomeSlider.css';
import { AuthContext } from '../../../providers/AuthProvider';
import Button from '../../../components/Button/Button';

const images = [
  'https://i.ibb.co/mRR6rQ5/book-1.jpg',
  'https://i.ibb.co/h9tn9Dm/book-2.jpg',
  'https://i.ibb.co/gzvdLnr/book-3.jpg',
  'https://i.ibb.co/zGPTvbL/book-4.jpg',
  'https://i.ibb.co/T2xDsNj/book-5.webp',
];

const textContent = [
  'Learn a language that connects cultures',
  'Explore a rich language of history and tradition',
  'Our methods make German learning enjoyable',
  'Join our community for an authentic experience',
  'Gain a competitive edge in a globalized world',
];

// const hello = textContent.map((text) => {
//   <h2 className="top-1/2 absolute right-1/2">{text}</h2>;
//   return text;
// });

const HomeSlider = () => {
  const [opacities, setOpacities] = useState([]);

  const [sliderRef] = useKeenSlider({
    slides: images.length,
    loop: true,
    detailsChanged(s) {
      const new_opacities = s.track.details.slides.map(
        (slide) => slide.portion
      );
      setOpacities(new_opacities);
    },
  });
  const [textRef] = useKeenSlider({
    slides: textContent.length,
    loop: true,
    detailsChanged(s) {
      const new_opacities = s.track.details.slides.map(
        (slide) => slide.portion
      );
      setOpacities(new_opacities);
    },
  });

  return (
    <>
      <div ref={sliderRef} className={`fader `}>
        {images.map((src, idx) => (
          <div
            key={idx}
            className="fader__slide bg-black text-white"
            style={{ opacity: opacities[idx] }}
          >
            <div>
              <img className="opacity-30" src={src} />
            </div>
            <div ref={textRef}>
              {textContent.map((text, idx) => (
                <h2
                  key={idx}
                  className="fader__slide flex justify-center items-center text-lg md:text-4xl font-[archivo] text-gray-200 px-2"
                  style={{ opacity: opacities[idx] }}
                >
                  {text}
                </h2>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeSlider;
