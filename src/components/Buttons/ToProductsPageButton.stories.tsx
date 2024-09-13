import type { Meta, StoryObj } from '@storybook/react';
import { ToProductsPageButton } from './ToProductsPageButton';

const meta = {
	title: 'FestivalBooth/Buttons/ToProductsPageButton',
	component: ToProductsPageButton,
} satisfies Meta<typeof ToProductsPageButton>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		children: '自信アリなこれこれを見る',
	},
};
