import { createLazyFileRoute } from '@tanstack/react-router'
import { QuestionMatchingPage } from '../pages/Matching/ProductsListPage';

export const Route = createLazyFileRoute('/question-matching')({
  component: () =>  <QuestionMatchingPage />,
})
