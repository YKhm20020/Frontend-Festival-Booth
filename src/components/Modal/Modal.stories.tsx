import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { withActions } from '@storybook/addon-actions/decorator';
import { Modal } from './Modal';

const meta = {
	title: 'FestivalBooth/Modal',
	component: Modal,
	decorators: [withActions],
	args: {
		closeModal: fn(),
	},
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
	args: {
		isModalOpen: true,
		src: '/images/robot_and_hogeta.jpeg',
		alt: 'Modal',
		modalTitle: 'Sample Title',
		modalText: 'Sample Text',
		closeModal: fn(),
	},
};

export const CloseModal: Story = {
	args: {
		isModalOpen: true,
		src: '/images/robot_and_hogeta.jpeg',
		alt: 'Modal',
		modalTitle: 'Sample Title',
		modalText: 'Sample Text',
		closeModal: fn(),
	},
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		const closeButton = canvas.getByRole('button');
		await expect(closeButton).toBeInTheDocument();
		await userEvent.click(closeButton);
		await expect(closeButton).toBeInTheDocument();
	},
};
