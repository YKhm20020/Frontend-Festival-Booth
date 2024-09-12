import type { Meta, StoryObj } from "@storybook/react";
import { ConfirmProductsPage } from "./ConfirmProductsPage";

const meta = {
    title: 'FestivalBooth/Pages/FormPages/ConfirmProductsPage',
    component: ConfirmProductsPage,
} satisfies Meta<typeof ConfirmProductsPage>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};