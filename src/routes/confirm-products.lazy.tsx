import { createLazyFileRoute } from '@tanstack/react-router';
import { ConfirmProductsPage } from '../pages/FormPages/ConfirmProductsPage';

export const Route = createLazyFileRoute('/confirm-products')({
  component: () => <ConfirmProductsPage />,
});