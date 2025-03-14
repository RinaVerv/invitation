import { Button } from '@/components/ui/button';

const WillYouAttend: React.FC = () => {
  return (
    <section className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-10'>
          <h2 className='text-5xl font-vibe mb-4'>Придёте?</h2>
          <div className='w-24 h-0.5 mx-auto bg-gray-200' />
        </div>

        <div className='max-w-[470px] mx-auto text-center'>
          <p className='text-2xl font-main font-100 text-zinc-900 mb-8'>
            Мы будем признательны, если вы подтвердите своё присутствие за 2 недели до торжества.
          </p>
        </div>
        <Button
          asChild
          variant='outline'
          className='uppercase rounded-none border-stone-800 bg-transparent h-12 px-10 border-2 cursor-pointer hover:bg-stone-800 hover:text-white transition duration-300 ease-in-out'
        >
          <a
            href='https://forms.yandex.ru/u/67d165e790fa7b474e8961fa/'
            target='_blank'
            rel='noopener noreferrer'
          >
            заполнить анкету
          </a>
        </Button>
      </div>
    </section>
  );
};

export default WillYouAttend;
