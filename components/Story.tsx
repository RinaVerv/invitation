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

const Story: React.FC = () => {
  return (
    <section id='story' className='py-20'>
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
            Наша История
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
            className='w-48 h-0.5 mx-auto mb-10 bg-gray-200 origin-center' 
          />
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className='font-cormorant-sc text-xl max-w-4xl mx-auto text-center'
        >

          <motion.p 
            variants={itemVariants}
            className='mb-4'
          >
            Мы познакомились через социальную сеть «ВК». Саша написал первый, познакомились,
            пообщались. Через некоторое время встретились вживую. И тут Саша понял… надо брать.
            Поначалу разделяло расстояние: Саша в Пласте, Мариша в Че. Только переписки, звонки и
            всё.
          </motion.p>
          <motion.p variants={itemVariants}>
            Но прошло лето, и Саша вернулся в Че, и тут всё стало волшебно. Мы виделись практически
            каждый день. Саше нравилось в ней всё: от внешности до характера, он влюбился. Спасибо
            Божьему мужику, что свёл нас. ❤️‍🔥
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;

