import React from 'react';

const Story: React.FC = () => {
  return (
    <section id='story' className='py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='font-vibe text-5xl mb-4'>Наша История</h2>
          <div className='w-24 h-0.5 mx-auto bg-gray-200' />
        </div>
        <div className='font-main text-2xl max-w-4xl mx-auto'>
          <p className='mb-4'>
            Мы познакомились через социальную сеть «ВК». Саша написал первый, познакомились,
            пообщались. Через некоторое время встретились вживую. И тут Саша понял… надо брать.
            Поначалу разделяло расстояние: Саша в Пласте, Мариша в Че. Только переписки, звонки и
            всё.
          </p>
          <p>
            Но прошло лето, и Саша вернулся в Че, и тут всё стало волшебно. Мы виделись практически
            каждый день. Саше нравилось в ней всё: от внешности до характера, он влюбился. Спасибо
            Божьему мужику, что свёл нас. ❤️‍🔥
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;
