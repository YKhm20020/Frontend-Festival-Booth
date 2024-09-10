import type { Meta, StoryObj } from "@storybook/react";
import { ProductsListPage } from "./ProductsListPage";

const meta = {
    title: 'FestivalBooth/Pages/ProductsListPage',
    component: ProductsListPage,
} satisfies Meta<typeof ProductsListPage>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};