import type React from 'react';
import { useState, useMemo } from 'react';
import { useLocation } from '@tanstack/react-router';
import { useGetProfile } from '../../hooks/useGetProfile';
import { Header } from '../../components/Header/Header';
import { Card } from '../../components/Cards/Card';

export const IntroductionListPage: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	// 1ページあたりに配置するカードの数
	const cardsPerPage = 8;

	const { data: introduction = [], loading, error } = useGetProfile({});

	const allCards = useMemo(() => {
		return Array.isArray(introduction) ? introduction : [];
	}, [introduction]);

	// タブの合計、小数点以下切り上げ
	const numOfSlides = Math.ceil(allCards.length / cardsPerPage);

	// 現在のページのカードを取得
	const currentPageCards = allCards.slice(
		currentIndex * cardsPerPage,
		(currentIndex + 1) * cardsPerPage,
	);

	// 現在開いているページのパスを取得
	const location = useLocation();
	let changeModalText = '';
	if (location.pathname.includes('introduction-list')) {
		changeModalText = 'Go to Introductions';
	} else if (location.pathname.includes('products-list')) {
		changeModalText = 'View Products';
	}

	// カードのモックデータ
	// const allCards = useMemo(() => {
	// 	return Array(numOfSlides * cardsPerPage)
	// 		.fill(null)
	// 		.map((_, index) => ({
	// 			src: '/images/robot_and_hogeta.jpeg',
	// 			alt: 'Sample Alt',
	// 			title: `Card ${index + 1}`,
	// 			links: ['link1', 'link2', 'link3'],
	// 			modalTitle: `Sample Title ${index + 1}`,
	// 			modalText: `Sample Text for card ${index + 1}`,
	// 		}));
	// }, []);

	const prevSlide = (): void => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + numOfSlides) % numOfSlides);
	};

	const nextSlide = (): void => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % numOfSlides);
	};

	return (
		<>
			<Header />
			<div className='w-full max-w-screen-lg mx-auto p-4 my-8'>
				<div className='relative'>
					{/* カードのグリッド */}
					<div className='grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 lg:gap-x-6 gap-y-8 place-items-center justify-center items-center'>
						{/* ローディング中またはエラーがある場合の処理 */}
						{loading && <p>Loading...</p>}
						{error && <p>Error: {error}</p>}
						{/* カードコンポーネント（1ページにつき8個） */}
						{currentPageCards.map((card, index) => (
							<Card
								key={currentIndex * cardsPerPage + index}
								userName={card.name}
								src='/images/robot_and_hogeta.jpeg' // TODO: src を icon_num に対応した画像のパスに変更する
								alt='Sample Alt' // TODO: alt は icon_num に対応する画像データに合わせて変更
								title={card.name}
								links={{
									github_url: card.github_url,
									x_url: card.x_url,
								}}
								modalTitle={card.name}
								modalText={card.introduction || 'Sample Text'}
								modalLink={changeModalText}
							/>
						))}
					</div>

					{/* 左右のボタン */}
					<div className='absolute left-0 lg:-left-12 top-1/2 -translate-y-1/2'>
						<button
							id='slider-button-left'
							className='group p-2 flex justify-center items-center border border-solid border-indigo-600 w-20 h-20 md:w-16 md:h-16 transition-all duration-500 rounded-full
                            hover:bg-indigo-600 bg-white bg-opacity-50'
							onClick={prevSlide}
						>
							<svg
								className='h-10 w-10 md:h-6 md:w-6 text-indigo-600 group-hover:text-white'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 16 16'
								fill='none'
							>
								<path
									d='M10.0002 11.9999L6 7.99971L10.0025 3.99719'
									stroke='currentColor'
									strokeWidth='1.6'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</button>
					</div>
					<div className='absolute right-0 lg:-right-12 top-1/2 -translate-y-1/2'>
						<button
							id='slider-button-right'
							className='group p-2 flex justify-center items-center border border-solid border-indigo-600 w-20 h-20 md:w-16 md:h-16 transition-all duration-500 rounded-full
                            hover:bg-indigo-600 bg-white bg-opacity-50'
							onClick={nextSlide}
						>
							<svg
								className='h-10 w-10 md:h-6 md:w-6 text-indigo-600 group-hover:text-white'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 16 16'
								fill='none'
							>
								<path
									d='M5.99984 4.00012L10 8.00029L5.99748 12.0028'
									stroke='currentColor'
									strokeWidth='1.6'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
			<div className='absolute mt-auto left-0 right-0 z-10 mx-2 mb-4 flex list-none justify-center p-0'>
				<div className='absolute mt-auto left-0 right-0 z-10 mx-2 mb-4 flex list-none justify-center p-0'>
					{[...Array(numOfSlides)].map((_, index) => (
						<button
							key={index}
							type='button'
							onClick={() => setCurrentIndex(index)}
							className={`mx-1 box-content h-1 w-16 flex-initial cursor-pointer border-0 border-y-8 border-solid border-transparent bg-clip-padding p-0 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none
                            ${currentIndex === index ? 'bg-indigo-600 opacity-100' : 'bg-black opacity-50'}
                            `}
							aria-current={currentIndex === index ? 'true' : 'false'}
							aria-label={`Tab ${index}`}
						/>
					))}
				</div>
			</div>
		</>
	);
};
