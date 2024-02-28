import React from 'react';
// sections
import Section1 from '@/sections/portfolioSections/section1';
import Section6 from '@/sections/homeSections/section6';
import Section5 from '@/sections/homeSections/section5';
import Divider from '@/components/elements/Divider';
import Heading from '@/components/elements/Heading';
import Section from '@/components/Section';

export default function About() {
  return (
    <main className=''>
      <br />
      <br />

      <Section className='bg-dark-1 !py-20'>
        <div className='w-full flex flex-col md:flex-row md:items-end md:justify-between'>
          <div className='w-fit'>
            <Heading className='text-white'>
              Ab
              <span className='text-black bg-primary rounded pr-1 -mr-1'>
                ou
              </span>
              t Me:
              <br className='max-md:hidden' />
              {/* created for my beloved clients. */}
            </Heading>
            <Divider className={'!w-20 mt-4'} />
          </div>
        </div>
        <br />
        Hello, I'm Malik Zulqurnain. I have been working as a MEAN and MERN
        Stack developer since 2016. I’m dedicated to transforming innovative
        ideas into tangible and impactful web solutions. Over the past 7 years,
        my journey in the world of web development has been marked by a
        commitment to excellence, continuous learning, and a keen eye for
        detail.
        <br />
        <br />I am a dedicated Full Stack Developer with a passion for creating
        innovative and scalable solutions. My journey in the tech world has been
        shaped by diverse experiences, from being a Junior Developer at Vizz Web
        Solutions to leading a team as a Senior Developer at CloudTek. I thrive
        on challenges and am always eager to explore new opportunities that push
        the boundaries of my technical and creative abilities.
      </Section>
      <Section className='!py-20'>
        <div className='w-full flex flex-col md:flex-row md:items-end md:justify-between'>
          <div className='w-fit'>
            <Heading className='text-black'>
              1. My Exp
              <span className='text-white bg-primary rounded pr-1 -mr-1'>
                ert
              </span>
              ise:
              <br className='max-md:hidden' />
            </Heading>
            <Divider className={'!w-20 mt-4'} />
          </div>
        </div>
        <br />
        <div className='text-black'>
          As a seasoned MEAN/MERN Stack developer with over 7 years of hands-on
          experience, I have honed my skills in crafting robust and scalable web
          applications. My proficiency extends across the entire development
          stack, enabling me to seamlessly navigate through MongoDB, Express.js,
          Angular (for MEAN), React.js (for MERN), and Node.js.
        </div>

        <br />
        <div className='w-full flex flex-col md:flex-row md:items-end md:justify-between'>
          <div className='w-fit'>
            <Heading className='text-black'>
              <span className='relative text-white rounded pr-1 -mr-1'>
                <div className='absolute top-[6%] left-[-2.5%] bg-primary h-[100%] w-[105%] -z-10 rounded -rotate-3' />{' '}
                Why
              </span>{' '}
              I Code:
              <br className='max-md:hidden' />
            </Heading>
            <Divider className={'!w-20 mt-4'} />
          </div>
        </div>
        <br />
        <div className='text-black'>
          My goal is not just to write code but to architect solutions that
          empower businesses and individuals alike, providing them with the
          tools to succeed in the ever evolving digital landscape.
        </div>
      </Section>
      <br />
      <br />
    </main>
  );
}
