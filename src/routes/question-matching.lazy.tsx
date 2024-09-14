import { createLazyFileRoute } from '@tanstack/react-router'
import { QuestionMatchingPage } from '../pages/Matching/QuestionMatchingPage';

export const Route = createLazyFileRoute('/question-matching')({
  component: () =>  <QuestionMatchingPage />,
})
