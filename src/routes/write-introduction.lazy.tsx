import { createLazyFileRoute } from '@tanstack/react-router';
import { WriteIntroductionPage } from '../pages/FormPages/WriteIntroductionPage';

export const Route = createLazyFileRoute('/write-introduction')({
  component: () => <WriteIntroductionPage />,
});