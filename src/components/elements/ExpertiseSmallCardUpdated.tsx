import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  index: number;
  name: string;
  image: any;
};

const styles = {
  link: 'min-h-[40px] md:min-h-[48px] h-10 md:h-12 flex items-center justify-center aspect-square cursor-pointer ',
  linkHover:
    'hover:bg-slate-300 duration-[400ms] ease-in-out opacity-0 group-hover:opacity-100',
};

const ExpertiseSmallCardUpdate = ({ image, name, index }: Props) => {
  const color = index % 2 === 0 ? '#7DFEFF' : '#6CD1FF';
  return (
    <div className='h-full'>
      <div
        className={`relative h-64 md:h-80 aspect-[1.1/1] rounded-xl bg-[${color}]`}
      >
        <Image
          src={image}
          alt='exp-bg'
          fill
          className='!h-[70%] !w-[70%] !top-[15%] !left-[15%]'
        />
      </div>

      <h1 className='mt-5 text-2xl font-bold text-dark-2'>{name}</h1>
      {/* <h1 className='mt-2 text-[#757575] uppercase'>{category}</h1> */}
    </div>
  );
};

export default ExpertiseSmallCardUpdate;
