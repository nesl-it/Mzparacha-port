// import React from 'react';

// const TextArea = ({
//   min,
//   icon,
//   label,
//   height,
//   disabled,
//   onChange,
//   placeholder,
//   type = 'text',
//   styleVariation,
//   ...rest
// }: any) => {
//   return (
//     <div className='flex flex-col gap-1 w-full'>
//       <label className='paragraph2'>{label}</label>
//       <div className='relative flex items-center'>
//         <textarea
//           disabled={disabled}
//           type={type}
//           min={min}
//           placeholder={placeholder}
//           className={`w-full ${height ? height : 'h-full'} ${
//             styleVariation === 'secondary'
//               ? 'p-3 border border-black'
//               : 'py-2 px-4 font-semibold placeholder:font-semibold placeholder:text-supporting text-xs'
//           } bg-[#F8F8F8] rounded-md border focus:outline-none text-secondary`}
//           onChange={onChange}
//           {...rest}
//         />
//         {icon && <div className='absolute right-3'>{icon}</div>}
//       </div>
//     </div>
//   );
// };

// export { TextArea };
