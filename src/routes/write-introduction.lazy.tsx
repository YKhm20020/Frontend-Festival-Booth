import { createLazyFileRoute } from '@tanstack/react-router';
import { WriteIntroductionPage } from '../pages/WriteIntroductionPage';

export const Route = createLazyFileRoute('/write-introduction')({
  component: () => <WriteIntroductionPage />,
});