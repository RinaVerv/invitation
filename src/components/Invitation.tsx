import { Button } from '@/components/ui/button';

const Invitation: React.FC = () => {
  return (
    <section className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-10'>
          <h2 className='text-5xl font-vibe mb-4'>Дорогие родители и друзья</h2>
          <div className='w-48 h-0.5 mx-auto bg-gray-200' />
        </div>

        <div className='max-w-[470px] mx-auto text-center'>
          <p className='text-2xl font-main font-100 text-zinc-900 mb-6'>
            Мы с радостью приглашаем вас разделить с нами один из самых важных дней в нашей жизни -
            день нашей свадьбы.
          </p>
          <p className='font-main text-4xl uppercase font-bold'>1 августа 2025</p>

          <p className='max-w-sm mx-auto font-main font-100 text-zinc-900 mt-6 text-2xl'>
            Ваше присутствие сделает этот день еще более особенным для нас.
          </p>
          <p className='text-2xl font-main mt-8 font-bold'>Александр & Марина</p>
          <Button
            asChild
            variant='outline'
            className='uppercase rounded-none mt-12 border-stone-800 bg-transparent h-12 px-10 border-2 cursor-pointer hover:bg-stone-800 hover:text-white transition duration-300 ease-in-out'
          >
            <a
              href='https://forms.yandex.ru/u/67d165e790fa7b474e8961fa/'
              target='_blank'
              rel='noopener noreferrer'
            >
              я иду
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Invitation;
