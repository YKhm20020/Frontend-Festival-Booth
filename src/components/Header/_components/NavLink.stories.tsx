import type { Meta, StoryObj } from '@storybook/react';
import { NavLink } from './NavLink';

const meta = {
	title: 'FestivalBooth/Header/NavLink',
	component: NavLink,
} satisfies Meta<typeof NavLink>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		toLink: '/',
		toName: 'Sample toName',
	},
};
