'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

import profile_logo from '@/assets/Logo.svg';

type Props = {};

const Navbar = (props: Props) => {
  const pathName = usePathname();

  const [show, setShow] = useState(false);
  return (
    <div
      className={`bg-white px-8 md:px-15 lg:px-24 py-6 border-b flex lg:items-center justify-between flex-wrap absolute top-0 left-0 w-full z-[999] max-lg:h-[72px] max-lg:overflow-hidden ${
        show && 'max-lg:!h-screen'
      } duration-300 ease-in-out`}
    >
      <Link
        href={'/'}
        className='text-black hover:scale-[1.06] customTransition flex items-center h-fit gap-2 cursor-pointer'
      >
        <Image
          src={profile_logo}
          alt='Profile_logo'
        />
        <span className='text-[16px] font-semibold leading-[21px]'>
          Malik Zulqurnain.
        </span>
      </Link>

      <div className='max-lg:mt-10 max-lg:w-full max-lg:order-10 flex items-center max-lg:flex-col gap-8'>
        <Link
          className='text-black hover:scale-[1.06] customTransition relative'
          href={'/'}
        >
          Home
          {pathName === '/' ? (
            <span className='w-[6px] h-[6px] rounded-full bg-[#FFC310] absolute left-[50%] -bottom-[8px]'></span>
          ) : (
            ''
          )}
        </Link>
        <Link
          className='text-black hover:scale-[1.06] customTransition relative'
          href={'/about'}
        >
          About
          {pathName.startsWith('/about') ? (
            <span className='w-[6px] h-[6px] rounded-full bg-[#FFC310] absolute left-[50%] -bottom-[8px]'></span>
          ) : (
            ''
          )}
        </Link>
        <Link
          className='text-black hover:scale-[1.06] customTransition relative'
          href={'/portfolio'}
        >
          Portfolio
          {pathName.startsWith('/portfolio') ? (
            <span className='w-[6px] h-[6px] rounded-full bg-[#FFC310] absolute left-[50%] -bottom-[8px]'></span>
          ) : (
            ''
          )}
        </Link>
        {/* <Link
          className='text-black hover:scale-[1.06] customTransition relative'
          href={'/'}
        >
          Blog
        </Link> */}
        <Link
          className='text-black hover:scale-[1.06] customTransition relative'
          href={'/faqs'}
        >
          FAQ's
          {pathName.startsWith('/faqs') ? (
            <span className='w-[6px] h-[6px] rounded-full bg-[#FFC310] absolute left-[50%] -bottom-[8px]'></span>
          ) : (
            ''
          )}
        </Link>
        <Link
          className='text-black hover:scale-[1.06] customTransition relative'
          // href={'/'}
          href='mailto:malikzulqarnain.neslit@gmail.com?subject=Get Qoute'
        >
          Contact
        </Link>
      </div>

      <div className='h-fit flex items-center gap-8'>
        <button>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={18}
            height={18}
            fill='none'
          >
            <path
              fill='#171717'
              fillRule='evenodd'
              d='M11.385 12.446a6.751 6.751 0 1 1 1.061-1.061l5.156 5.156a.75.75 0 0 1-1.061 1.06l-5.156-5.155ZM3.46 10.884a5.25 5.25 0 1 1 7.429-.005l-.005.005-.004.004a5.25 5.25 0 0 1-7.42-.004Z'
              clipRule='evenodd'
            />
          </svg>
        </button>

        <button
          className='lg:hidden'
          onClick={() => setShow(!show)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={16}
            height={12}
            fill='none'
          >
            <path
              fill='#171717'
              fillRule='evenodd'
              d='M15.75 6a.75.75 0 0 0-.75-.75H1a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75ZM15.75 1A.75.75 0 0 0 15 .25H1a.75.75 0 1 0 0 1.5h14a.75.75 0 0 0 .75-.75ZM15.75 11a.75.75 0 0 0-.75-.75H1a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75Z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
