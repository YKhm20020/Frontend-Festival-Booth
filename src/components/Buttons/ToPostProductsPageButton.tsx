import type React from 'react';
import { useNavigate } from '@tanstack/react-router';

type ToPostProductsPageButtonProps = {
	children: React.ReactNode;
};

export const ToPostProductsPageButton: React.FC<ToPostProductsPageButtonProps> = ({
	children,
}: ToPostProductsPageButtonProps) => {
	const navigate = useNavigate();

	return (
		<button href="#_" className="relative inline-sky-700 px-4 py-2 font-medium group"
			onClick={() => navigate({ to: '/write-products' })}
			type='button'
		>
		<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-sky-700 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
		<span className="absolute inset-0 w-full h-full bg-white border-2 border-sky-700 group-hover:bg-sky-700"></span>
		<span className="relative text-sky-700 group-hover:text-white">{children}</span>
		</button>
	);
};
