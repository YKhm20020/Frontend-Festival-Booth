import type { Meta, StoryObj } from '@storybook/react';
import { ToPostIntroductionPageButton } from './ToPostIntroductionPageButton';

const meta = {
	title: 'FestivalBooth/Buttons/ToPostIntroductionPageButton',
	component: ToPostIntroductionPageButton,
} satisfies Meta<typeof ToPostIntroductionPageButton>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		children: '自己紹介する',
	},
};
