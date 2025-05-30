import { motion } from 'framer-motion';
import { Button } from './ui/button';

const Organizer = () => {
  return (
    <section
      className="relative py-20 bg-[#f8f6f3] overflow-hidden"
      style={{
        backgroundImage: 'url(/divider-4.jpg)', // Use a soft floral image from public
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '600px',
      }}
    >
      {/* Overlay for softening the background */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px] pointer-events-none" />

      {/* Main content container */}
      <div className="relative z-10 max-w-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-10'>
          <h2 className='text-5xl md:text-7xl font-marianna mb-4 text-white'>Организатор</h2>
          <div className='w-24 h-0.5 mx-auto bg-gray-200' />
        </div>
      </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-8"
        >
          <p className="font-cormorant-sc text-xl font-cormorant-sc font-100 text-white mb-8">
            Заблудились, готовите сюрприз или у вас появились какие-либо вопросы?
          </p>
          <p className="font-cormorant-sc text-xl font-cormorant-sc font-100 text-white mb-8">
            Вам с радостью поможет наш замечательный организатор:
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mb-2"
        >
          <div className="font-marianna text-4xl text-white mb-2">Дарья</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mb-6"
        >
          <div className="font-cormorant-sc text-2xl text-white tracking-wide">+7 908 076 29 02</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="w-full flex justify-center mb-8"
        >
          <Button
            asChild
            variant="outline"
            className="uppercase rounded-none border-stone-800 bg-stone-800 text-white h-12 px-10 border-2 cursor-pointer hover:bg-transparent hover:text-white transition duration-300 ease-in-out"
          >
            <a href="tel:+79080762902">Позвонить</a>
          </Button>
        </motion.div>

        {/* Social icons row */}
       {/*  <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="flex justify-center gap-8 mt-2 text-white"
        >
          <a href="tel:+79080762902" target="_blank" rel="noopener noreferrer" aria-label="Позвонить" className="group">
            <span className="sr-only">Позвонить</span>
            <PhoneIcon className="w-14 h-14 p-3 rounded-full border-2 border-stone-800 bg-stone-800 text-white group-hover:bg-transparent group-hover:text-stone-800 transition duration-300 ease-in-out" />
          </a>
          <a href="https://instagram.com/your_organizer" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="group">
            <span className="sr-only">Instagram</span>
            <CameraIcon className="w-14 h-14 p-3 rounded-full border-2 border-stone-800 bg-stone-800 text-white group-hover:bg-transparent group-hover:text-stone-800 transition duration-300 ease-in-out" />
          </a>
          <a href="https://t.me/your_organizer" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="group">
            <span className="sr-only">Telegram</span>
            <PaperAirplaneIcon className="w-14 h-14 p-3 rounded-full border-2 border-stone-800 bg-stone-800 text-white group-hover:bg-transparent group-hover:text-stone-800 transition duration-300 ease-in-out rotate-12" />
          </a>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Organizer;
