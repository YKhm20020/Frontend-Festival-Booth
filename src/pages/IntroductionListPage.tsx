import type React from 'react';
import { Card } from '../components/Cards/Card';
import { Header } from '../components/Header/Header';

export const IntroductionListPage: React.FC = () => {
	return (
		<>
			<Header />
			<div className='w-full max-w-screen-lg mx-auto p-4 my-8'>
				<div className='relative'>
					{/* カードのグリッド */}
					<div className='grid grid-cols-4 grid-rows-2 gap-x-6 gap-y-8 place-items-center justify-center items-center'>
						{/* カードコンポーネント（8個） */}
						{[...Array(8)].map((_, index) => (
							<Card
								key={index}
								src='/images/robot_and_hogeta.jpeg'
								alt='sample-alt'
								title='Sample title'
								links={['link1', 'link2', 'link3']}
								modalTitle='Sample Title'
								modalText='Sample Text'
							/>
						))}
					</div>

					{/* 左右のボタン */}
					<div className='absolute left-0 lg:-left-12 top-1/2 -translate-y-1/2'>
						<button
							id='slider-button-left'
							className='group p-2 flex justify-center items-center border border-solid border-indigo-600 w-10 h-10 md:w-12 md:h-12 transition-all duration-500 rounded-full hover:bg-indigo-600 bg-white bg-opacity-50'
						>
							<svg
								className='h-4 w-4 md:h-5 md:w-5 text-indigo-600 group-hover:text-white'
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
							className='group p-2 flex justify-center items-center border border-solid border-indigo-600 w-10 h-10 md:w-12 md:h-12 transition-all duration-500 rounded-full hover:bg-indigo-600 bg-white bg-opacity-50'
						>
							<svg
								className='h-4 w-4 md:h-5 md:w-5 text-indigo-600 group-hover:text-white'
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
		</>
	);
};
