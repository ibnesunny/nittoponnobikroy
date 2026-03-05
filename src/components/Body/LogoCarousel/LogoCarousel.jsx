import { useEffect, useRef } from 'react';
import facebook from '../../../assets/icons/shopnsave.png';
import interlink from '../../../assets/icons/interlink.jpg';
import lsr from '../../../assets/icons/lsr.jpeg';
const logos = [
  { src: facebook, alt: 'Facebook TRY' },
  { src: interlink, alt: 'Disney' },
  { src: lsr, alt: 'Airbnb' },
  { src: 'https://cruip-tutorials.vercel.app/logo-carousel/spark.svg', alt: 'Apple' },
  { src: 'https://cruip-tutorials.vercel.app/logo-carousel/spark.svg', alt: 'Spark' },
  { src: 'https://cruip-tutorials.vercel.app/logo-carousel/samsung.svg', alt: 'Samsung' },
  { src: 'https://cruip-tutorials.vercel.app/logo-carousel/quora.svg', alt: 'Quora' },
  { src: 'https://cruip-tutorials.vercel.app/logo-carousel/sass.svg', alt: 'Sass' },
];

export default function LogoCarousel() {
  const logosRef = useRef(null);

  useEffect(() => {
    const ul = logosRef.current;
    if (ul && !ul.dataset.cloned) {
      const clone = ul.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      ul.insertAdjacentElement('afterend', clone);
      ul.dataset.cloned = 'true';
    }
  }, []);

  return (
   <div className='flex flex-col justify-center bg-gradient-to-t from-cyan-100 from-5% to-gray-50  overflow-none '>
    
    <div>
         <div className="h-[250px] w-full inline-flex flex-nowrap overflow-hidden ">
      <ul
        ref={logosRef}
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      >
        {logos.map((logo, index) => (
          <li key={index}>
            <img className='h-[40px]' src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
    </div>
    </div>
   </div>
  );
}
