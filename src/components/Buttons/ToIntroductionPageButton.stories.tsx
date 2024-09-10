import type { Meta, StoryObj } from "@storybook/react";
import { ToIntroductionPageButton } from "./ToIntroductionPageButton";

const meta = {
    title: 'FestivalBooth/Buttons/ToIntroductionPageButton',
    component: ToIntroductionPageButton,
} satisfies Meta<typeof ToIntroductionPageButton>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};