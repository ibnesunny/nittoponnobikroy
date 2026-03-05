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
    { id: 1, name: 'Student Visa', description: '*USA *ITALY *CHINA *UK *AU', icon: foreignStudent, bgClass: 'bg-gradient-to-r from-error to-secondary', alt: 'mark1' },
    { id: 2, name: 'Air Ticketing', description: 'Book air tickets easily for all destinations.', icon: airTicket, bgClass: 'bg-gradient-to-r from-primary to-secondary', alt: 'mark2' },
    { id: 3, name: 'Tourist Visa Processing', description: 'Smooth processing for tourist visas. +8801753258523', icon: touristVisa, bgClass: 'bg-gradient-to-r from-primary to-accent', alt: 'mark3' },
    { id: 4, name: 'Flight Processing', description: 'Manage flight procedures hassle-free. +8801753258523', icon: flightProcess, bgClass: 'bg-gradient-to-r from-primary to-accent', alt: 'mark4' },
    { id: 5, name: 'Man Power Clearance', description: 'Handle manpower clearance quickly. +8801753258523', icon: manPower, bgClass: 'bg-gradient-to-r from-primary to-accent', alt: 'mark5' },
  ];

  const variants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeIn' } },
  };

  return (
    <>
      <div className='bg-gradient-to-t from-cyan-100 to-green-50 shadow-2xl'>
        <div className='text-center py-10'>
          <h1 className='text-4xl font-mono font-bold'>Services We Provide</h1>
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
