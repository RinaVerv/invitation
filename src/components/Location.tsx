import { motion } from 'framer-motion';
import { MapPinIcon } from '@heroicons/react/24/outline';

export default function Location() {
  return (
    <section
      id='location'
      className='relative py-24 bg-gradient-to-br from-primary-50 via-white to-primary-50 overflow-hidden'
    >
      {/* Decorative Background Elements */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3' />
        <div className='absolute bottom-0 left-0 w-64 h-64 bg-primary-200 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3' />
        <div className='absolute top-1/2 left-1/2 w-32 h-32 bg-primary-300 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2' />
      </div>

      {/* Abstract Lines */}
      <div className='absolute inset-0 overflow-hidden opacity-20'>
        <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-200 to-transparent transform -rotate-45' />
        <div className='absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-200 to-transparent transform rotate-45' />
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-5xl font-vibe text-primary-800 mb-2'>Место проведения</h2>
          <div className='w-48 h-0.5 mx-auto bg-gray-200' />
        </motion.div>

        <div className='grid gap-8 md:grid-cols-2'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
            <img
              loading='lazy'
              className='absolute inset-0 w-full h-full object-cover object-left-bottom grayscale blur-[2px]'
              src='/club.png'
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
        </div>
      </div>
    </section>
  );
}
