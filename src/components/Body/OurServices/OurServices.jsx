import React from 'react';
import { motion } from 'framer-motion';
import foreignStudent from '../../../assets/icons/foreignStudent.png';
import airTicket from '../../../assets/icons/airTicket.png';
import touristVisa from '../../../assets/icons/touristVisa.png';
import flightProcess from '../../../assets/icons/flightProcess.png';
import manPower from '../../../assets/icons/manPower.png';

import ServicesCard from './ServicesCard';
import FijiServices from './FijiServices';

const OurServices = () => {
  const cardData = [
    { id: 1, name: 'Auto Gas Leak Detection', description: 'Instantly detects LPG leaks and triggers an automatic shut-off to prevent hazards.', icon: foreignStudent, bgClass: 'bg-gradient-to-r from-error to-secondary', alt: 'leak-detection' },
    { id: 2, name: 'Cylinder Pressure Monitor', description: 'Real-time monitoring of your gas cylinder pressure for optimal safety.', icon: airTicket, bgClass: 'bg-gradient-to-r from-primary to-secondary', alt: 'pressure-monitor' },
    { id: 3, name: 'Auto Shut-Off Valve', description: 'Automatically shuts off gas flow when a leak or abnormal pressure is detected.', icon: touristVisa, bgClass: 'bg-gradient-to-r from-primary to-accent', alt: 'shutoff-valve' },
    { id: 4, name: 'Easy Installation', description: 'Simple plug-and-play setup that works with any standard LPG cylinder.', icon: flightProcess, bgClass: 'bg-gradient-to-r from-primary to-accent', alt: 'installation' },
    { id: 5, name: 'ISI Certified & Tested', description: 'Meets all safety standards with ISI certification for reliable home protection.', icon: manPower, bgClass: 'bg-gradient-to-r from-primary to-accent', alt: 'certified' },
  ];

  const variants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeIn' } },
  };

  return (
    <>
      <div className='bg-gradient-to-t from-cyan-100 to-green-50 shadow-2xl'>
        <div className='text-center py-10'>
          <h1 className='text-4xl font-mono font-bold'>IGT Gas Safety Device Features</h1>
        </div>

        <div className='grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5'>
          {cardData.map(card => (
            <motion.div
              key={card.id}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.7 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 1.05, rotate: 2 }}
            >
              <ServicesCard card={card} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fiji Section */}
      <section className=" bg-gradient-to-b from-cyan-50 to-green-100">
        <FijiServices />
      </section>

     
    </>
  );
};

export default OurServices;
