import { createLazyFileRoute } from '@tanstack/react-router';
import { IntroductionListPage } from '../pages/main_pages/IntroductionListPage';

export const Route = createLazyFileRoute('/introduction-list')({
	component: () => <IntroductionListPage />,
});
