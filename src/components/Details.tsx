import React from 'react';

const Details: React.FC = () => {
  return (
    <section id='details' className='py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-10'>
          <h2 className='font-vibe text-5xl mb-4'>Детали</h2>
          <div className='w-24 h-0.5 mx-auto bg-gray-200' />
        </div>
        <div className='font-main text-2xl'>
          <h4 className='font-main text-2xl mb-4 font-semibold'>Подарки</h4>
          <p className='mb-10 max-w-lg mx-auto'>
            Ваши добрые пожелания в конвертах станут для нас самым ценным подарком, который поможет
            осуществить наши мечты.
          </p>
          <h4 className='font-main text-2xl mb-4 font-semibold'>Цветы</h4>
          <p className='max-w-lg mx-auto'>
            Просим не дарить нам цветы — мы не сможем насладиться их красотой. Будем очень рады
            бутылочке вашего любимого алкоголя, чтобы пополнить наш семейный бар.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Details;
