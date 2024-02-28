'use client';
import React from 'react';
// sections
import Section1 from '@/sections/portfolioSections/section1';
import Section6 from '@/sections/homeSections/section6';
import Section5 from '@/sections/homeSections/section5';
import Divider from '@/components/elements/Divider';
import Heading from '@/components/elements/Heading';
import Section from '@/components/Section';
import { Accordion } from '@/components/elements/Accordion';

const FAQS_DATA = [
  {
    title: 'How much is a website?',
    content: `The cost of a website is widely based on several factors, including the complexity of the design, features, functionality, and the size of the project. For a more accurate estimate, I would need additional details about your specific requirements. Feel free to reach out to me with your project details, and I'll provide a personalized quote.`,
  },
  {
    title: 'How long does it take to make a great website?',
    content: `The timeline for creating a website depends on various factors such as the project's complexity, the number of features, and the responsiveness of the client in providing necessary information. On average, a simple website can take a few weeks, while more complex projects may take a few months. I prioritize both efficiency and quality to ensure a timely delivery without compromising the final result.`,
  },
  {
    title: 'Can you also deal with bigger projects?',
    content: `Absolutely! I am experienced in handling projects of various sizes, from small business websites to large-scale applications. My expertise as a full stack developer allows me to manage and coordinate different aspects of development, ensuring scalability and performance. Whether your project is big or small, I am committed to delivering a high-quality, tailored solution that meets your specific needs.`,
  },
  {
    title:
      'Do you provide website maintenance services after the development is complete?',
    content: `Yes, I offer website maintenance services to ensure your website stays up-to-date with the latest technologies, security patches, and content updates. Feel free to inquire about maintenance plans tailored to your specific needs.`,
  },
  {
    title: 'Can you redesign an existing website?',
    content: `Absolutely! Whether you need a complete overhaul or just a refresh, I can redesign your existing website to improve its aesthetics, usability, and functionality. Let me know your specific goals and preferences, and we can discuss how to enhance your online presence through a redesign.`,
  },
  {
    title: 'What steps are involved in the website development process?',
    content: `The website development process typically involves several key steps, including project discovery, planning, design, development, testing, deployment, and ongoing maintenance. Each step is crucial for delivering a successful website. I will work closely with you throughout the process to ensure your vision is realized, and the final product meets your expectations.`,
  },
  {
    title:
      'Can you integrate third-party services into the website, such as payment gateways or social media APIs?',
    content: `Yes, I can integrate various third-party services into your website, such as payment gateways, social media APIs, and other tools that enhance functionality. Integrating these services seamlessly into your website ensures a smooth user experience and expands the capabilities of your online platform.`,
  },
  {
    title:
      'What motivates you to keep evolving as a full-stack developer after nine years in the field?',
    content: `Constant growth is essential in the tech industry. My motivation stems from the ever-evolving nature of technology, the thrill of learning something new, and the satisfaction of applying that knowledge to create innovative solutions.`,
  },
  {
    title: 'How did you get started in the world of full-stack development?',
    content: `I started my journey in full-stack development during the early stages of my career. Fascinated by the prospect of working on both the front and back ends of a project, I sought to master the entire development stack. Over the years, I've gained extensive experience in creating seamless, end-to-end solutions.`,
  },
  {
    title:
      'What advice do you have for aspiring developers looking to enter the field?',
    content: `For those aspiring to join the world of full-stack development, I recommend a combination of curiosity, continuous learning, and hands-on experience. The field is dynamic, so adaptability and a passion for learning will be your greatest assets.`,
  },
  {
    title: 'What sets your development approach apart from others?',
    content: `My development approach is characterized by a holistic perspective. Having worked on diverse projects, I understand the importance of not only writing efficient code but also considering the end user's experience. This approach results in solutions that are not only technically robust but also user-friendly and intuitive.`,
  },
  {
    title:
      ' As a full-stack developer, do you have a preferred development methodology (Agile, Scrum, etc.), and how do you adapt it to suit different project requirements?',
    content: `Flexibility in development methodologies is essential. While I appreciate the agility of methodologies like Scrum, I adapt my approach based on project needs. Whether it's the rapid iterations of Agile or the structure of Scrum, I tailor the methodology to ensure the most efficient and effective development process.`,
  },
  {
    title:
      'Do you ever have dreams about coding, and if so, are they in HTML or JavaScript?',
    content: `Haha, absolutely! My dreams are like a browser window – multiple tabs open, some crashing, and occasionally a pop-up that's hard to close. But hey, at least it's not a blue screen of death!`,
  },
  {
    title: `On a scale from "404 Not Found" to "It's working on my machine," how confident are you in your code?`,
    content: `On the scale from '404 Not Found' to 'It's working on my machine,' I'm currently at 'It compiles, ship it!' What could possibly go wrong?`,
  },
];

export default function Faqs() {
  return (
    <main className=''>
      <br />
      <br />

      <Section className='!py-20'>
        <div className='w-full flex flex-col md:flex-row md:items-end md:justify-between'>
          <div className='w-fit'>
            <Heading className='text-black'>
              FAQ’
              <span className='text-white bg-primary rounded pr-1 -mr-1'>
                s
              </span>
            </Heading>
            <Divider className={'!w-20 mt-4'} />
          </div>
        </div>
        <br />

        <Accordion
          DATA={FAQS_DATA}
          //   variant='secondary'
        />
      </Section>
      <br />
      <br />
    </main>
  );
}
