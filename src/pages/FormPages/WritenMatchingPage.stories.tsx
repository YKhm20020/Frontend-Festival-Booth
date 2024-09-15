import type { Meta, StoryObj } from "@storybook/react";
import { WritenMatchingPage } from "./WritenMatchingPage";

const meta = {
    title: 'FestivalBooth/Pages/Form/WritenMatchingPage',
    component: WritenMatchingPage,
} satisfies Meta<typeof WritenMatchingPage>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};