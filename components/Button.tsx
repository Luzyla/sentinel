import React from "react";

const Button = ({ children, onClick }: { children: React.ReactNode,  onClick: () => void }) => {
    return (
      <button
        className='bg-first-color text-accent-color font-semibold rounded-md border-solid border-accent-color border-2 hover:bg-second-color min-w-24 p-1 px-2 m-3 flex flex-row justify-center items-center gap-2'
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
export default Button;