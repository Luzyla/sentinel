import React from "react";

const Button = ({ children, onClick }: { children: string, onClick: () => void }) => {
    return (
      <button
        className='bg-first-color text-accent-color font-semibold rounded-md p-2 w-full border-solid border-accent-color border-4 hover:shadow-lg'
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
export default Button;