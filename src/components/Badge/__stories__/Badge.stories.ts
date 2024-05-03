import type { Meta, StoryObj } from "@storybook/react";
import { Badge as BadgeComponent } from '../Badge';

const meta = {
    title: 'Components/Badge',
    component: BadgeComponent,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
} satisfies Meta<typeof BadgeComponent>;

export default meta;
type Story = StoryObj<typeof BadgeComponent>;

export const Badge: Story = {
    args: {
        size: 's',
        view: 'neutral',
        variant: 'primary',
        label: 'Статус',
        onlyDot: false,
        form: 'default',
        dot: true,
    }
};