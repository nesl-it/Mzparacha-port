import React from 'react';
// sections
import Section1 from '@/sections/homeSections/section1';
import Section2 from '@/sections/homeSections/section2';
import Section3 from '@/sections/homeSections/section3';
import Section4 from '@/sections/homeSections/section4';
import Section5 from '@/sections/homeSections/section5';
import Section6 from '@/sections/homeSections/section6';
import Section7 from '@/sections/homeSections/section7';

export default function Home() {
  return (
    <main className=''>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </main>
  );
}
