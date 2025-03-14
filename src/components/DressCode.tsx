import { motion } from 'framer-motion';

const colors = [
  { name: 'Светло-розовый', hex: '#FFB6C1' },
  { name: 'Нежно-голубой', hex: '#ADD8E6' },
  { name: 'Лаванда', hex: '#E6E6FA' },
  { name: 'Персиковый', hex: '#FFDAB9' },
  { name: 'Мятный', hex: '#98FF98' },
];

const DressCode: React.FC = () => {
  return (
    <section className='py-20 '>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-10'>
          <h2 className='text-5xl font-vibe mb-4'>Дресс-код</h2>
          <div className='w-24 h-0.5 mx-auto bg-gray-200' />
        </div>

        <div className='max-w-[470px] mx-auto text-center'>
          <p className='text-2xl font-main font-100 text-zinc-900 mb-8'>
            Мы будем признательны, если вы поддержите цветовую гамму нашей свадьбы.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-x-2 gap-y-6 md:grid-flow-col md:gap-10 auto-cols-min md:grid-cols-none max-w-xl mx-auto place-content-center align-content-top'>
        {colors.map((color, index) => (
          <motion.div
            key={color.name}
            className='flex flex-col h-full items-center'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div
              className='w-10 h-10 md:w-16 md:h-16 rounded-md'
              style={{ backgroundColor: color.hex }}
            />
            <span className='font-main mt-2 text-center text-sm'>{color.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DressCode;
