import type React from 'react';
import { Link } from '@tanstack/react-router';

type NavLinkProps = {
	toLink: string;
	toName: string;
};

export const NavLink: React.FC<NavLinkProps> = ({ toLink, toName }) => {
	return (
		<Link to={toLink} className='mr-5 text-gray-600 hover:text-gray-900'>
			{toName}
		</Link>
	);
};
