import type React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation, useStableCallback } from '@tanstack/react-router';
import { useGetProfileByName } from '../../hooks/useGetProfileByUserName';
import { useGetProductByUserName } from '../../hooks/useGetProductByUserName';

type ModalProps = {
	isOpen: boolean;
	userName: string;
	productName?: string;
	src: string;
	alt: string;
	modalTitle: string;
	modalText?: string;
	modalLink: string;
	links?: object;
	closeModal: () => void;
};

export const Modal: React.FC<ModalProps> = ({
	isOpen,
	userName,
	src,
	alt,
	modalTitle,
	modalText,
	modalLink,
	links = {},
	closeModal,
}) => {
	const {
		data: specifiedUserProfile,
		profileLoading,
		profileError,
	} = useGetProfileByName({ name: userName });

	const {
		data: specifiedUserProduct,
		productLoading,
		productError,
	} = useGetProductByUserName({ user_name: userName });

	const [isNextModalOpen, setIsNextModalOpen] = useState<boolean>(false);

	console.log('specifiedUserProfile:', specifiedUserProfile);
	console.log('specifiedUserProduct: ', specifiedUserProduct);
	console.log(userName);
	console.log('Type of specifiedUserProfile:', typeof specifiedUserProfile);

	// 現在開いているページのパスを取得
	const location = useLocation();
	let changeModalText = '';

	if (location.pathname.includes('introduction-list')) {
		changeModalText = `${userName}さんの成果物へ移動`;
	} else if (location.pathname.includes('products-list')) {
		changeModalText = `${userName}さんの自己紹介へ移動`;
	}

	useEffect(() => {
		const handleEscapeKey = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				closeModal();
			}
		};

		if (isOpen) {
			document.body.style.overflow = 'hidden';
			window.addEventListener('keydown', handleEscapeKey);
		} else {
			document.body.style.overflow = 'auto';
			window.removeEventListener('keydown', handleEscapeKey);
		}

		return () => {
			window.removeEventListener('keydown', handleEscapeKey);
		};
	}, [isOpen, closeModal]);

	if (!isOpen) {
		return null;
	}

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center'>
			<div className='fixed inset-0 bg-black bg-opacity-50' onClick={closeModal} />
			<div className='bg-white w-3/4 rounded-md p-5 flex flex-col items-center justify-center z-10'>
				<div className='relative flex justify-between mb-2 w-full'>
					<button
						type='button'
						className='absolute bg-white top-0 right-0 rounded-md p-2 inline-flex items-center justify-center text-gray-400
                        hover:text-gray-500 hover:bg-gray-100
                        focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
						onClick={closeModal}
					>
						<span className='sr-only'>Close menu</span>
						<svg
							className='h-6 w-6'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							aria-hidden='true'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					</button>
				</div>
				<h1 className='text-4xl font-bold mb-4 md:tracking-wide'>{modalTitle}</h1>
				<div className='grid-cols-2 flex flex-row md:gap-4 h-full w-full'>
					<div className='w-1/2 overflow-hidden bg-gray mb-4 md:mb-0 flex items-center justify-center'>
						<img
							className='rounded-lg object-cover object-center'
							src={src}
							width={600}
							height={1000}
							alt={alt}
						/>
					</div>
					<div className='ml-4 md:w-1/2 flex flex-col items-center'>
						<p className='text-left mr-auto animate-fade-right animate-duration-[1600ms]'>
							{modalText}
						</p>
						{modalLink}
						<div className='container cursor-pointer mt-auto mb-4'>
							{(Object.keys(links).length > 0
								? Object.values(links)
								: ['No links available']
							).map((item, index) => (
								<p key={index} className='text-base text-blue-300'>
									{item}
								</p>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
