import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';

const DividerImage: React.FC<{ imgSrc: string; cssClass?: string }> = ({ imgSrc, cssClass }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className='relative bg-stone-600 h-[400px] lg:h-[500px] w-full overflow-hidden'
    >
       <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 transition-all duration-500' 
      />
      {/* Blurred background */}
      <Image
        className='absolute inset-0 w-full h-full object-cover object-[50%_50%] filter blur-md scale-110'
        src={imgSrc}
        alt=''
        fill
        priority
        draggable={false}
      />
      {/* Main image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          className={cn(
            'w-full h-full object-cover object-[50%_10%] md:object-contain',
            cssClass,
          )}
          src={imgSrc}
          alt=''
          fill
          priority
          draggable={false}
        />
      </div>
    </motion.section>
  );
};

export default DividerImage;
