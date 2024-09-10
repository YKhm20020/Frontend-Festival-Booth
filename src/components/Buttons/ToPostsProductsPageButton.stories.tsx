import type { Meta, StoryObj } from "@storybook/react";
import { ToPostsProductsPageButton } from "./ToPostsProductsPageButton";
import { Component } from "react";

const meta = {
    title: 'FestivalBooth/Buttons/ToPostsProductsPageButton',
    component: ToPostsProductsPageButton,
} satisfies Meta<typeof ToPostsProductsPageButton>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};