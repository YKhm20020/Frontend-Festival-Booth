import { createLazyFileRoute } from '@tanstack/react-router';
import { IntroductionListPage } from '../pages/MainPages/IntroductionListPage';

export const Route = createLazyFileRoute('/introduction-list')({
	component: () => <IntroductionListPage />,
});
