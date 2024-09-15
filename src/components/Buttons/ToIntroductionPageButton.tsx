import type React from 'react';
import { useNavigate } from '@tanstack/react-router';

type ToIntroductionPageButtonProps = {
	children: React.ReactNode;
};

export const ToIntroductionPageButton: React.FC<ToIntroductionPageButtonProps> = ({
	children,
}: ToIntroductionPageButtonProps) => {
	const navigate = useNavigate();

	return (
		<button className="relative inline-sky-700 px-4 py-2 font-medium group btn-primary"
			onClick={() => navigate({ to: '/introduction-list' })}
			type='button'
		>
		<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-sky-700 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
		<span className="absolute inset-0 w-full h-full bg-white border-2 border-sky-700 group-hover:bg-sky-700"></span>
		<span className="relative text-sky-700 group-hover:text-white">{children}</span>
		</button>
	);
};
