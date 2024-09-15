import type React from 'react';
import { useState, useMemo } from 'react';
import { useLocation } from '@tanstack/react-router';
import { useGetProfile } from '../../hooks/useGetProfile';
import { useGetProducts } from '../../hooks/useGetProducts';
import { Header } from '../../components/Header/Header';
import { Card } from '../../components/Cards/Card';

export const IntroductionListPage: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	const dicImage: { [imageNum: string]: string } = {
		'0': '/images/robot_and_hogeta.jpeg',
		'1': '/images/horse.jpg',
		'2': 'images/otter.png',
		'3': 'images/scale.jpg',
	};

	// 1ページあたりに表示するカードの数
	const cardsPerPage = 8;

	// クエリパラメータから answer を取得
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const answerFromParams = searchParams.get('answer');

	// useGetProfile と useGetProducts からデータを取得
	const { data: introduction = [], loading, error } = useGetProfile({});
	const { data: products } = useGetProducts({});

	// すべてのカード
	const allCards = useMemo(() => {
		return Array.isArray(introduction) ? introduction : [];
	}, [introduction]);

	// 現在のページに表示するカード
	const currentPageCards = useMemo(() => {
		const cards = allCards.slice(
			currentIndex * cardsPerPage,
			(currentIndex + 1) * cardsPerPage,
		);

		// answer パラメータが存在する場合にその値でフィルタリング
		if (answerFromParams) {
			return cards.filter((card) => card.answer === Number.parseInt(answerFromParams));
		}
		// パラメータがない場合はすべてのカードを表示
		return cards;
	}, [allCards, currentIndex, answerFromParams]);

	// 総スライド数を計算
	const numOfSlides = Math.ceil(allCards.length / cardsPerPage);

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
					<div className='grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 lg:gap-x-6 gap-y-8 place-items-center justify-center items-center'>
						{loading && <p>Loading...</p>}
						{error && <p>Error: {error}</p>}
						{currentPageCards.map((card, index) => {
							const isMatched =
								products &&
								index < products.length &&
								card.name === products[index].user_name;

							const imageSrc =
								dicImage[card.icon_num] || '/images/robot_and_hogeta.jpeg';

							return (
								<Card
									key={currentIndex * cardsPerPage + index}
									userName={card.name}
									src={imageSrc}
									alt='Sample Alt'
									title={card.name}
									links={{
										github_url: card.github_url,
										x_url: card.x_url,
									}}
									modalTitle={card.name}
									modalText={card.introduction || 'Sample Text'}
									theOtherModalTitle={isMatched ? products[index].title : ''}
									theOtherModalText={isMatched ? products[index].description : ''}
									theOtherModalLinks={
										isMatched
											? {
													url: products[index].url,
												}
											: {}
									}
								/>
							);
						})}
					</div>

					<div className='absolute left-0 lg:-left-12 top-1/2 -translate-y-1/2'>
						<button
							className='group p-2 flex justify-center items-center border border-solid border-indigo-600 w-20 h-20 md:w-16 md:h-16 transition-all duration-500 rounded-full hover:bg-indigo-600 bg-white bg-opacity-50'
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
							className='group p-2 flex justify-center items-center border border-solid border-indigo-600 w-20 h-20 md:w-16 md:h-16 transition-all duration-500 rounded-full hover:bg-indigo-600 bg-white bg-opacity-50'
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
		</>
	);
};
