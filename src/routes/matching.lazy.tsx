import { createLazyFileRoute } from '@tanstack/react-router';
import { WritenMatchingPage } from '../pages/FormPages/WritenMatchingPage';

export const Route = createLazyFileRoute('/matching')({
	component: () => <WritenMatchingPage />,
});
