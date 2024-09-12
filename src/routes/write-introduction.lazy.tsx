import { createLazyFileRoute } from '@tanstack/react-router';
import { WriteIntroductionPage } from '../pages/form_pages/WriteIntroductionPage';

export const Route = createLazyFileRoute('/write-introduction')({
  component: () => <WriteIntroductionPage />,
});