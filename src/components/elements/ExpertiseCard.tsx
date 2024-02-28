import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  heading: string;
  description: string;
  image: any;
  index: number;
  link: string;
  color: string;
};

const ExpertiseCard = ({
  heading,
  description,
  image,
  link,
  index,
  color,
}: Props) => {
  const isIndexEven = (index + 1) % 2 === 0;
  return (
    <div
      className={`flex-1 h-[600px] bg-[#F9F9F9] ${
        isIndexEven && ' flex flex-col lg:flex-col-reverse '
      } max-lg:shadow`}
    >
      <div
        style={{ backgroundColor: color }}
        className={`relative h-1/2 p-10 flex items-center justify-center`}
      >
        <Image
          src={image}
          alt='exp-bg'
          className='h-full object-contain'
        />

        <svg
          className={`absolute -translate-x-1/2 ${
            isIndexEven
              ? 'max-lg:top-full lg:bottom-full left-1/2 max-lg:-mt-1 lg:-mb-1 lg:rotate-180'
              : 'top-full left-1/2 -mt-1'
          }`}
          width='44'
          height='25'
          viewBox='0 0 44 25'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M22.3658 24.1953L0.82081 0.597742L43.9109 0.597746L22.3658 24.1953Z'
            fill={color}
          />
        </svg>
      </div>

      <div className='h-1/2 flex flex-col items-center p-10'>
        <p className='text-lg text-dark-2'>{heading}</p>
        <p className='text-sm text-[#A7A7A7] max-w-[180px] leading-[1.3] text-center mt-4'>
          {description}
        </p>

        <Link
          href={link}
          className='text-[#757575] flex items-center mt-auto underline pt-2 hover:text-primary duration-150 ease-in-out'
        >
          <div className='h-2 aspect-square rounded-full bg-primary mr-2'></div>{' '}
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ExpertiseCard;
