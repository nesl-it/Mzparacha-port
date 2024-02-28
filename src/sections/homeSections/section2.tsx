import Image from 'next/image';
import React from 'react';
// components
import Section from '@/components/Section';
// assets
import hand from '../../assets/hand.png';
import abstract_shapes from '../../assets/abstract_shapes.png';
import Button from '@/components/elements/Button';
import Link from 'next/link';

type Props = {};

const Section2 = (props: Props) => {
  return (
    <Section className={'lg:!min-h-screen !py-24 bg-white'}>
      <div className='bg-dark-1 h-full w-full rounded-3xl text-white'>
        <div className='flex items-center h-[100px] lg:h-[120px] xl:h-[160px] py-3 px-6 lg:px-12'>
          <Image
            src={abstract_shapes}
            alt='bg-design'
            className='mx-auto md:ml-auto md:mr-12 h-full object-contain animated-image_top1'
          />
        </div>

        <div className='flex items-center h-[100px] lg:h-[120px] xl:h-[160px] px-6 lg:px-12 border-t border-[#757575] overflow-visible gap-5'>
          <div className='relative h-3/4 lg:h-full aspect-video bg-[#6CD1FF] rounded-lg max-md:hidden'>
            <svg
              className='absolute left-1/2 -translate-x-3/4 ml-12 -top-1/2 xl:-top-3/4 h-28 lg:h-32 xl:h-72 aspect-square'
              fill='none'
              width='186'
              height='214'
              viewBox='0 0 186 214'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M93 0L113.435 71.6052L185.665 53.5L133.87 107L185.665 160.5L113.435 142.395L93 214L72.5648 142.395L0.335281 160.5L52.1296 107L0.335281 53.5L72.5648 71.6052L93 0Z'
                fill='#FF3D3D'
              />
            </svg>
          </div>
          <p className='text-3xl sm:text-5xl xl:text-6xl font-bold mx-auto'>
            Shaping the perfect
          </p>
        </div>

        <div className='flex items-center h-[110px] lg:h-[130px] xl:h-[184px] py-6 px-6 lg:px-12 border-t border-[#757575] overflow-visible gap-5'>
          <svg
            className='ml-10 max-lg:hidden animated-image_top3'
            width='70'
            height='51'
            viewBox='0 0 70 51'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0.110391 25.0601C-0.249609 29.4301 0.200391 34.1201 2.78039 37.6601C5.36039 41.2101 10.5704 43.0901 14.3404 40.8501C21.0804 36.8501 18.4704 24.2701 25.6604 21.1401C28.0604 25.5901 26.0004 30.9901 24.5704 35.8401C23.1404 40.6901 22.9504 47.0601 27.3204 49.6001C31.1204 51.8101 36.2004 49.4401 38.6804 45.8101C41.1604 42.1901 41.8404 37.6701 42.9704 33.4301C44.1004 29.1801 46.0204 24.7401 49.8804 22.6501C52.6704 26.6801 51.2304 32.1101 50.4304 36.9601C49.6404 41.8001 50.4504 48.0501 55.0904 49.6301C57.7504 50.5301 60.7804 49.3901 62.7804 47.4201C64.7804 45.4401 65.9104 42.7701 66.8004 40.1001C69.7804 31.1101 70.4104 21.3501 68.6204 12.0501C67.9804 8.73009 66.9604 5.34009 64.6604 2.86009C62.3604 0.390089 58.4704 -0.879911 55.4804 0.700089C52.5904 2.23009 51.4804 5.70009 49.9004 8.57009C48.3204 11.4301 45.0004 14.1601 42.0704 12.7201C39.5204 11.4601 39.2104 8.07009 38.5704 5.30009C36.1804 -5.08991 31.4304 4.67009 27.9104 6.31009C23.4204 8.40009 20.8604 4.94009 17.1404 3.25009C5.71039 -1.92991 0.870391 15.8001 0.110391 25.0601Z'
              fill='#907495'
            />
          </svg>

          <p className='text-3xl sm:text-5xl xl:text-6xl font-bold mx-auto'>
            Solution for your
          </p>

          <div className='relative h-full aspect-video bg-[#907495] rounded-lg max-md:hidden'>
            <svg
              className='absolute left-1/2 -translate-x-1/2 -top-1/2 h-16 lg:h-28 xl:h-auto'
              width='204'
              height='194'
              viewBox='0 0 204 194'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M102 0L146.025 46.4046L203.763 73.9352L173.234 130.145L164.893 193.565L102 181.9L39.107 193.565L30.7659 130.145L0.236954 73.9352L57.9749 46.4046L102 0Z'
                fill='#FFCB2E'
              />
            </svg>
          </div>
        </div>

        <div className='flex items-center h-[100px] lg:h-[120px] xl:h-[160px] px-6 lg:px-12 border-t border-[#757575] overflow-visible gap-5'>
          <div className='relative h-3/4 lg:h-full aspect-video bg-[#7DFEFF] rounded-lg max-md:hidden'>
            <svg
              className='absolute left-1/2 -translate-x-1/2 -mt-5 lg:-top-4 xl:-top-1/2 h-24 xl:h-72 aspect-square'
              xmlns='http://www.w3.org/2000/svg'
              width='167'
              height='167'
              viewBox='0 0 167 167'
              fill='none'
            >
              <path
                d='M110.084 7.67047C137.575 6.94707 160.053 29.4246 159.33 56.9165L159.212 61.3836C159.057 67.2664 159.986 73.1276 161.951 78.6747L163.443 82.8868C172.626 108.81 158.195 137.133 131.825 144.94L127.54 146.209C121.897 147.88 116.61 150.574 111.942 154.157L108.397 156.878C86.5806 173.622 55.1839 168.65 39.6099 145.983L37.0793 142.3C33.7466 137.45 29.5505 133.253 24.7002 129.921L21.0172 127.39C-1.64946 111.816 -6.62221 80.4194 10.1224 58.6032L12.8432 55.0584C16.4262 50.39 19.1203 45.1026 20.791 39.4598L22.0596 35.1751C29.8671 8.80518 58.1904 -5.62629 84.1132 3.55717L88.3254 5.04937C93.8724 7.01449 99.7336 7.94282 105.616 7.78802L110.084 7.67047Z'
                fill='#3AE388'
              />
            </svg>
          </div>
          <p className='text-3xl sm:text-5xl xl:text-6xl font-bold max-md:mx-auto md:ml-10'>
            Businesses!
          </p>
        </div>

        <div className='flex h-[120px] xl:h-[160px]'>
          <div className='max-sm:hidden h-full flex-1 flex items-center justify-center border-t border-[#757575] pl-12'>
            <svg
              className='ml-[180px]'
              width='66'
              height='65'
              viewBox='0 0 66 65'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M24.0105 6.61996C24.4505 4.10996 25.2205 1.17996 27.5905 0.249958C30.0905 -0.730042 32.9405 1.32996 33.8605 3.85996C34.7805 6.38996 34.3305 9.17996 33.9705 11.84C33.6205 14.51 33.4005 17.38 34.7005 19.73C36.7805 23.49 41.8105 24.39 46.0805 23.92C50.3405 23.45 54.6105 22.02 58.8405 22.77C63.0705 23.52 67.1505 27.72 65.6705 31.75C64.2805 35.52 59.3805 36.35 55.3605 36.39C51.3405 36.43 46.5405 36.69 44.4805 40.14C42.9705 42.67 43.6505 45.95 44.8605 48.64C46.0705 51.33 47.7605 53.88 48.2305 56.79C48.7005 59.7 47.3905 63.23 44.5205 63.94C41.2205 64.76 38.3205 61.52 37.0105 58.38C35.7105 55.24 34.9005 51.57 32.1205 49.61C28.6805 47.18 23.8405 48.56 20.2705 50.8C16.7005 53.04 13.4805 56.1 9.3805 57.09C5.2905 58.1 -0.0594998 55.68 0.000500219 51.46C0.0605002 47.73 4.0205 45.44 7.4905 44.07C10.9605 42.7 15.0205 40.89 15.6905 37.21C16.4105 33.28 12.7805 30.05 9.5905 27.65C6.4005 25.24 2.9005 21.75 3.9905 17.9C5.1405 13.82 11.0305 12.91 14.5805 15.22C17.1105 16.87 18.6405 19.59 20.1205 22.09C23.3005 19.02 23.2305 11.04 24.0105 6.61996Z'
                fill='#6CD1FF'
              />
            </svg>
          </div>

          <div className='relative max-sm:w-full max-sm:border-t max-sm:border-[#757575] max-sm:pt-5'>
            <Link href='mailto:malikzulqarnain.neslit@gmail.com?subject=Get Qoute'>
              <Button className='mx-auto sm:mx-8'>
                Get Started
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='15'
                  height='10'
                  viewBox='0 0 15 10'
                  fill='none'
                >
                  <path
                    d='M8.71967 1.53033C8.42678 1.23744 8.42678 0.762563 8.71967 0.46967C9.01256 0.176777 9.48744 0.176777 9.78033 0.46967L13.7803 4.46967C14.0732 4.76256 14.0732 5.23744 13.7803 5.53033L9.78033 9.53033C9.48744 9.82322 9.01256 9.82322 8.71967 9.53033C8.42678 9.23744 8.42678 8.76256 8.71967 8.46967L11.4393 5.75L1.75 5.75C1.33579 5.75 1 5.41421 1 5C1 4.58579 1.33579 4.25 1.75 4.25H11.4393L8.71967 1.53033Z'
                    fill='#171717'
                    stroke='#171717'
                    strokeWidth='0.5'
                    strokeLinecap='round'
                  />
                </svg>
              </Button>
            </Link>

            <Image
              src={hand}
              alt='hand'
              className='absolute bottom-3 left-full max-lg:hidden animated-image-hand '
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Section2;
