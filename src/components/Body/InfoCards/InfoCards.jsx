import React from 'react';
import { motion } from 'framer-motion';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData = [
        {
            id:1,
            name: 'Service Hours',
            description: 'Open 9.00 am to 5.00 pm everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-accent to-secondary',
            alt:'clock'
        },
        {
            id:2,
            name: 'Showroom Location',
            description: 'Uttara Dhaka 1216, Bangladesh',
            icon: marker,
            bgClass: 'bg-gradient-to-r from-primary to-secondary',
            alt:'marker'
        },
        {
            id:3,
            name: 'Order & Support',
            description: '+8801753250000 / 01746402080',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-accent',
            alt:'phone'
        },
    ];

    // Variants for container to stagger child animations
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2, // delay between cards
            }
        }
    };

    // Variants for each card
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: 'easeOut' } 
        }
    };

    return (
        <motion.div
            className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"        // Animate when container enters viewport
            viewport={{ once: false, amount: 0.3 }} // Trigger when 30% is visible
        >
            {cardData.map(card => (
                <motion.div
                    key={card.id}
                    variants={cardVariants}
                >
                    <InfoCard card={card} />
                </motion.div>
            ))}
        </motion.div>
    );
}

export default InfoCards;
