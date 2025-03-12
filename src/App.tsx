import './App.css';
import { Hero } from './components/Hero';
import Story from './components/Story';
import EventDetails from './components/EventDetails';
import RSVP from './components/RSVP';
import Location from './components/Location';
import { Toaster } from '@/components/ui/sonner';
import CountdownTimer from './components/CountdownTimer';
import Invitation from './components/Invitation';
import DividerImage from './components/DividerImage';

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
        {/* <RSVP /> */}
        <Location />
      </main>
      <Toaster />
    </div>
  );
};

export default App;
