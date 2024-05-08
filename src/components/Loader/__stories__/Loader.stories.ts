import type { Meta, StoryObj } from "@storybook/react";
import { Loader as LoaderComponent } from '../Loader';

const meta = {
    title: 'Components/Loader',
    component: LoaderComponent,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
} satisfies Meta<typeof LoaderComponent>;

export default meta;
type Story = StoryObj<typeof LoaderComponent>;

export const Loader: Story = {
    args: {
        size: 'xl',
        view: 'primary',
        variant: 'primary',
    }
};