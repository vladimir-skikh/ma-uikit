import type { Meta, StoryObj } from "@storybook/react";
import {Badge as BadgeComponent, badgeForms, BadgeProps, badgeSizes, badgeVariants, badgeViews} from '../Badge';
import {ComponentWithAs} from "../../../utils";

const meta = {
    title: 'Components/Badge',
    component: BadgeComponent,
    parameters: {
        layout: 'centered'
    },
} satisfies Meta<ComponentWithAs<BadgeProps>>;

export default meta;
type Story = StoryObj<ComponentWithAs<BadgeProps>>;

export const Example: Story = {
    args: {
        label: 'Статус',
        size: 's',
        view: 'neutral',
        variant: 'primary',
        form: 'brick',
        dot: false,
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'Текст лейбла',
            table: {
                category: 'Основные параметры',
                type: {summary: 'string | number'}
            },
        },
        size: {
            control: 'select',
            description: 'Размер',
            options: badgeSizes as unknown as Array<string>,
            table: {
                category: 'Основные параметры',
                defaultValue: {summary: 's'},
                type: {summary: badgeSizes.join(' | ')}
            },
        },
        view: {
            control: 'select',
            description: 'Цвет',
            options: badgeViews as unknown as Array<string>,
            table: {
                category: 'Основные параметры',
                defaultValue: {summary: 'neutral'},
                type: {summary: badgeViews.join(' | ')}
            },
        },
        variant: {
            control: 'select',
            description: 'Вариант',
            options: badgeVariants as unknown as Array<string>,
            table: {
                category: 'Основные параметры',
                defaultValue: {summary: 'primary'},
                type: {summary: badgeVariants.join(' | ')}
            },
        },
        form: {
            control: 'select',
            description: 'Форма',
            options: badgeForms as unknown as Array<string>,
            table: {
                category: 'Основные параметры',
                defaultValue: {summary: 'brick'},
                type: {summary: badgeForms.join(' | ')}
            },
        },
        dot: {
            control: 'boolean',
            description: 'Точка в бейдже',
            table: {
                category: 'Основные параметры',
            },
        },
    }
};