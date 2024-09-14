import type React from 'react';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { useGetProfileByName } from '../../hooks/useGetProfileByUserName';
import { useGetProductByUserName } from '../../hooks/useGetProductByUserName';

type CardProps = {
	userName: string;
	src: string;
	alt?: string;
	title: string;
	links?: object;
	modalTitle: string;
	modalText?: string;
	theOtherModalTitle?: string;
	theOtherModalText?: string;
	theOtherModalLinks?: object;
};

export const Card: React.FC<CardProps> = ({
	userName,
	src,
	alt,
	title,
	links = {},
	modalTitle,
	modalText,
	theOtherModalTitle,
	theOtherModalText,
	theOtherModalLinks
}) => {
	useGetProfileByName({ name: userName });
	useGetProductByUserName({ user_name: userName });

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
				className='relative group flex flex-col shadow-2xl rounded-xl overflow-hidden w-60 md:w-48 lg:w-56 cursor-pointer transition-all duration-300 ease-in-out
                hover:scale-105'
				onClick={openModal}
			>
				<img
					className='object-cover object-center w-60 md:w-48 lg:w-56 h-60 '
					src={src}
					alt={alt ?? title}
					width={300}
					height={300}
				/>
				<div className='inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
				<div className='absolute bg-white h-full inset-x-0 bottom-1 p-4 transform translate-y-44 group-hover:translate-y-24 transition-transform duration-500 ease-in-out'>
					<h1 className='text-2xl font-semibold text-neutral-800 mb-5 truncate py-1'>
						{title}
					</h1>
					<div className='space-y-1 overflow-hidden'>
						{(Object.keys(links).length > 0
							? Object.values(links)
							: ['No links available']
						).map((item, index) => (
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
				theOtherModalTitle={theOtherModalTitle}
				theOtherModalText={theOtherModalText}
				theOtherModalLinks={theOtherModalLinks}
				links={links}
				closeModal={closeModal}
			/>
		</>
	);
};
