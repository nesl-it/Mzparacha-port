'use client';

import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
// components
import Section from '@/components/Section';
import Divider from '@/components/elements/Divider';
import ExpertiseSmallCard from '@/components/elements/ExpertiseSmallCard';
import Heading from '@/components/elements/Heading';
// assets
import expertise_bg_1 from '../../assets/expertise-bg-1.png';
import expertise_bg_2 from '../../assets/expertise-bg-2.png';
import expertise_bg_3 from '../../assets/expertise-bg-3.png';

type Props = {};

const Section5 = (props: Props) => {
  const EXPERTISE = [
    {
      category: 'category',
      facebook: 'x',
      image: expertise_bg_1,
      instagram: 'x',
      name: 'Lorem Ipsum',
      pinterest: 'x',
      twitter: 'x',
    },
    {
      category: 'category',
      facebook: 'x',
      image: expertise_bg_2,
      instagram: 'x',
      name: 'Lorem Ipsum',
      pinterest: 'x',
      twitter: 'x',
    },
    {
      category: 'category',
      facebook: 'x',
      image: expertise_bg_3,
      instagram: 'x',
      name: 'Lorem Ipsum',
      pinterest: 'x',
      twitter: 'x',
    },
    {
      category: 'category',
      facebook: 'x',
      image: expertise_bg_1,
      instagram: 'x',
      name: 'Lorem Ipsum',
      pinterest: 'x',
      twitter: 'x',
    },
    {
      category: 'category',
      facebook: 'x',
      image: expertise_bg_2,
      instagram: 'x',
      name: 'Lorem Ipsum',
      pinterest: 'x',
      twitter: 'x',
    },
    {
      category: 'category',
      facebook: 'x',
      image: expertise_bg_3,
      instagram: 'x',
      name: 'Lorem Ipsum',
      pinterest: 'x',
      twitter: 'x',
    },
    {
      category: 'category',
      facebook: 'x',
      image: expertise_bg_1,
      instagram: 'x',
      name: 'Lorem Ipsum',
      pinterest: 'x',
      twitter: 'x',
    },
  ];
  return (
    <Section className='!py-24 !pr-0 bg-white'>
      <div className='mx-auto text-center pr-8 md:pr-16 lg:pr-24'>
        <Heading className='mx-auto'>
          <span className='text-white bg-primary rounded py-1 pl-5 pr-2.5 -mr-2.5'>
            M
          </span>
          y Expertise
        </Heading>

        <h3 className='font-normal text-[14px] text-[#A7A7A7] mt-2'>
          Our young team has what it takes to <br />
          tackle any creative task
        </h3>
        <Divider className={'mx-auto !w-20 mt-4'} />
      </div>

      <Slider
        arrows={false}
        dots={true}
        infinite={false}
        speed={1000}
        slidesToShow={3.5}
        slidesToScroll={1.5}
        className='flex mt-20'
        draggable
        dotsClass='slick-dots !w-fit !h-3 !left-1/2 !-translate-x-1/2 *:!m-0 !bg-[#C4C4C4] !rounded-lg'
        customPaging={function (i) {
          return <div className='large-carousel h-3 aspect-video rounded-lg' />;
        }}
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
              slidesToShow: 1.2,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        {EXPERTISE?.map(
          (
            { category, facebook, image, instagram, name, pinterest, twitter },
            index
          ) => (
            <ExpertiseSmallCard
              index={index}
              key={index + name}
              category={category}
              facebook={facebook}
              image={image}
              instagram={instagram}
              name={name}
              pinterest={pinterest}
              twitter={twitter}
            />
          )
        )}
      </Slider>
    </Section>
  );
};

export default Section5;
