import type { Preview } from '@storybook/react';
import { RouterProvider, createMemoryHistory, createRootRoute, createRouter } from '@tanstack/react-router';
import '../styles/globals.css';

const preview: Preview = {
  decorators: [
    (Story) => {
      return <RouterProvider router={createRouter({
        history: createMemoryHistory(),
        routeTree: createRootRoute({
          component: Story
        })
      })} />
    }
  ]
};

export default preview
