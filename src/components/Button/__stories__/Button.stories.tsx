import React from "react";

import type {Meta, StoryObj} from "@storybook/react";
import {Button as ButtonComponent, buttonForms, ButtonProps, buttonSizes, buttonViews, buttonWidths} from '../Button';
import {fn} from '@storybook/test';
import {IconArrowsChevronUp, IconArrowsChevronDown} from "../../icons";
import {ComponentWithAs} from "../../../utils";

const meta = {
    title: 'Components/Button',
    component: ButtonComponent,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<ComponentWithAs<ButtonProps>>;

export default meta;
type Story = StoryObj<ComponentWithAs<ButtonProps>>;

const iconStoryOptions = [
    undefined,
    'IconArrowsChevronDown',
    'IconArrowsChevronUp'
];

export const Example: Story = {
    decorators: (Story,) => {
        return (
            <div
                style={{
                    width: '300px',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                <Story />
            </div>
        );
    },
    args: {
        label: 'Кнопка',
        size: 'm',
        view: 'neutral',
        form: 'brick',
        outline: false,
        disabled: false,
        loading: false,
        title: 'Кнопка',
        iconLeft: undefined,
        iconRight: undefined,
        onlyIcon: false,
        width: 'default',
        onClick: fn(),
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
            options: buttonSizes as unknown as Array<string>,
            table: {
                category: 'Основные параметры',
                defaultValue: {summary: 'm'},
                type: {summary: buttonSizes.join(' | ')}
            },
        },
        view: {
            control: 'select',
            description: 'Цвет',
            options: buttonViews as unknown as Array<string>,
            table: {
                category: 'Основные параметры',
                defaultValue: {summary: 'neutral'},
                type: {summary: buttonViews.join(' | ')}
            },
        },
        form: {
            control: 'select',
            description: 'Форма',
            options: buttonForms as unknown as Array<string>,
            table: {
                category: 'Основные параметры',
                defaultValue: {summary: 'brick'},
                type: {summary: buttonForms.join(' | ')}
            },
        },
        outline: {
            control: 'boolean',
            description: 'Кнопка без фона',
            table: {
                category: 'Основные параметры',
                defaultValue: {summary: 'false'},
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Состояние disabled',
            table: {
                category: 'Основные параметры',
                defaultValue: {summary: 'false'},
            },
        },
        loading: {
            control: 'boolean',
            description: 'Состояние loading',
            table: {
                category: 'Основные параметры',
                defaultValue: {summary: 'false'},
            },
        },
        title: {
            control: 'text',
            description: 'Текст для атрибута title',
            table: {
                category: 'Основные параметры',
                type: {summary: 'string'}
            },
        },
        width: {
            control: 'select',
            description: 'Ширина',
            options: buttonWidths as unknown as Array<string>,
            table: {
                category: 'Основные параметры',
                defaultValue: {summary: 'default'},
                type: {summary: buttonWidths.join(' | ')}
            },
        },
        type: {
            control: false,
            description: 'Тип',
            table: {
                category: 'Основные параметры',
                defaultValue: {summary: 'button'},
                type: {summary: 'button | submit | reset'}
            },
        },
        onClick: {
            description: 'Обработчик события клика',
            table: {
                category: 'Основные параметры',
                type: {
                    summary: 'React.EventHandler<React.MouseEvent>'
                }
            },
        },
        as: {
            control: false,
            description: 'HTML-тег для кнопки',
            table: {
                defaultValue: {summary: 'button'},
                category: 'Основные параметры',
                type: {summary: 'React.ElementType'}
            },
        },
        // Настройки иконок
        iconLeft: {
            control: {
                type: 'select',
            },
            description: 'Иконка слева от текста',
            options: iconStoryOptions,
            mapping: {
                IconArrowsChevronUp,
                IconArrowsChevronDown
            },
            table: {
                category: 'Настройка иконок',
                type: {
                    summary: 'IconComponent'
                },
            },
        },
        iconRight: {
            control: {
                type: 'select',
            },
            description: 'Иконка справа от текста',
            options: iconStoryOptions,
            mapping: {
                IconArrowsChevronUp,
                IconArrowsChevronDown
            },
            table: {
                category: 'Настройка иконок',
                type: {
                    summary: 'IconComponent'
                },
            },
        },
        onlyIcon: {
            control: 'boolean',
            description: 'Отображать только иконку. Чтобы отображалась только иконка, необходимо задать параметр iconLeft или iconRight. Если заданы обапараметра, для единственной иконки испльзуется параметр iconLeft',
            table: {
                defaultValue: {summary: 'false'},
                category: 'Настройка иконок',
            },
        },
    },
};

