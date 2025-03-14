import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className='relative h-[60vh] flex items-center justify-center overflow-hidden bg-surface-50/95'>
      <div
        className='absolute inset-0 bg-cover bg-no-repeat bg-left-top opacity-90 transition-all duration-700 ease-out'
        style={{
          backgroundImage: 'url("/hero.jpg")',
        }}
      />
      <div className='absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 backdrop-blur-[3px] transition-all duration-500 grayscale' />
      <div className='flex align-center justify-center h-full relative z-10 text-center px-6 sm:px-8 max-w-4xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='flex flex-col align-center justify-between space-y-10'
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='font-main flex items-center justify-center p-6 text-xl sm:text-xl text-white font-medium tracking-wide m-0'
          >
            <a
              className='mr-10 font-light text-white/80 decoration-gray-500 hover:opacity-80 focus:outline-hidden focus:opacity-80'
              href='#invitation'
            >
              Приглашение
            </a>
            <a
              className='mr-10 font-light text-white/80 decoration-gray-500 hover:opacity-80 focus:outline-hidden focus:opacity-80'
              href='https://forms.yandex.ru/u/67d165e790fa7b474e8961fa/'
              target='_blank'
            >
              Анкета
            </a>
            <a
              className='font-light text-white/80 decoration-gray-500 hover:opacity-80 focus:outline-hidden focus:opacity-80'
              href='#location'
            >
              Контакты
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className='text-[clamp(2.5rem,10vw,7.5rem)] font-vibe text-white tracking-tight m-0'
          >
            Александр и Марина
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='font-main flex items-center justify-center p-6 text-lg sm:text-2xl text-white/90 font-[500]'
          >
            <span>1 Августа</span>
            <span className='h-1 w-1 mx-4 md:mx-8 bg-gray-300 rounded-full'></span>
            <span>2025</span>
            <span className='h-1 w-1 mx-4 md:mx-8 bg-gray-300 rounded-full'></span>
            <span>Пятница</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
