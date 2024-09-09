import type React from 'react';
import { Link } from '@tanstack/react-router';

export const Header: React.FC = () => {
	return (
		<header className='bg-black'>
			<ul className=''>
				<Link to='/' className=''>
					Home
				</Link>
			</ul>
			<ul className=''>
				<Link to='/write' className=''>
					Write
				</Link>
			</ul>
		</header>
	);
};
