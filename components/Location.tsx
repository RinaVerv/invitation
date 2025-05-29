import { motion } from 'framer-motion';
import { MapPinIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
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

const slideVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const slideRightVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export default function Location() {
  return (
    <section
      id='location'
      className='relative pt-4 pb-20 bg-gradient-to-br from-primary-50 via-white to-primary-50 overflow-hidden'
    >
      {/* Decorative Background Elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className='absolute inset-0'
      >
        <div className='absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3' />
        <div className='absolute bottom-0 left-0 w-64 h-64 bg-primary-200 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3' />
        <div className='absolute top-1/2 left-1/2 w-32 h-32 bg-primary-300 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2' />
      </motion.div>

      {/* Abstract Lines */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        className='absolute inset-0 overflow-hidden'
      >
        <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-200 to-transparent transform -rotate-45' />
        <div className='absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-200 to-transparent transform rotate-45' />
      </motion.div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <motion.h2 
            variants={itemVariants}
            className='text-5xl font-marianna text-primary-800 mb-2'
          >
            Место проведения
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
          className='grid gap-8 md:grid-cols-2'
        >
          <motion.div
            variants={slideVariants}
            className='bg-black/40 p-8 rounded-lg overflow-hidden relative after:absolute after:-inset-1 after:block after:bg-black/40'
          >
            <div className='relative z-1 p-0 rounded-lg'>
              <div className='flex items-center justify-center w-16 h-16 mb-20 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 mx-auto'>
                <MapPinIcon className='h-20 w-20 text-white' aria-hidden='true' />
              </div>
              <h3 className='text-3xl font-serif text-white mb-4 text-center font-bold'>
                Шахтёрский клуб ЮГК
              </h3>
              <div className='space-y-6 text-center'>
                <p className='text-white'>Челябинская область, г.Пласт</p>
              </div>
            </div>
            <Image
              loading='lazy'
              className='absolute inset-0 w-full h-full object-cover object-left-bottom blur-[2px]'
              src='/club.png'
              alt="Шахтёрский клуб ЮГК"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            variants={slideRightVariants}
            className='bg-white rounded-lg shadow-lg overflow-hidden border border-primary-100'
          >
            <iframe
              width='100%'
              height='100%'
              referrerPolicy='no-referrer-when-downgrade'
              loading='lazy'
              style={{ border: 0, minHeight: '400px' }}
              src='https://yandex.ru/map-widget/v1/?um=constructor%3Ad4214ca748f2f18a76c2879d11f8cbccafd70d11305a4582263fb3f3d6ae1049&amp;source=constructor'
            ></iframe>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
