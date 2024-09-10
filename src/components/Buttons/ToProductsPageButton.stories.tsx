import type { Meta, StoryObj } from "@storybook/react";
import { ToProductsPageButton } from "./ToProductsPageButton";
import { Component } from "react";

const meta = {
    title: 'FestivalBooth/Buttons',
    component: ToProductsPageButton,
} satisfies Meta<typeof ToProductsPageButton>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};