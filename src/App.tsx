import '../styles/globals.css';
import { Header } from './components/Header/Header';
import { ToProductsPageButton } from './components/Buttons/ToProductsPageButton';
import { ToIntroductionPageButton } from './components/Buttons/ToIntroductionPageButton';
import { ToPostIntroductionPageButton } from './components/Buttons/ToPostIntroductionPageButton';
import { ToPostProductsPageButton } from './components/Buttons/ToPostProductsPageButton';

function App() {
	return (
		<div>
			<Header />
			<div className='bg-slate-100'>
				<h1 className='text-3xl font-bold underline'>Hello world!</h1>
				<div className='my-4' />
				<div className='flex items-center justify-center grid-rows-1 grid-flow-col gap-8'>
					<ToIntroductionPageButton />
					<ToProductsPageButton />
				</div>
				<hr className='flex-1 border-4 border-gray-500 my-8' />
				<div className='flex items-center justify-center grid-rows-1 grid-flow-col gap-8'>
					<ToPostIntroductionPageButton />
					<ToPostProductsPageButton />
				</div>
			</div>
		</div>
	);
}

export default App;
