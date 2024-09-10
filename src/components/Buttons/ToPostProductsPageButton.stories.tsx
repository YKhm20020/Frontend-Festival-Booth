import type { Meta, StoryObj } from '@storybook/react';
import { ToPostProductsPageButton } from './ToPostProductsPageButton';

const meta = {
	title: 'FestivalBooth/Buttons/ToPostProductsPageButton',
	component: ToPostProductsPageButton,
} satisfies Meta<typeof ToPostProductsPageButton>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
