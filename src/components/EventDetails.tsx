import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Event {
  title: string;
  time: string;
  location: string;
  address: string;
  description: string;
  icon: ReactNode;
}

const events: Event[] = [
  {
    title: 'Сбор гостей',
    time: '14:00 - 15:30',
    location: 'пер. Западный',
    address: '',
    description: '',
    icon: (
      <svg width={32} height={32} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 122 118'>
        <path d='M28.746 5.495c-.54 0-1.051.25-1.381.67l-6.43 8.24c-.11.15-.2.311-.26.471a.845.845 0 0 0-.04.17c-.03.12-.05.23-.06.35 0 .07 0 .13.01.2.01.11.02.219.05.319l.06.201c.02.04.021.09.041.13.03.06.08.109.12.169.02.04.03.081.06.121l11.51 15.219a5.061 5.061 0 0 0-2.211 4.181v.63c-17.6 5.17-29.09 21.949-27.47 40.439 1.64 18.64 16.96 33.671 35.64 34.951.9.06 1.81.09 2.71.09 5.59 0 11.08-1.21 16.11-3.53 7.35 8.9 18.08 13.989 29.67 13.989 21.25 0 38.531-17.28 38.531-38.53.01-21.25-17.271-38.529-38.521-38.529-5.63 0-11.019 1.19-16.069 3.52-4.89-5.9-11.481-10.25-18.781-12.41v-.63c0-1.73-.88-3.261-2.21-4.171l11.51-15.219c.03-.04.04-.08.06-.12.04-.06.09-.11.12-.17.02-.04.03-.09.04-.13.03-.07.05-.13.06-.2.03-.11.04-.21.05-.32 0-.07.01-.13.01-.2-.01-.12-.03-.23-.06-.35-.01-.06-.019-.11-.039-.17a1.45 1.45 0 0 0-.26-.47l-6.431-8.24c-.33-.42-.84-.67-1.38-.67h-18.29Zm.85 3.49h3.099l-1.77 4.74h-5.03zm6.84 0h9.39l1.77 4.74h-12.93Zm13.118 0h3.09l3.711 4.74h-5.03zm-23.718 8.24h5.08l4.65 12.872zm8.798 0h12.98l-4.929 13.641h-3.13zm16.711 0h5.08l-9.73 12.872zm-16.07 17.131h11.7c.86 0 1.56.699 1.56 1.559v1.961c0 .8.54 1.5 1.32 1.7 6.87 1.76 13.1 5.65 17.76 11.03-1.46.84-2.86 1.79-4.2 2.82-5.69-6.33-13.72-9.921-22.29-9.921-16.54 0-30 13.462-30 30.012 0 16.54 13.46 30 30 30a29.873 29.873 0 0 0 18.42-6.32c.74-.58 1.47-1.2 2.14-1.85 6-5.63 9.43-13.58 9.43-21.82 0-3.28-.53-6.5-1.56-9.58 1.32-1.15 2.74-2.17 4.25-3.02 1.55 4 2.33 8.23 2.33 12.6 0 10.33-4.54 20.089-12.45 26.779a35.066 35.066 0 0 1-6.79 4.49c-5.58 2.83-11.9 4.1-18.26 3.65-16.98-1.17-30.909-14.83-32.399-31.77-1.51-17.23 9.5-32.83 26.17-37.1.77-.2 1.318-.9 1.318-1.7v-1.961c0-.86.701-1.559 1.551-1.559zm5.85 12.649c7.54 0 14.6 3.151 19.62 8.681-7.88 7.29-12.38 17.49-12.38 28.28 0 4.88.9 9.62 2.68 14.13a26.306 26.306 0 0 1-9.92 1.92c-14.61 0-26.5-11.89-26.5-26.5 0-14.62 11.89-26.511 26.5-26.511zm45.781 1.931c19.32 0 35.03 15.71 35.03 35.02-.02 19.33-15.732 35.04-35.052 35.04-10.28 0-19.82-4.39-26.49-12.12 1.47-.85 2.871-1.8 4.211-2.83 5.69 6.33 13.71 9.92 22.29 9.92 16.55 0 30.011-13.46 30.011-30.01 0-16.54-13.462-30-30.012-30-4.52 0-8.87.98-12.93 2.92-.05.03-.11.05-.16.08a29.483 29.483 0 0 0-7.468 5.16l-.01.01c-.01 0-.01.01-.01.01a30.073 30.073 0 0 0-9.422 21.81c0 3.28.53 6.5 1.57 9.59-.35.3-.698.59-1.058.88-1.01.79-2.082 1.5-3.192 2.14a34.843 34.843 0 0 1-2.33-12.6 34.99 34.99 0 0 1 12.452-26.779c2.08-1.77 4.359-3.28 6.789-4.49 4.92-2.49 10.23-3.75 15.78-3.75zm-.022 8.53c14.62 0 26.51 11.89 26.51 26.5 0 14.62-11.89 26.51-26.51 26.51-7.53 0-14.589-3.15-19.609-8.69 7.88-7.3 12.381-17.5 12.381-28.27 0-4.9-.902-9.65-2.682-14.14 3.15-1.27 6.47-1.91 9.91-1.91zm-20.138 9.28c.58 2.2.888 4.46.888 6.77 0 6.42-2.239 12.44-6.359 17.21-.58-2.2-.89-4.46-.89-6.76 0-6.42 2.24-12.43 6.36-17.22z' />
      </svg>
    ),
  },
  {
    title: 'Торжественная церемония',
    time: '16:00 - 17:00',
    location: '',
    address: '',
    description: '',
    icon: (
      <svg width={32} height={32} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 122 118'>
        <path d='M28.746 5.495c-.54 0-1.051.25-1.381.67l-6.43 8.24c-.11.15-.2.311-.26.471a.845.845 0 0 0-.04.17c-.03.12-.05.23-.06.35 0 .07 0 .13.01.2.01.11.02.219.05.319l.06.201c.02.04.021.09.041.13.03.06.08.109.12.169.02.04.03.081.06.121l11.51 15.219a5.061 5.061 0 0 0-2.211 4.181v.63c-17.6 5.17-29.09 21.949-27.47 40.439 1.64 18.64 16.96 33.671 35.64 34.951.9.06 1.81.09 2.71.09 5.59 0 11.08-1.21 16.11-3.53 7.35 8.9 18.08 13.989 29.67 13.989 21.25 0 38.531-17.28 38.531-38.53.01-21.25-17.271-38.529-38.521-38.529-5.63 0-11.019 1.19-16.069 3.52-4.89-5.9-11.481-10.25-18.781-12.41v-.63c0-1.73-.88-3.261-2.21-4.171l11.51-15.219c.03-.04.04-.08.06-.12.04-.06.09-.11.12-.17.02-.04.03-.09.04-.13.03-.07.05-.13.06-.2.03-.11.04-.21.05-.32 0-.07.01-.13.01-.2-.01-.12-.03-.23-.06-.35-.01-.06-.019-.11-.039-.17a1.45 1.45 0 0 0-.26-.47l-6.431-8.24c-.33-.42-.84-.67-1.38-.67h-18.29Zm.85 3.49h3.099l-1.77 4.74h-5.03zm6.84 0h9.39l1.77 4.74h-12.93Zm13.118 0h3.09l3.711 4.74h-5.03zm-23.718 8.24h5.08l4.65 12.872zm8.798 0h12.98l-4.929 13.641h-3.13zm16.711 0h5.08l-9.73 12.872zm-16.07 17.131h11.7c.86 0 1.56.699 1.56 1.559v1.961c0 .8.54 1.5 1.32 1.7 6.87 1.76 13.1 5.65 17.76 11.03-1.46.84-2.86 1.79-4.2 2.82-5.69-6.33-13.72-9.921-22.29-9.921-16.54 0-30 13.462-30 30.012 0 16.54 13.46 30 30 30a29.873 29.873 0 0 0 18.42-6.32c.74-.58 1.47-1.2 2.14-1.85 6-5.63 9.43-13.58 9.43-21.82 0-3.28-.53-6.5-1.56-9.58 1.32-1.15 2.74-2.17 4.25-3.02 1.55 4 2.33 8.23 2.33 12.6 0 10.33-4.54 20.089-12.45 26.779a35.066 35.066 0 0 1-6.79 4.49c-5.58 2.83-11.9 4.1-18.26 3.65-16.98-1.17-30.909-14.83-32.399-31.77-1.51-17.23 9.5-32.83 26.17-37.1.77-.2 1.318-.9 1.318-1.7v-1.961c0-.86.701-1.559 1.551-1.559zm5.85 12.649c7.54 0 14.6 3.151 19.62 8.681-7.88 7.29-12.38 17.49-12.38 28.28 0 4.88.9 9.62 2.68 14.13a26.306 26.306 0 0 1-9.92 1.92c-14.61 0-26.5-11.89-26.5-26.5 0-14.62 11.89-26.511 26.5-26.511zm45.781 1.931c19.32 0 35.03 15.71 35.03 35.02-.02 19.33-15.732 35.04-35.052 35.04-10.28 0-19.82-4.39-26.49-12.12 1.47-.85 2.871-1.8 4.211-2.83 5.69 6.33 13.71 9.92 22.29 9.92 16.55 0 30.011-13.46 30.011-30.01 0-16.54-13.462-30-30.012-30-4.52 0-8.87.98-12.93 2.92-.05.03-.11.05-.16.08a29.483 29.483 0 0 0-7.468 5.16l-.01.01c-.01 0-.01.01-.01.01a30.073 30.073 0 0 0-9.422 21.81c0 3.28.53 6.5 1.57 9.59-.35.3-.698.59-1.058.88-1.01.79-2.082 1.5-3.192 2.14a34.843 34.843 0 0 1-2.33-12.6 34.99 34.99 0 0 1 12.452-26.779c2.08-1.77 4.359-3.28 6.789-4.49 4.92-2.49 10.23-3.75 15.78-3.75zm-.022 8.53c14.62 0 26.51 11.89 26.51 26.5 0 14.62-11.89 26.51-26.51 26.51-7.53 0-14.589-3.15-19.609-8.69 7.88-7.3 12.381-17.5 12.381-28.27 0-4.9-.902-9.65-2.682-14.14 3.15-1.27 6.47-1.91 9.91-1.91zm-20.138 9.28c.58 2.2.888 4.46.888 6.77 0 6.42-2.239 12.44-6.359 17.21-.58-2.2-.89-4.46-.89-6.76 0-6.42 2.24-12.43 6.36-17.22z' />
      </svg>
    ),
  },
  {
    title: 'Свадебный банкет',
    time: '17:00 - 23:00',
    location: 'Шахтер',
    address: 'ул. Октябрьская, 1',
    description: 'Празднование свадьбы в красивом месте.',
    icon: (
      <svg width={32} height={32} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 122 118'>
        <path d='M28.746 5.495c-.54 0-1.051.25-1.381.67l-6.43 8.24c-.11.15-.2.311-.26.471a.845.845 0 0 0-.04.17c-.03.12-.05.23-.06.35 0 .07 0 .13.01.2.01.11.02.219.05.319l.06.201c.02.04.021.09.041.13.03.06.08.109.12.169.02.04.03.081.06.121l11.51 15.219a5.061 5.061 0 0 0-2.211 4.181v.63c-17.6 5.17-29.09 21.949-27.47 40.439 1.64 18.64 16.96 33.671 35.64 34.951.9.06 1.81.09 2.71.09 5.59 0 11.08-1.21 16.11-3.53 7.35 8.9 18.08 13.989 29.67 13.989 21.25 0 38.531-17.28 38.531-38.53.01-21.25-17.271-38.529-38.521-38.529-5.63 0-11.019 1.19-16.069 3.52-4.89-5.9-11.481-10.25-18.781-12.41v-.63c0-1.73-.88-3.261-2.21-4.171l11.51-15.219c.03-.04.04-.08.06-.12.04-.06.09-.11.12-.17.02-.04.03-.09.04-.13.03-.07.05-.13.06-.2.03-.11.04-.21.05-.32 0-.07.01-.13.01-.2-.01-.12-.03-.23-.06-.35-.01-.06-.019-.11-.039-.17a1.45 1.45 0 0 0-.26-.47l-6.431-8.24c-.33-.42-.84-.67-1.38-.67h-18.29Zm.85 3.49h3.099l-1.77 4.74h-5.03zm6.84 0h9.39l1.77 4.74h-12.93Zm13.118 0h3.09l3.711 4.74h-5.03zm-23.718 8.24h5.08l4.65 12.872zm8.798 0h12.98l-4.929 13.641h-3.13zm16.711 0h5.08l-9.73 12.872zm-16.07 17.131h11.7c.86 0 1.56.699 1.56 1.559v1.961c0 .8.54 1.5 1.32 1.7 6.87 1.76 13.1 5.65 17.76 11.03-1.46.84-2.86 1.79-4.2 2.82-5.69-6.33-13.72-9.921-22.29-9.921-16.54 0-30 13.462-30 30.012 0 16.54 13.46 30 30 30a29.873 29.873 0 0 0 18.42-6.32c.74-.58 1.47-1.2 2.14-1.85 6-5.63 9.43-13.58 9.43-21.82 0-3.28-.53-6.5-1.56-9.58 1.32-1.15 2.74-2.17 4.25-3.02 1.55 4 2.33 8.23 2.33 12.6 0 10.33-4.54 20.089-12.45 26.779a35.066 35.066 0 0 1-6.79 4.49c-5.58 2.83-11.9 4.1-18.26 3.65-16.98-1.17-30.909-14.83-32.399-31.77-1.51-17.23 9.5-32.83 26.17-37.1.77-.2 1.318-.9 1.318-1.7v-1.961c0-.86.701-1.559 1.551-1.559zm5.85 12.649c7.54 0 14.6 3.151 19.62 8.681-7.88 7.29-12.38 17.49-12.38 28.28 0 4.88.9 9.62 2.68 14.13a26.306 26.306 0 0 1-9.92 1.92c-14.61 0-26.5-11.89-26.5-26.5 0-14.62 11.89-26.511 26.5-26.511zm45.781 1.931c19.32 0 35.03 15.71 35.03 35.02-.02 19.33-15.732 35.04-35.052 35.04-10.28 0-19.82-4.39-26.49-12.12 1.47-.85 2.871-1.8 4.211-2.83 5.69 6.33 13.71 9.92 22.29 9.92 16.55 0 30.011-13.46 30.011-30.01 0-16.54-13.462-30-30.012-30-4.52 0-8.87.98-12.93 2.92-.05.03-.11.05-.16.08a29.483 29.483 0 0 0-7.468 5.16l-.01.01c-.01 0-.01.01-.01.01a30.073 30.073 0 0 0-9.422 21.81c0 3.28.53 6.5 1.57 9.59-.35.3-.698.59-1.058.88-1.01.79-2.082 1.5-3.192 2.14a34.843 34.843 0 0 1-2.33-12.6 34.99 34.99 0 0 1 12.452-26.779c2.08-1.77 4.359-3.28 6.789-4.49 4.92-2.49 10.23-3.75 15.78-3.75zm-.022 8.53c14.62 0 26.51 11.89 26.51 26.5 0 14.62-11.89 26.51-26.51 26.51-7.53 0-14.589-3.15-19.609-8.69 7.88-7.3 12.381-17.5 12.381-28.27 0-4.9-.902-9.65-2.682-14.14 3.15-1.27 6.47-1.91 9.91-1.91zm-20.138 9.28c.58 2.2.888 4.46.888 6.77 0 6.42-2.239 12.44-6.359 17.21-.58-2.2-.89-4.46-.89-6.76 0-6.42 2.24-12.43 6.36-17.22z' />
      </svg>
    ),
  },
];

export default function EventDetails() {
  return (
    <section
      id='events'
      className='relative py-24 bg-gradient-to-b from-zinc-50 to-white overflow-hidden'
    >
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16 space-y-4'
        >
          <h2 className='font-vibe text-5xl text-zinc-800 font-medium tracking-tight'>
            Программа &nbsp;дня
          </h2>
          <div className='w-48 h-0.5 mx-auto bg-gray-200' />
        </motion.div>
        <div className='flex flex-col justify-center items-center'>
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className='flex flex-row'
            >
              <p className='font-main text-zinc-500 text-4xl text-left mb-6'>{event.time}</p>
              <h3 className='font-main text-zinc-800 text-4xl ml-6 font-100'>{`${event.title}`}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
