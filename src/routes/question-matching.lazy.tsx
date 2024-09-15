import { createLazyFileRoute } from '@tanstack/react-router'
import { WritenMatchingPage } from '../pages/FormPages/WritenMatchingPage'

export const Route = createLazyFileRoute('/question-matching')({
  component: () => <WritenMatchingPage />,
})
