import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { ToProductsPageButton } from './components/Buttons/ToProductsPageButton'
import { ToIntroductionPageButton } from './components/Buttons/ToIntroductionPageButton'
import { ToPostsIntroductionPageButton } from './components/Buttons/ToPostsIntroductionPageButton'
import { ToPostsProductsPageButton } from './components/Buttons/ToPostsProductsPageButton';

function App() {
	return (
		<div>
			<Header />
			<div className = "bg-slate-100">
				<h1 className='text-3xl font-bold underline'>Hello world!</h1>
				<div className = "my-4"></div>
				<div className = "flex items-center justify-center grid grid-rows-1 grid-flow-col gap-8">
					<ToIntroductionPageButton />
					<ToProductsPageButton />
				</div>
				<hr className="flex-1 border-4 border-gray-500 my-8"></hr>
				<div className = "flex items-center justify-center grid grid-rows-1 grid-flow-col gap-8">
					<ToPostsIntroductionPageButton />
					<ToPostsProductsPageButton />
				</div>
			</div>
		</div>
	);
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App;
