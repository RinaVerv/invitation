import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const Details: React.FC = () => {
  return (
    <section id='details' className='py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className='text-center mb-10'
        >
          <motion.h2 
            variants={itemVariants}
            className='font-marianna text-5xl md:text-7xl mb-4'
          >
            Детали
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className='w-24 h-0.5 mx-auto bg-gray-200' 
          />
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className='font-cormorant-sc text-2xl text-center'
        >
          <motion.h4 
            variants={itemVariants}
            className='font-cormorant-sc text-xl mb-4'
          >
            Подарки
          </motion.h4>
          <motion.p 
            variants={itemVariants}
            className='mb-10 max-w-lg mx-auto text-xl'
          >
            Ваши добрые пожелания в конвертах станут для нас самым ценным подарком, который поможет
            осуществить наши мечты.
          </motion.p>
          <motion.h4 
            variants={itemVariants}
            className='font-cormorant-sc text-xl mb-4'
          >
            Цветы
          </motion.h4>
          <motion.p 
            variants={itemVariants}
            className='max-w-lg mx-auto text-xl'
          >
            Просим не дарить нам цветы — мы не сможем насладиться их красотой. Будем очень рады
            бутылочке вашего любимого алкоголя, чтобы пополнить наш семейный бар.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Details;
