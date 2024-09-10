import type React from 'react';
import { NavLink } from './_components/NavLink';

export const Header: React.FC = () => {
	return (
		<header className='bg-blue-400 flex flex-col w-screen h-10'>
			<div className='container mx-auto my-auto flex flex-wrap flex-col md:flex-row items-center'>
				<nav className='ml-auto flex flex-wrap items-center justify-center '>
					<NavLink toLink='/' toName='Home' />
					<NavLink toLink='/' toName='Write' />
				</nav>
			</div>
		</header>
	);
};
