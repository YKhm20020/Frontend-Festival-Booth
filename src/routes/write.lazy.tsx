import { createLazyFileRoute } from '@tanstack/react-router';
import { Write } from '../pages/Write';

export const Route = createLazyFileRoute('/write')({
	component: () => <Write />,
});
