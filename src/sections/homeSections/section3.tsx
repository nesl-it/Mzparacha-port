import React from 'react';
// asset
import expertise_bg_1 from '../../assets/expertise-bg-1.png';
import expertise_bg_2 from '../../assets/expertise-bg-2.png';
import expertise_bg_3 from '../../assets/expertise-bg-3.png';
// components
import Section from '@/components/Section';
import Divider from '@/components/elements/Divider';
import ExpertiseCard from '@/components/elements/ExpertiseCard';
import Heading from '@/components/elements/Heading';

type Props = {};

const EXPERTISE = [
  {
    heading: 'UI / UX Design',
    description:
      'I craft visually appealing interfaces using AdobeXd and Figma.',
    image: expertise_bg_1,
    link: '',
    color: '#7DFEFF',
  },
  {
    heading: 'Frontend Development',
    description:
      'Passionate developer creating responsive applications with expertise in MEAN/MERN Stack.',
    image: expertise_bg_2,
    link: '',
    color: '#E1D5E3',
  },
  {
    heading: 'Backend Development',
    description:
      'Backend expertise in Server side scripting, MySQL, MongoDB and efficient data storage.',
    image: expertise_bg_3,
    link: '',
    color: '#6CD1FF',
  },
];

const Section3 = (props: Props) => {
  return (
    <Section className='!py-24 bg-white'>
      <div className='mx-auto text-center'>
        <Heading className='mx-auto'>
          <span className='text-white bg-primary rounded py-1 pl-5 pr-2.5 -mr-2.5'>
            M
          </span>
          y Expertise
        </Heading>

        <h3 className='font-normal text-sm text-[#A7A7A7] mt-2'>
          I specialize in UI/UX design, frontend development and backend
          development!
        </h3>
        <Divider className={'mx-auto !w-20 mt-4'} />
      </div>

      <div className='flex flex-col lg:flex-row mt-20 max-lg:gap-5'>
        {EXPERTISE?.map(
          ({ color, description, heading, image, link }, index) => (
            <ExpertiseCard
              color={color}
              description={description}
              heading={heading}
              image={image}
              index={index}
              link={link}
              key={index + color}
            />
          )
        )}
      </div>
    </Section>
  );
};

export default Section3;
