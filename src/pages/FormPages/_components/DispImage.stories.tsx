import type { Meta, StoryObj } from '@storybook/react';
import { DispImage } from './DispImage';

const meta = {
	title: 'FestivalBooth/pages/FormPages/DispImage',
	component: DispImage,
} satisfies Meta<typeof DispImage>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		src: '/images/robot_and_hogeta.jpeg',
		alt: 'Sample alt',
	},
};
