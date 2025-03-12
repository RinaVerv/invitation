import { cn } from '@/lib/utils';

const DividerImage: React.FC<{ imgSrc: string; cssClass?: string }> = ({ imgSrc, cssClass }) => {
  return (
    <section className='relative bg-stone-600 h-[400px] lg:h-[500px] w-full'>
      <img
        className={cn(
          'absolute inset-0 w-full h-full object-cover object-[10%_60%] grayscale',
          cssClass,
        )}
        src={imgSrc}
        draggable={false}
        alt=''
      />
    </section>
  );
};

export default DividerImage;
