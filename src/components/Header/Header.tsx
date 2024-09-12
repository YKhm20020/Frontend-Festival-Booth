import type React from 'react';
import { NavLink } from './_components/NavLink';

export const Header: React.FC = () => {
	return (
		<header className='bg-blue-400 flex w-screen h-auto my-auto py-4'>
			<div className='container items-center my-auto ml-4 text-lg font-bold'>
				Festival Booth
			</div>
			<div className='container mx-auto flex flex-col md:flex-row items-center'>
				<nav className='ml-auto flex flex-wrap items-center justify-center '>
					<NavLink toLink='/'>Home</NavLink>
					<NavLink toLink='/introduction-list'>Read Intro</NavLink>
					<NavLink toLink='/write-introduction'>Write Intro</NavLink>
					<NavLink toLink='/products-list'>Read Prods</NavLink>
					<NavLink toLink='/write-products'>Write Prods</NavLink>
				</nav>
			</div>
		</header>
	);
};
