import { createLazyFileRoute } from '@tanstack/react-router';
import { WriteProductsPage } from '../pages/FormPages/WriteProductsPage';

export const Route = createLazyFileRoute('/write-products')({
  component: () => <WriteProductsPage />,
});