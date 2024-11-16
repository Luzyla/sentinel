import React from 'react';

interface Props {
	className?: string;
}

const Button = ({
	children,
	onClick,
}: {
	children: React.ReactNode;
	/* className: string; */
	onClick: () => void;
}) => {
	return (
		<button
			className="bg-first-color text-accent-color font-semibold rounded-md border-solid border-accent-color border-2 hover:bg-second-color min-w-6 px-4 py-2 m-3 flex flex-row justify-center items-center gap-2 min-h-[30px] text-xl"
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
