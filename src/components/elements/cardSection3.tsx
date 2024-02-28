// import Image from 'next/image';
// import React from 'react';

// const CardSection3 = ({
//   color,
//   heading,
//   cardIcon,
//   direction,
//   description,
// }: {
//   color: string;
//   cardIcon?: any;
//   heading: String;
//   direction: string;
//   description: string;
// }) => {
//   return (
//     <div className={`flex w-[33%] max-w-[33%] flex-${direction}`}>
//       <div
//         className={`flex items-center justify-center p-2 h-[308.78px] max-h-[308.78px] w-full bg-[${color}]`}
//       >
//         {cardIcon && (
//           <Image
//             className=''
//             src={cardIcon}
//             alt='card_icon'
//           />
//         )}
//       </div>
//       <div className='flex items-center justify-center h-[308.78px] max-h-[308.78px] bg-[#F9F9F9]'>
//         <div className='flex flex-col items-center justify-center gap-4 w-[65%] max-w-[65%]'>
//           <h1 className='font-bold text-black text-[20px]'>{heading}</h1>
//           <h1 className='font-normal text-[#A7A7A7] text-[14px]'>
//             {description}
//           </h1>
//           <div className='flex items-center gap-2'>
//             <div className='p-1 rounded-full bg-[#FFC310]'></div>
//             <span className='font-normal text-[#757575] text-[14px] underline'>
//               Read More
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export { CardSection3 };
