import '../styles/globals.css';
import { Header } from './components/Header/Header';
import { ToIntroductionPageButton } from './components/Buttons/ToIntroductionPageButton';
import { ToProductsPageButton } from './components/Buttons/ToProductsPageButton';
import { ToPostIntroductionPageButton } from './components/Buttons/ToPostIntroductionPageButton';
import { ToPostProductsPageButton } from './components/Buttons/ToPostProductsPageButton';

function App() {
	return (
		<div>
			<Header />
			<div className='bg-slate-100'>
				<h1 className='text-3xl font-bold underline'>Hello world!</h1>
				<div className='my-4' />
				<div className='items-center justify-center grid grid-rows-1 grid-flow-col gap-8'>
					<ToIntroductionPageButton>自己紹介を見る</ToIntroductionPageButton>
					<ToProductsPageButton />
				</div>
				<hr className='flex-1 border-4 border-gray-500 my-8'></hr>
				<div className='items-center justify-center grid grid-rows-1 grid-flow-col gap-8'>
					<ToPostIntroductionPageButton>自己紹介する</ToPostIntroductionPageButton>
					<ToPostProductsPageButton>見せびらかす</ToPostProductsPageButton>
				</div>
			</div>
		</div>
	);
}

export default App;
