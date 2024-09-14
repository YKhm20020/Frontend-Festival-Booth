import type { Meta, StoryObj } from '@storybook/react';
import { AuthPage } from './AuthPage';

const meta = {
	title: 'FestivalBooth/Pages/AuthPage',
	component: AuthPage,
} satisfies Meta<typeof AuthPage>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
