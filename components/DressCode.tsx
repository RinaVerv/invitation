import { motion } from 'framer-motion';

const circles = [
  {
    name: 'Белый',
    type: 'outline',
    color: '#ecebeb',
    fill: 'white',
    label: 'Контурный круг',
  },
  {
    name: 'Золотой',
    type: 'solid',
    color: '#FFD700',
    fill: 'url(#goldGradient)',
    label: 'Золотой круг',
  },
  {
    name: 'Красный',
    type: 'solid',
    color: '#E53935',
    fill: '#E53935',
    label: 'Красный круг',
  },
  {
    name: 'Чёрный',
    type: 'solid',
    color: '#222',
    fill: '#222',
    label: 'Чёрный круг',
  }
];

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

const circleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const DressCode: React.FC = () => {
  return (
    <section className='py-20'>
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
            Дресс-код
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
          className='max-w-[470px] mx-auto text-center'
        >
          <motion.p 
            variants={itemVariants}
            className='text-xl  font-cormorant-sc font-100 text-zinc-900 mb-8'
          >
            Мы будем признательны, если вы поддержите цветовую гамму нашей свадьбы.
          </motion.p>
        </motion.div>
      </div>
      <svg width="0" height="0">
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#F4BD76', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#D4AF37', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#B8860B', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
          </svg>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='w-full flex justify-center mb-8'
      >
        <div className='flex justify-center gap-6 md:gap-10 max-w-xl px-4 sm:px-6'>

          {circles.map((circle) => (
            <motion.div
              key={circle.name}
              variants={circleVariants}
              className='flex flex-col items-center flex-shrink-0 gap-2'
            >
              <svg
                className='w-14 h-14 md:w-24 md:h-24'
                viewBox="0 0 24 24"
                aria-label={circle.label}
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke={circle.type === 'outline' ? circle.color : 'none'}
                  strokeWidth={circle.type === 'outline' ? '1' : '0'}
                  fill={circle.type === 'outline' ? 'white' : circle.fill}
                />
              </svg>
              <span className="mt-2 text-sm text-gray-600 font-cormorant-sc">{circle.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default DressCode;
