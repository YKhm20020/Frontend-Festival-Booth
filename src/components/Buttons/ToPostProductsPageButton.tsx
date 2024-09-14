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
		<button
			className='w-72 h-44 text-3xl relative rounded px-5 py-2.5 overflow-hidden group bg-fuchsia-800 hover:bg-gradient-to-r hover:from-white hover:to-white text-white hover:text-fuchsia-800 hover:ring-4 hover:ring-offset-2 hover:ring-fuchsia-800 transition-all ease-out duration-300'
			onClick={() => navigate({ to: '/write-products' })}
			type='button'
		>
			<span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-fuchsia-950 opacity-10 rotate-12 group-hover:-translate-x-40 ease' />
			<span className='relative'>{children}</span>
		</button>
	);
};
