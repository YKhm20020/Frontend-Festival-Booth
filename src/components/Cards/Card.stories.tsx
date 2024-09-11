import type { Meta, StoryObj } from '@storybook/react';
import { withActions } from '@storybook/addon-actions/decorator';
import { Card } from './Card';

const meta = {
	title: 'FestivalBooth/Cards/Card',
	component: Card,
	parameters: {
		actions: {
			handles: ['mouseover'],
		},
	},
	decorators: [withActions],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
	args: {
		src: '/images/robot_and_hogeta.jpeg',
		alt: 'sample-alt',
		title: 'Sample title',
		links: ['link1', 'link2', 'link3'],
	},
};
