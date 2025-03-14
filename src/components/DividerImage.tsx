import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const DividerImage: React.FC<{ imgSrc: string; cssClass?: string }> = ({ imgSrc, cssClass }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className='relative bg-stone-600 h-[400px] lg:h-[500px] w-full'
    >
      <img
        className={cn(
          'absolute inset-0 w-full h-full object-cover object-[10%_60%] grayscale',
          cssClass,
        )}
        src={imgSrc}
        draggable={false}
        alt=''
      />
    </motion.section>
  );
};

export default DividerImage;
