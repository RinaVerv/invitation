import './App.css';
import { Hero } from './components/Hero';
import Story from './components/Story';
import EventDetails from './components/EventDetails';
import Location from './components/Location';
import { Toaster } from '@/components/ui/sonner';
import CountdownTimer from './components/CountdownTimer';
import Invitation from './components/Invitation';
import DividerImage from './components/DividerImage';
import DressCode from './components/DressCode';
import WillYouAttend from './components/WillYouAttend';
import Details from './components/Details';

const App: React.FC = () => {
  return (
    <div className='min-h-screen bg-[#f4f4f4]'>
      <main>
        <Hero />
        <CountdownTimer />
        <Invitation />
        <DividerImage imgSrc='/divider-1.jpg' />
        <Story />
        <DividerImage imgSrc='/divider-2.jpg' cssClass='object-[10%_20%]' />
        <EventDetails />
        <DividerImage imgSrc='/divider-1.jpg' />
        <DressCode />
        <DividerImage imgSrc='/divider-2.jpg' cssClass='object-[10%_20%]' />
        <Details />
        <WillYouAttend />
        <Location />
      </main>
      <Toaster />
    </div>
  );
};

export default App;
