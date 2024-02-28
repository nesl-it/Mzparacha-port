import React from 'react';

// components
import Section from '@/components/Section';
import Button from '@/components/elements/Button';
import Divider from '@/components/elements/Divider';
import Heading from '@/components/elements/Heading';
import ProjectCard from '@/components/elements/ProjectCard';

// assets
import CRV from '../../assets/projectImages/mainPage/Crv.png';
import Sweet from '../../assets/projectImages/mainPage/Sweet.png';
import ZIINA from '../../assets/projectImages/mainPage/Ziina.png';
import Unified from '../../assets/projectImages/mainPage/Unified.png';
import Consensys from '../../assets/projectImages/mainPage/Consensys.png';
import Plauzzable from '../../assets/projectImages/mainPage/Plauzzable.png';
import Link from 'next/link';

type Props = {};

const PROJECTS = [
  {
    src: Unified,
    name: 'Unified',
    type: 'Website',
    link: 'https://unified.co/',
  },
  {
    src: Consensys,
    name: 'Consensys',
    type: 'Website',
    link: 'https://consensys.io/',
  },
  {
    src: Plauzzable,
    name: 'Plauzzable',
    type: 'Website',
    link: 'https://plauzzable.com/',
  },
  {
    src: Sweet,
    name: 'Sweet IO',
    type: 'Website',
    link: 'https://sweet.io/',
  },
  {
    src: CRV,
    name: 'CRV',
    type: 'Website',
    link: 'https://www.crv.com/',
  },
  {
    src: ZIINA,
    name: 'ZIINA',
    type: 'Website',
    link: 'https://ziina.com/',
  },
];

const Section4 = (props: Props) => {
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

        <Link href={'/portfolio'}>
          {' '}
          <Button className='max-md:ml-auto max-md:mt-4'>
            View All Projects
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
      </div>

      <div className='mt-10 flex flex-col lg:flex-row lg:flex-wrap gap-5'>
        {PROJECTS?.map(({ src, link, name, type }, index) => (
          <ProjectCard
            key={index}
            src={src}
            index={index}
            link={link}
            name={name}
            type={type}
          />
        ))}
      </div>
    </Section>
  );
};

export default Section4;
