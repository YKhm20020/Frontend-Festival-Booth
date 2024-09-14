import type { Meta, StoryObj } from "@storybook/react";
import { QuestionMatchingPage } from "./WritenMatchingPage";

const meta = {
    title: 'FestivalBooth/Pages/Matching/QuestionMatchingPage',
    component: QuestionMatchingPage,
} satisfies Meta<typeof QuestionMatchingPage>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};