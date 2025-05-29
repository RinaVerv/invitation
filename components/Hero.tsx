import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
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

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section className='relative h-[70vh] flex items-center justify-center overflow-hidden bg-surface-50/95'>
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className='absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-out'
        style={{
          backgroundImage: 'url("/divider-5.jpg")',
        }}
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 transition-all duration-500' 
      />
      <div className='flex align-center justify-center h-full relative z-10 text-center px-6 sm:px-8 max-w-4xl mx-auto'>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className='flex flex-col align-center justify-between space-y-10'
        >
          <motion.div
            variants={itemVariants}
            className='font-cormorant-sc flex items-center justify-center p-6 text-xl sm:text-xl text-white font-medium tracking-wide m-0'
          >
            <a
              className='mr-5 font-cormorant-sc text-white/80 decoration-gray-500 hover:opacity-80 focus:outline-hidden focus:opacity-80'
              href='#invitation'
            >
              приглашение
            </a>
            <a
              className='mr-5 font-cormorant-sc text-white/80 decoration-gray-500 hover:opacity-80 focus:outline-hidden focus:opacity-80'
              href='#rsvp'
            >
             анкета
            </a>
            <a
              className='font-cormorant-sc text-white/80 decoration-gray-500 hover:opacity-80 focus:outline-hidden focus:opacity-80'
              href='#location'
            >
              контакты
            </a>
          </motion.div>

          <motion.p
            variants={titleVariants}
            className='text-[clamp(2.5rem,28vw,7.5rem)] md:text-[180px] leading-[0.8] font-marianna text-white tracking-tight m-0'
          >
            Александр<br />& <br />Марина
          </motion.p>

          <motion.p
            variants={itemVariants}
            className='font-cormorant-sc flex items-center justify-center p-6 text-lg sm:text-2xl text-white/90 font-[500]'
          >
            <span>1 августа</span>
            <span className='h-1 w-1 mx-4 md:mx-8 bg-gray-300 rounded-full'></span>
            <span>2025</span>
            <span className='h-1 w-1 mx-4 md:mx-8 bg-gray-300 rounded-full'></span>
            <span>пятница</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
