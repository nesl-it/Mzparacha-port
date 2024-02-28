import React, { Fragment, useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa6';

import Button from './Button';

const Accordion = ({ DATA, variant }: any) => {
  const [openAccordion, setOpenAccordion] = useState<any>(1);
  console.log('data', DATA);

  const handleAccordionClick = (index: any) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };

  return (
    <Fragment>
      {variant === 'secondary' ? (
        <div className='flex flex-col lg:gap-4 w-full'>
          {DATA?.map((item: any, index: any) => (
            <div
              key={index}
              className={`flex flex-col gap-3 px-10 py-4 rounded-2xl ${
                index === openAccordion ? 'bg-black text-white' : ''
              }`}
            >
              <div className='flex flex-col gap-4'>
                <button
                  onClick={() => handleAccordionClick(index)}
                  className={`flex justify-between items-center w-full rounded gap-4`}
                >
                  <span className={`text-left flex items-center`}>
                    <span className='text-lg text-dark-2'>
                      {'0' + (index + 1)}
                    </span>
                    <p className=''>{item?.title}</p>

                    {/* <span className='ml-4 text-lg'>{item?.title}</span> */}
                  </span>
                  <span className='text-2xl text-light'>
                    {openAccordion === index ? (
                      <p className='text-[30px] bg-white text-black rounded-full h-[40px] w-[40px] min-h-[40px] min-w-[40px] flex items-center justify-center font-[700]'>
                        -
                      </p>
                    ) : (
                      <p className='text-[20px] bg-white border border-black text-black rounded-full h-[40px] w-[40px] min-h-[40px] min-w-[40px] flex items-center justify-center font-[700]'>
                        +
                      </p>
                    )}
                  </span>
                </button>
                {openAccordion === index && (
                  <div className='w-full h-[1px] bg-white' />
                )}
                {openAccordion === index && (
                  <>
                    {item?.content && (
                      <p className='text-sm text-[#A7A7A7] leading-[1.3] text-left mt-1 mb-1 ml-14 mr-16'>
                        {item?.content}
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='flex flex-col lg:gap-4 w-full'>
          {DATA?.map((item: any, index: any) => (
            <div
              key={index}
              className={`flex flex-col gap-3
         `}
            >
              <div className='flex flex-col gap-4'>
                <button
                  onClick={() => handleAccordionClick(index)}
                  className={`flex justify-between items-center w-full rounded gap-4`}
                >
                  <span
                    className={`text-left flex items-center text-lg text-dark-2 ${
                      index === openAccordion ? 'text-dark-2' : 'text-graytext'
                    }`}
                  >
                    {`${index + 1 < 10 ? '0' + (index + 1) : index + 1}`}.{' '}
                    <span className='ml-8'>{item?.title}</span>
                  </span>
                  <span className='text-2xl text-light'>
                    {openAccordion === index ? (
                      <FaChevronUp className='text-black' />
                    ) : (
                      <FaChevronDown className='text-graytext' />
                    )}
                  </span>
                </button>
                {openAccordion === index && (
                  <>
                    {item?.content && (
                      <p className='text-sm text-[#A7A7A7] leading-[1.3] text-left mt-1 mb-1 ml-14 mr-16'>
                        {item?.content}
                      </p>
                    )}
                    {/* {item?.website && (
                      <div>
                        <Button
                          variants='secondary'
                          title='WEBSITE VISIT'
                        />
                      </div>
                    )} */}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </Fragment>
  );
};
export { Accordion };
