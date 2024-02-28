import Image from 'next/image';
import React from 'react';
// components
import Section from '@/components/Section';
// assets
import hero_design_1 from '../../assets/hero-design-1.png';
import hero_design_2 from '../../assets/hero-design-2.png';
import hero_design_3 from '../../assets/hero-design-3.png';
import hero_text_bg_2 from '../../assets/hero-text-bg-2.png';
import Button from '@/components/elements/Button';
import Link from 'next/link';

type Props = {};

const Section1 = (props: Props) => {
  return (
    <Section
      className={
        'relative !min-h-screen !py-24 bg-white flex flex-col items-center justify-center text-black overflow-y-hidden'
      }
    >
      <Image
        src={hero_design_1}
        alt='bg-design'
        className='animated-image_top1  absolute top-[20%] md:top-[15%] max-sm:left-[-15%] max-md:left-[-10%] md:right-[63%] h-20 md:h-28 lg:h-48 object-contain z-0'
      />

      <div className='absolute top-[20%] right-[10%] lg:right-0 z-0'>
        <Image
          src={hero_design_3}
          alt='bg-design'
          className='h-16 lg:h-24 object-contain animated-image_top2'
        />
        <p className='max-w-[265px] text-[#757575] text-sm mt-2 max-lg:hidden'>
          Driving your business forward with strong products.
        </p>
      </div>

      <Image
        src={hero_design_2}
        alt='bg-design'
        className='animated-image3 absolute bottom-[5%] md:bottom-0 right-[-18%] md:right-0 lg:left-[63%] lg:right-auto h-28 md:h-48 lg:h-72 object-contain z-0'
      />

      <div className='absolute bottom-[0%] left-12 md:left-24 z-0'>
        <div className='relative animated-image_top3'>
          <svg
            className='absolute -top-4 md:-top-7 -left-1 md:left-0 max-md:h-16 -z-10'
            xmlns='http://www.w3.org/2000/svg'
            width='112'
            height='92'
            viewBox='0 0 112 92'
            fill='none'
          >
            <path
              d='M25.491 83.5798C32.9127 89.0444 41.3319 91.0519 49.3689 91.5705C68.3763 92.8024 86.8758 85.8635 98.8041 70.3584C110.732 54.8533 115.302 30.4248 108.72 7.40852C108.049 5.07667 107.094 2.50186 105.276 1.29226C103.062 -0.166481 100.697 1.07454 98.7621 2.29854C71.3008 19.8271 42.0604 33.9309 11.5104 44.3723C4.73331 46.6953 -4.24704 48.5371 3.4491 59.156C9.71676 67.819 17.4213 77.6431 25.491 83.5798Z'
              fill='#FFC310'
            />
          </svg>
          <p className='ml-5 text-white font-bold text-4xl md:text-5xl'>
            950<span className='text-primary ml-1'>+</span>
          </p>
        </div>
        <p className='max-w-[265px] text-[#757575] text-sm mt-4'>
          Projects Completed
        </p>
      </div>

      <h1 className='text-center text-dark-2 text-7xl md:text-8xl lg:text-[112px] font-bold z-10 leading-[1.2] mt-5'>
        I make
        <br />
        <span className='relative text-white leading-relaxed'>
          <div className='absolute top-[3%] left-[-2.5%] bg-primary h-[94%] w-[105%] -z-10 rounded-[24px] -rotate-3' />
          creative
        </span>{' '}
        things
        <br />
        everyday
      </h1>

      <Link href='mailto:malikzulqarnain.neslit@gmail.com?subject=Get Qoute'>
        <Button className='!text-[#0A5577] !bg-[#6CD1FF] mt-12 -mb-12 z-10'>
          Lets Work Together
        </Button>
      </Link>
    </Section>
  );
};

export default Section1;
