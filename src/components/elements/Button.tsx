import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

const Button = ({ children, className }: Props) => {
  return (
    <button
      className={`h-fit w-fit font-semibold max-md:text-sm 
            p-2 md:px-6 md:py-3 
            bg-primary text-dark-2 rounded-lg 
            flex items-center gap-2 
            hover:opacity-80 duration-300 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
