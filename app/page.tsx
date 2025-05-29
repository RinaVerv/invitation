"use client";

import { Hero } from '../components/Hero';
import Story from '../components/Story';
import EventDetails from '../components/EventDetails';
import Location from '../components/Location';
import CountdownTimer from '../components/CountdownTimer';
import Invitation from '../components/Invitation';
import DividerImage from '../components/DividerImage';
import DressCode from '../components/DressCode';
import Details from '../components/Details';
import Organizer from '../components/Organizer';
import { RSVPForm } from '@/components/RSVPForm';

export default function Home() {

  return (
    <div className='min-h-screen bg-gradient-to-b from-stone-50 via-white to-stone-50'>
      <main>
        <Hero />
        <CountdownTimer />
        <Invitation />
        <DividerImage imgSrc='/divider-8.jpg' />
        <Story />
        <DividerImage imgSrc='/divider-3.jpg' />
        <EventDetails />
        <DividerImage imgSrc='/divider-6.jpg' />
        <DressCode />
        <DividerImage imgSrc='/divider-7.jpg' />
        <Details />
        <DividerImage imgSrc='/divider-9.jpg' />
        <RSVPForm />
        <Location />
        <Organizer />
      </main>
    </div>
  );
}
