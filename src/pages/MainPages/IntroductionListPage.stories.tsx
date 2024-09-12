import type { Meta, StoryObj } from "@storybook/react";
import { IntroductionListPage } from "./IntroductionListPage";

const meta = {
    title: 'FestivalBooth/Pages/MainPages/IntroductionListPage',
    component: IntroductionListPage,
} satisfies Meta<typeof IntroductionListPage>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};