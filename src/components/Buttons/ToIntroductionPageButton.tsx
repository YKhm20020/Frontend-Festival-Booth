import { useNavigate } from '@tanstack/react-router';

export const ToIntroductionPageButton = () => {
	const navigate = useNavigate();

	return (
		<button
			href='#_'
			className='w-72 h-44 text-3xl relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-4 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300'
			onClick={() => navigate({to: '/introduction-list'})}
		>
			<span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease' />
			<span className='relative'>自己紹介を見る</span>
		</button>
	);
};