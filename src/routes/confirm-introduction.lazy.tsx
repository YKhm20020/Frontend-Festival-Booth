import { createLazyFileRoute } from '@tanstack/react-router';
import { ConfirmIntroductionPage } from '../pages/FormPages/ConfirmIntroductionPage';

export const Route = createLazyFileRoute('/confirm-introduction')({
  component: () => <ConfirmIntroductionPage />,
});