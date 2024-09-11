import type { Meta, StoryObj } from "@storybook/react";
import { WriteIntroductionPage } from "./WriteIntroductionPage";

const meta = {
    title: 'FestivalBooth/Pages/WriteIntroductionPage',
    component: WriteIntroductionPage,
} satisfies Meta<typeof WriteIntroductionPage>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};