'use client';

import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
// assets
import Azuki from '../../assets/projectImages/portfolioPage/Azuki.png';
import CRV from '../../assets/projectImages/portfolioPage/CRV.png';
import Unified from '../../assets/projectImages/portfolioPage/Unified.png';
import Sweet from '../../assets/projectImages/portfolioPage/Sweet.png';
import Consensys from '../../assets/projectImages/portfolioPage/Consensys.png';
import Ziina from '../../assets/projectImages/portfolioPage/Ziina.png';
import Plauzzable from '../../assets/projectImages/portfolioPage/Plauzzable.png';
// components
import Section from '@/components/Section';
import Divider from '@/components/elements/Divider';
import PortfolioProjectCard from '@/components/elements/PortfolioProjectCard';
import Heading from '@/components/elements/Heading';
import Button from '@/components/elements/Button';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

const PROJECTS = [
  {
    src: Azuki,
    name: 'Azuki',
    type: 'Website',
    link: 'https://www.azuki.com/',
  },
  {
    src: CRV,
    name: 'CRV',
    type: 'Website',
    link: 'https://www.crv.com/',
  },
  {
    src: Unified,
    name: 'Unified',
    type: 'Website',
    link: 'https://unified.co/',
  },
  {
    src: Sweet,
    name: 'Sweet IO',
    type: 'Website',
    link: 'https://sweet.io/',
  },
  {
    src: Plauzzable,
    name: 'Plauzzable',
    type: 'Website',
    link: 'https://plauzzable.com/',
  },
  {
    src: Consensys,
    name: 'Consensys',
    type: 'Website',
    link: 'https://consensys.io/',
  },
  {
    src: Ziina,
    name: 'ZIINA',
    type: 'Website',
    link: 'https://ziina.com/',
  },
];

// const PROJECT_REELS = [
//   {
//     src: Consensys,
//     name: 'Consensys',
//     type: 'Website',
//     link: 'abc',
//   },
//   {
//     src: project_img,
//     name: 'Plauzzable',
//     type: 'Website',
//     link: 'abc',
//   },
//   {
//     src: project_img,
//     name: 'Plauzzable',
//     type: 'Website',
//     link: 'abc',
//   },
//   {
//     src: project_img,
//     name: 'Plauzzable',
//     type: 'Website',
//     link: 'abc',
//   },
//   {
//     src: project_img,
//     name: 'Plauzzable',
//     type: 'Website',
//     link: 'abc',
//   },
//   {
//     src: project_img,
//     name: 'Plauzzable',
//     type: 'Website',
//     link: 'abc',
//   },
//   {
//     src: project_img,
//     name: 'Plauzzable',
//     type: 'Website',
//     link: 'abc',
//   },
//   {
//     src: project_img,
//     name: 'Plauzzable',
//     type: 'Website',
//     link: 'abc',
//   },
//   {
//     src: project_img,
//     name: 'Plauzzable',
//     type: 'Website',
//     link: 'abc',
//   },
//   {
//     src: project_img,
//     name: 'Plauzzable',
//     type: 'Website',
//     link: 'abc',
//   },
//   {
//     src: project_img,
//     name: 'Plauzzable',
//     type: 'Website',
//     link: 'abc',
//   },
//   {
//     src: project_img,
//     name: 'Plauzzable',
//     type: 'Website',
//     link: 'abc',
//   },
//   {
//     src: project_img,
//     name: 'Plauzzable',
//     type: 'Website',
//     link: 'abc',
//   },
// ];

const Section1 = (props: Props) => {
  return (
    <Section className='bg-dark-1 !py-20'>
      <div className='w-full flex flex-col md:flex-row md:items-end md:justify-between'>
        <div className='w-fit'>
          <Heading className='text-white'>
            Here's some of my{' '}
            <span className='text-black bg-primary rounded pr-1 -mr-1'>
              pro
            </span>
            jects,
            <br className='max-md:hidden' />
            created for my beloved clients.
          </Heading>
          <Divider className={'!w-20 mt-4'} />
        </div>
      </div>

      {/* top 2 projects */}
      <div className='mt-10 flex flex-col lg:flex-row lg:flex-wrap gap-5'>
        {PROJECTS.slice(0, 2)?.map(({ src, link, name, type }, index) => {
          console.log('PROJECTS.slice(0, 2)', { src, link, name, type });
          return (
            <div
              className={`relative ${
                index % 2 !== 0 ? 'lg:flex-[1.3]' : 'lg:flex-1'
              } max-lg:w-full max-lg:aspect-video lg:min-w-[40%] lg:h-[450px] rounded-lg`}
            >
              <Image
                src={src}
                alt='project_image'
                fill
              />

              <div className='absolute top-0 left-0 h-full w-full opacity-0 bg-opacity-0 bg-dark-2 p-6 md:p-10 flex items-end justify-between hover:opacity-100 hover:bg-opacity-70 duration-500 ease-in-out'>
                <div>
                  <p className='uppercase max-md:text-sm text-primary'>
                    {type}
                  </p>
                  <p className='uppercase md:text-2xl font-bold text-primary'>
                    {name}
                  </p>
                </div>

                <Link
                  target='_blank'
                  href={link}
                >
                  <Button>
                    Visit Site
                    <svg
                      className='-rotate-45'
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
              </div>
            </div>
          );
        })}
      </div>

      <br />
      <br />

      {/* projects carousel */}
      {/* <Slider
        infinite={false}
        speed={1000}
        slidesToShow={3.5}
        slidesToScroll={1}
        className='flex'
        draggable
        responsive={[
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2.2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 1.8,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 580,
            settings: {
              slidesToShow: 1.1,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        {PROJECT_REELS?.map(({ src, link, name, type }, index) => (
          <div className=''>
            <div
              className={`relative h-[380px] md:h-[450px] aspect-[9/13] rounded-md bg-slate-200`}
            >
              <Image
                src={src}
                alt='project_image'
                fill
              />

              <div className='absolute top-0 left-0 h-full w-full bg-opacity-70 bg-dark-2 p-4 flex items-end'>
                <Link target="_blank"
                  href={link}
                  className='mx-auto '
                >
                  <Button className='text-sm !py-2 !px-3'>
                    Visit Site
                    <svg
                      className='-rotate-45'
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
              </div>
            </div>
          </div>
        ))}
      </Slider> */}

      {/* <div className=''> */}
      <div
        className={`relative h-[380px] md:h-[450px] aspect-[9/13] rounded-md w-full`}
      >
        <Image
          src={PROJECTS[2].src}
          alt='project_image'
          fill
        />

        <div className='absolute top-0 left-0 h-full w-full opacity-0 bg-opacity-0 bg-dark-2 p-6 md:p-10 flex items-end justify-between hover:opacity-100 hover:bg-opacity-70 duration-500 ease-in-out'>
          <div>
            <p className='uppercase max-md:text-sm text-primary'>
              {PROJECTS[2].type}
            </p>
            <p className='uppercase md:text-2xl font-bold text-primary'>
              {PROJECTS[2].name}
            </p>
          </div>

          <Link
            target='_blank'
            href={PROJECTS[2].link}
          >
            <Button>
              Visit Site
              <svg
                className='-rotate-45'
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
        </div>
        {/* <div className='absolute top-0 left-0 h-full w-full bg-opacity-70 bg-dark-2 p-4 flex items-end'>
          <Link target="_blank"
            href={PROJECTS[2].link}
            className='mx-auto '
          >
            <Button className='text-sm !py-2 !px-3'>
              Visit Site
              <svg
                className='-rotate-45'
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
        </div> */}
      </div>
      {/* </div> */}

      <br />
      <br />

      {/* bottom projects */}
      <div className='flex flex-col xl:flex-row gap-4'>
        <div className='flex-1 flex flex-col gap-4'>
          {PROJECTS.slice(3, 5)?.map(({ src, link, name, type }, index) => {
            console.log('asdsadsa', { src, link, name, type });
            return (
              <PortfolioProjectCard
                key={index + link}
                src={src}
                index={index}
                link={link}
                name={name}
                type={type}
              />
            );
          })}
        </div>
        <div className='flex-1 lg:flex-[1.3] flex flex-col gap-4'>
          {PROJECTS.slice(5, PROJECTS.length)?.map(
            ({ src, link, name, type }, index) => (
              <PortfolioProjectCard
                key={index + name}
                src={src}
                index={index + 1}
                link={link}
                name={name}
                type={type}
              />
            )
          )}
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />

      <Button className='mx-auto'>
        Back to home
        <svg
          className='rotate-180'
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
    </Section>
  );
};

export default Section1;
