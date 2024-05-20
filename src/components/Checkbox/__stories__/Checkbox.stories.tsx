import React, {useState} from 'react';

import type {Meta, StoryObj} from "@storybook/react";
import {Checkbox as CheckboxComponent, checkboxAligns, CheckboxProps} from '../Checkbox';
import {fn} from "@storybook/test";

const meta = {
    title: 'Components/Checkbox',
    component: CheckboxComponent,
    parameters: {
        layout: 'centered'
    },
} satisfies Meta<typeof CheckboxComponent>;

export default meta;
type Story = StoryObj<typeof CheckboxComponent>;

export const Example: Story = {
    decorators: (Story,) => {
        return (
            <div
                style={{
                    maxWidth: '500px',
                    minWidth: '300px',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                <Story />
            </div>
        );
    },
    render: (props: CheckboxProps, context) => {
        const {checked: checkedFromArgs} = context.args;
        const {intermediate: intermediateFromArgs} = context.args;

        const [checkedValue, setChecked] = useState<CheckboxProps['checked']>(false);

        return (
            <CheckboxComponent
                {...props}
                checked={checkedFromArgs || checkedValue}
                intermediate={intermediateFromArgs}
                onChange={() => setChecked(!checkedValue)}
            />
        );
    },
    args: {
        label: 'Отметьте меня',
        hint: 'Описание',
        align: 'top',
        checked: false,
        intermediate: false,
        disabled: false,
        onChange: fn(),
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'Текст лейбла',
            table: {
                category: 'Основные параметры',
                type: {summary: 'string'}
            },
        },
        hint: {
            control: 'text',
            description: 'Текст описания',
            table: {
                category: 'Основные параметры',
                type: {summary: 'string'}
            },
        },
        align: {
            control: 'select',
            description: 'Выравнивание чекбокса по высоте',
            options: checkboxAligns as unknown as Array<string>,
            table: {
                category: 'Основные параметры',
                type: {summary: checkboxAligns.join(' | ')},
                defaultValue: {summary: 'top'}
            },
        },
        checked: {
            control: 'boolean',
            description: 'Состояние checked',
            table: {
                category: 'Основные параметры',
                defaultValue: {summary: 'false'},
            },
        },
        intermediate: {
            control: 'boolean',
            description: 'Состояние intermediate',
            //if: { arg: 'checked', truthy: false },
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
        onChange: {
            description: 'Обработчик события изменения состояния',
            table: {
                category: 'Основные параметры',
                type: {
                    summary: 'React.ChangeEventHandler<HTMLInputElement>'
                }
            },
        },
    }
}