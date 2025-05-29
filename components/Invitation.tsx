import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Invitation: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id='invitation' className='pb-20 bg-white'>
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
            className='text-5xl md:text-7xl font-marianna mb-4'
          >
            Дорогие родители и друзья
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className='w-48 h-0.5 mx-auto bg-gray-200' 
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className='max-w-[470px] mx-auto text-center'
        >
          <motion.p 
            variants={itemVariants}
            className='text-2xl font-cormorant-sc font-100 text-zinc-900 mb-6'
          >
            Мы с радостью приглашаем вас разделить с нами один из самых важных дней в нашей жизни -
            день нашей свадьбы.
          </motion.p>
          <motion.p 
            variants={itemVariants}
            className='font-cormorant-sc text-4xl font-medium'
          >
            1 августа 2025
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className='max-w-sm mx-auto font-cormorant-sc font-100 text-zinc-900 mt-6 text-2xl'
          >
            Ваше присутствие сделает этот день еще более особенным для нас.
          </motion.p>
          <motion.p 
            variants={itemVariants}
            className='text-3xl font-cormorant-sc mt-8 font-medium'
          >
            Александр & Марина
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button
              asChild
              variant='outline'
              className='uppercase rounded-none mt-12 border-stone-800 bg-transparent h-12 px-10 border-2 cursor-pointer hover:bg-stone-800 hover:text-white transition duration-300 ease-in-out'
            >
              <a
                href='#rsvp'
                rel='noopener noreferrer'
              >
                я иду
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Invitation;
