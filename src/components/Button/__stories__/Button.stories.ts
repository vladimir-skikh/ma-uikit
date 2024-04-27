import type { Meta, StoryObj } from "@storybook/react";
import { Button as ButtonComponent } from '../Button';

const meta = {
    title: 'Components/Button',
    component: ButtonComponent,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
} satisfies Meta<typeof ButtonComponent>;

export default meta;
type Story = StoryObj<typeof ButtonComponent>;

// This is the only named export in the file, and it matches the component name
export const Button: Story = {
    args: {
        disabled: false,
        loading: false,
        size: 'm',
        view: 'neutral',
        label: 'Кнопка',
        title: 'Кнопка',
    }
};
