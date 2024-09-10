import type { Meta, StoryObj } from "@storybook/react";
import { ToPostsIntroductionPageButton } from "./ToPostsIntroductionPageButton";

const meta = {
    title: 'FestivalBooth/Buttons/ToPostsIntroductionPageButton',
    component: ToPostsIntroductionPageButton,
} satisfies Meta<typeof ToPostsIntroductionPageButton>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};