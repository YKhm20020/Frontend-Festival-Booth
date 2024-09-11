import type React from 'react';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';

type CardProps = {
	src: string;
	alt?: string;
	title: string;
	links?: string[];
	modalTitle: string;
	modalText?: string;
};

export const Card: React.FC<CardProps> = ({
	src,
	alt,
	title,
	links = [],
	modalTitle,
	modalText,
}) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<div
				className='relative group flex flex-col shadow-2xl rounded-xl overflow-hidden w-40 md:w-48 lg:w-56 cursor-pointer transition-all duration-300 ease-in-out
                    hover:scale-105'
				onClick={openModal}
			>
				<img
					className='object-cover object-center w-40 h-60 md:w-72 lg:w-80'
					src={src}
					alt={alt ?? title}
					width={300}
					height={300}
				/>
				<div className='inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
				<div className='absolute bg-white inset-x-0 bottom-0 p-4 transform translate-y-[calc(100%-4.5rem)] group-hover:translate-y-0 transition-transform duration-500 ease-in-out'>
					<h1 className='text-2xl font-semibold text-neutral-800 mb-4 truncate py-1'>
						{title}
					</h1>
					<div className='space-y-1 overflow-hidden'>
						{links.map((item, index) => (
							<p
								key={index}
								className='text-base text-transparent group-hover:text-gray-600 truncate transition-colors duration-500 delay-200 ease-in-out'
							>
								{item}
							</p>
						))}
					</div>
				</div>
			</div>
			<Modal
				isOpen={isModalOpen}
				src={src}
				alt={alt ?? title}
				modalTitle={modalTitle}
				modalText={modalText}
				links={links}
				closeModal={closeModal}
			/>
		</>
	);
};
