import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const WEDDING_DATE = new Date('August 1, 2025 16:00:00').getTime();

const pluralizeRussian = (count: number, singular: string, few: string, many: string): string => {
  const absCount = Math.abs(count);
  const lastDigit = absCount % 10;
  const lastTwoDigits = absCount % 100;

  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return `${singular}`; // Singular form
  } else if ([2, 3, 4].includes(lastDigit) && ![12, 13, 14].includes(lastTwoDigits)) {
    return `${few}`; // Few form
  } else {
    return `${many}`; // Many form
  }
};

const CountdownTimer: React.FC = () => {
  const now = new Date().getTime();
  const distance = WEDDING_DATE - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const [timeLeft, setTimeLeft] = useState({
    days,
    hours,
    minutes,
    seconds,
  });

  // Set the wedding date - December 25, 2023

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = WEDDING_DATE - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      // Calculate time units
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [WEDDING_DATE]);

  const timeUnits = [
    { label: pluralizeRussian(timeLeft.days, 'день', 'дня', 'дней'), value: timeLeft.days },
    { label: pluralizeRussian(timeLeft.hours, 'час', 'часа', 'часов'), value: timeLeft.hours },
    {
      label: pluralizeRussian(timeLeft.minutes, 'минута', 'минуты', 'минут'),
      value: timeLeft.minutes,
    },
    {
      label: pluralizeRussian(timeLeft.seconds, 'секунда', 'секунды', 'секунд'),
      value: timeLeft.seconds,
    },
  ];

  return (
    <section
      id='countdown'
      className='py-20 bg-gradient-to-tr from-primary-50 via-white to-primary-40'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <h2 className='font-vibe text-5xl text-accent-dark mb-4'>
          До главного события года осталось:
        </h2>
        <div className='w-48 h-0.5 mx-auto mb-10 bg-gray-200' />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto'
        >
          {timeUnits.map((unit) => (
            <div
              key={unit.label}
              className='bg-white p-4 md:p-6 rounded-lg shadow-sm border border-surface-200'
            >
              <div className='font-main text-3xl md:text-4xl lg:text-5xl text-accent-dark mb-2'>
                {unit.value.toString().padStart(2, '0')}
              </div>
              <div className='font-main text-primary-500 uppercase text-xs md:text-lg tracking-wider'>
                {unit.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownTimer;
