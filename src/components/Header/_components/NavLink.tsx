import type React from 'react';
import { Link, useLocation } from '@tanstack/react-router';

type NavLinkProps = {
	toLink: string;
	children: React.ReactNode;
};

export const NavLink: React.FC<NavLinkProps> = ({ toLink, children }) => {
	const location = useLocation();
	const isActive = location.pathname === toLink;

	return (
		<Link
			to={toLink}
			className={`mr-5 text-gray-600 relative cursor-pointer
            after:absolute after:bg-gray-900 after:h-0.5 after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-200
            hover:text-gray-900 hover:underline-offset-2
            hover:after:w-full
            ${isActive ? 'text-gray-900 font-bold after:w-full' : ''}`}
		>
			{children}
		</Link>
	);
};
