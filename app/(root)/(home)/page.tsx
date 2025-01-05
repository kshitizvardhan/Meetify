import MeetingTypeList from '@/components/MeetingTypeList';
import { WobbleCard } from '@/components/ui/wobble-card';
import React from 'react';

const Home = () => {
  const now = new Date();

  const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const [time, period] = timeString.split(' ');
  const date = new Intl.DateTimeFormat('en-IN', { dateStyle: 'full' }).format(now);

  const Noise = () => {
    return (
      <div
        className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
        style={{
          backgroundImage: "url(/noise.webp)",
          backgroundSize: "30%",
        }}
      ></div>
    );
  };

  return (
    <section className="flex size-full flex-col gap-5 text-white font-poppins">
      <div className="relative h-[253px] w-full rounded-[20px] bg-hero bg-cover overflow-hidden cursor-pointer">
        {/* Noise effect scoped to this div */}
        <Noise />
        <div className="relative z-10 flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
            Upcoming Meeting at: 12:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-6xl">
              {time}
              <span className="text-lg font-semibold text-sky-1 lg:text-3xl ml-2">{period}</span>
            </h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList/>
    </section>
  );
};

export default Home;
