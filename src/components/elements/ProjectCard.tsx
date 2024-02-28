import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

type Props = {
  src: any;
  index: number;
  link: string;
  name: string;
  type: string;
};

const ProjectCard = ({ src, index, name, type, link }: Props) => {
  const row = Math.round((index + 1) / 2);
  const isRowEven = row % 2 === 0;
  const isIndexEven = (index + 1) % 2 === 0;
  const isLargeCard =
    (isRowEven && !isIndexEven) || (!isRowEven && isIndexEven);

  return (
    <div
      className={`relative ${
        isLargeCard ? 'lg:flex-[1.3]' : 'lg:flex-1'
      } max-lg:w-full max-lg:aspect-video lg:min-w-[40%] lg:h-[450px] rounded-lg`}
    >
      <Image
        src={src}
        alt='project_image'
        fill
      />

      <div className='absolute top-0 left-0 h-full w-full opacity-0 bg-opacity-0 bg-dark-2 p-6 md:p-10 flex items-end justify-between hover:opacity-100 hover:bg-opacity-70 duration-500 ease-in-out'>
        <div>
          <p className='uppercase max-md:text-sm text-[#A7A7A7]'>{type}</p>
          <p className='uppercase text-white md:text-2xl font-bold'>{name}</p>
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
};

export default ProjectCard;
