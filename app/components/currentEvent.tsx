import React from "react";
import '../events.css'
import { Monoton } from 'next/font/google'

export const monoton = Monoton({
  subsets: ['latin'],
  display: 'swap',
  weight : '400'
});

const CurrentEvent = () => {
  return (
    <section className="flex flex-row p-8 items-center lg:justify-center">
      <div className="flex-initial px-6">
        <h1 className={`${monoton.className} text-xl lg:text-5xl py-4`}>
            Upcomming &nbsp;Event
        </h1>
      </div>
      <div className="basis-auto glow-border" id="card">
        <img
          src="/events/session2.png"
          alt="Your Image"
          className="w-full lg:w-[60vh] h-[50vh] lg:h-[80vh] object-cover rounded-md"
        />
      </div>
    </section>
  );
};

export default CurrentEvent;
