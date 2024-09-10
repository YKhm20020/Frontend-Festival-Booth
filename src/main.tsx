import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}
const domElementId = 'root'; // Assuming you have a root element with the id 'root'

// Render the app
const rootElement = document.getElementById(domElementId);
if (!rootElement) {
	throw new Error(`Element with id ${domElementId} not found`);
}

ReactDOM.createRoot(rootElement).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);

// Render the app
// const rootElement = document.getElementById('root')!;
// if (!rootElement.innerHTML) {
// 	const root = ReactDOM.createRoot(rootElement);
// 	root.render(
// 		<StrictMode>
// 			<RouterProvider router={router} />
// 		</StrictMode>,
// 	);
// }
