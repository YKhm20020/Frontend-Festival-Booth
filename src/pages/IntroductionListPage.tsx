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
					<div className='grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 lg:gap-x-6 gap-y-8 place-items-center justify-center items-center'>
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
							className='group p-2 flex justify-center items-center border border-solid border-indigo-600 w-20 h-20 md:w-16 md:h-16 transition-all duration-500 rounded-full hover:bg-indigo-600 bg-white bg-opacity-50'
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
							className='group p-2 flex justify-center items-center border border-solid border-indigo-600 w-20 h-20 md:w-16 md:h-16 transition-all duration-500 rounded-full hover:bg-indigo-600 bg-white bg-opacity-50'
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
				<button
					type='button'
					data-twe-slide-to='0'
					data-twe-carousel-active
					className='mx-1 box-content h-1 w-16 flex-initial cursor-pointer border-0 border-y-8 border-solid border-transparent bg-black bg-clip-padding p-0 opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none'
					aria-current='true'
					aria-label='Tab 0'
				></button>
				<button
					type='button'
					data-twe-slide-to='1'
					className='mx-1 box-content h-1 w-16 flex-initial cursor-pointer border-0 border-y-8 border-solid border-transparent bg-black bg-clip-padding p-0 opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none'
					aria-label='Tab 1'
				></button>
				<button
					type='button'
					data-twe-slide-to='2'
					className='mx-1 box-content h-1 w-16 flex-initial cursor-pointer border-0 border-y-8 border-solid border-transparent bg-black bg-clip-padding p-0 opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none'
					aria-label='Tab 2'
				></button>
				<button
					type='button'
					data-twe-slide-to='3'
					className='mx-1 box-content h-1 w-16 flex-initial cursor-pointer border-0 border-y-8 border-solid border-transparent bg-black bg-clip-padding p-0 opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none'
					aria-label='Tab 3'
				></button>
				<button
					type='button'
					data-twe-slide-to='4'
					className='mx-1 box-content h-1 w-16 flex-initial cursor-pointer border-0 border-y-8 border-solid border-transparent bg-black bg-clip-padding p-0 opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none'
					aria-label='Tab 4'
				></button>
			</div>
		</>
	);
};
