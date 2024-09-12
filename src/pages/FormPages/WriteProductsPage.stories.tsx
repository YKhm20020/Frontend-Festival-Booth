import type { Meta, StoryObj } from "@storybook/react";
import { WriteProductsPage } from "./WriteProductsPage";

const meta = {
    title: 'FestivalBooth/Pages/FormPages/WriteProductsPage',
    component: WriteProductsPage,
} satisfies Meta<typeof WriteProductsPage>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};