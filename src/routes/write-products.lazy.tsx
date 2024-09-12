import { createLazyFileRoute } from '@tanstack/react-router';
import { WriteProductsPage } from '../pages/form_pages/WriteProductsPage';

export const Route = createLazyFileRoute('/write-products')({
  component: () => <WriteProductsPage />,
});