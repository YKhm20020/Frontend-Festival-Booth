import type React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from '@tanstack/react-router';

type ModalProps = {
	isOpen: boolean;
	src: string;
	alt: string;
	modalTitle: string;
	modalText?: string;
	theOtherModalTitle?: string;
	theOtherModalText?: string;
	links?: object;
	theOtherModalLinks?: object;
	closeModal: () => void;
};

export const Modal: React.FC<ModalProps> = ({
	isOpen,
	src,
	alt,
	modalTitle,
	modalText,
	theOtherModalTitle,
	theOtherModalText,
	links = {},
	theOtherModalLinks = {},
	closeModal,
}) => {
	const [currentTitle, setCurrentTitle] = useState(modalTitle);
	const [currentText, setCurrentText] = useState(modalText);
	const [, setIsSecondary] = useState<boolean>(false);
	const [linkMessage, setLinkMessage] = useState<string>('');
	const [modalLinkText, setModalLinkText] = useState<string>('');
	const [currentLinks, setCurrentLinks] = useState<object>(links || {});
	const [heading, setHeading] = useState<string>('自己紹介コメント');

	const location = useLocation();

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

	useEffect(() => {
		if (!isOpen) {
			setIsSecondary(false);
			setLinkMessage('');
		}
	}, [isOpen]);

	useEffect(() => {
		setCurrentTitle(modalTitle);
		setCurrentText(modalText);
	}, [modalTitle, modalText]);

	const isIntroductionList = location.pathname.includes('introduction-list');
	const isProductsList = location.pathname.includes('products-list');

	// モーダルが開かれたときにheadingを更新
	useEffect(() => {
		if (isIntroductionList) {
			setHeading('自己紹介コメント');
		} else if (isProductsList) {
			setHeading('成果物コメント');
		}
	}, [isIntroductionList, isProductsList]);

	useEffect(() => {
		if (!isOpen) return;

		if ((!theOtherModalTitle || !theOtherModalText) && isIntroductionList) {
			setLinkMessage('成果物がありません');
			setModalLinkText('成果物へ移動');
		} else if ((!theOtherModalTitle || !theOtherModalText) && isProductsList) {
			setLinkMessage('自己紹介がありません');
			setModalLinkText('自己紹介へ移動');
		} else {
			setLinkMessage('');
			setModalLinkText(isIntroductionList ? '成果物へ移動' : '自己紹介へ移動');
		}
	}, [isOpen, theOtherModalTitle, theOtherModalText, isIntroductionList, isProductsList]);
	const handleModalLinkClick = () => {
		if (theOtherModalTitle && theOtherModalText) {
			setIsSecondary((prev) => {
				const newIsSecondary = !prev;
				setCurrentTitle(newIsSecondary ? theOtherModalTitle : modalTitle);
				setCurrentText(newIsSecondary ? theOtherModalText : modalText);
				setCurrentLinks(newIsSecondary ? theOtherModalLinks : links);
				setHeading(
					newIsSecondary
						? location.pathname.includes('introduction-list')
							? '成果物コメント'
							: '自己紹介コメント'
						: location.pathname.includes('introduction-list')
							? '自己紹介コメント'
							: '成果物コメント',
				);
				setModalLinkText(
					newIsSecondary
						? location.pathname.includes('introduction-list')
							? '自己紹介へ移動'
							: '成果物へ移動'
						: location.pathname.includes('introduction-list')
							? '成果物へ移動'
							: '自己紹介へ移動',
				);
				return newIsSecondary;
			});
		}
	};

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
				<h1 className='text-4xl font-bold mb-4 md:tracking-wide'>{currentTitle}</h1>
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
							<p className='text-[min(13vw,24px)] font-bold'>
								{heading}
								<br></br>
							</p>
							{currentText}
						</p>
						<div className='container cursor-pointer mt-auto mb-4'>
							{(Object.keys(currentLinks).length > 0
								? Object.values(currentLinks)
								: ['No links available']
							).map((item, index) => (
								<p key={index} className='text-base text-blue-400'>
									<div className='flex items-center space-x-4 space-y-2'>
										{index === 0 ? (
											<svg
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 24 24'
												width='32'
												height='32'
											>
												<path d='M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z'></path>
											</svg>
										) : (
											<svg
												className='ml-1 mt-4'
												viewBox='0 0 24 24'
												width='32'
												height='32'
											>
												<path d='m11.68 8.62 6.55-7.62h-1.55l-5.69 6.62-4.55-6.62h-5.25l6.88 10.01-6.88 7.99h1.55l6.01-6.99 4.8 6.99h5.24l-7.13-10.38zm-2.13 2.47-.7-1-5.54-7.92h2.39l4.47 6.4.7 1 5.82 8.32h-2.39l-4.75-6.79z'></path>
											</svg>
										)}
										<a
											className='text-lg'
											target='_blank'
											href={item}
											rel='noreferrer'
										>
											{item}
										</a>
									</div>
								</p>
							))}
						</div>
						{linkMessage ? (
							<p className='text-red-500 mt-2'>{linkMessage}</p>
						) : (
							<button
								type='button'
								className='mt-auto ml-auto bg-blue-500 text-white border-none py-2 px-4 rounded-md text-lg cursor-pointer transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-600'
								onClick={handleModalLinkClick}
							>
								{modalLinkText}
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
