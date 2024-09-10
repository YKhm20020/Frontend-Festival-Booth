import { createLazyFileRoute } from '@tanstack/react-router';
import { ProductsListPage } from '../pages/ProductsListPage';

export const Route = createLazyFileRoute('/products-list')({
  component: () => <ProductsListPage />,
});