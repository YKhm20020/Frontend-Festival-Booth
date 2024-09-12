import type { Meta, StoryObj } from "@storybook/react";
import { ConfirmIntroductionPage } from "./ConfirmIntroductionPage";

const meta = {
    title: 'FestivalBooth/Pages/FormPages/ConfirmIntroductionPage',
    component: ConfirmIntroductionPage,
} satisfies Meta<typeof ConfirmIntroductionPage>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};