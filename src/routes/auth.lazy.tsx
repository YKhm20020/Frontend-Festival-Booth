import { createLazyFileRoute } from '@tanstack/react-router';
import { AuthPage } from '../pages/AuthPage';

export const Route = createLazyFileRoute('/auth')({
  component: () => <AuthPage />,
});