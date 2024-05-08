import React from 'react';

import type {Meta, StoryObj} from "@storybook/react";
import {IconArrowsLeft as IconComponent} from '../../';
import {IconProps, iconSizes, iconViews} from '../helpers';

const meta = {
    title: 'Components/Icons',
    component: IconComponent,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<IconProps>;

export default meta;
type Story = StoryObj<IconProps>;

export const Example: Story = {
    args: {
        size: 'm',
        view: 'neutral',
    },
    argTypes: {
        size: {
            control: 'select',
            description: 'Размер',
            options: iconSizes as unknown as Array<string>,
            table: {
                category: 'Основные параметры',
                defaultValue: {summary: 'm'},
                type: {summary: iconSizes.join(' | ')}
            },
        },
        view: {
            control: 'select',
            description: 'Цвет',
            options: iconViews as unknown as Array<string>,
            table: {
                category: 'Основные параметры',
                defaultValue: {summary: 'neutral'},
                type: {summary: iconViews.join(' | ')}
            },
        },
    },
};