import React from "react";
import { cn } from "##/utils";

import './Button.css';

type ButtonSize = 'xs' | 's' | 'm' | 'l' | 'xl';
type ButtonView = 'primary' | 'accent' | 'neutral';
type ButtonForm = 'default' | 'round';

type ButtonProps = {
    size?: ButtonSize,
    view?: ButtonView,
    form?: ButtonForm,
    type?: 'button' | 'reset' | 'submit',
    disabled?: boolean,
    loading?: boolean,
    label: string | number,
    title?: string,
    children?: never,
    className?: string,
    outline?: boolean,
    width?: 'full' | 'default',
    onClick?: React.EventHandler<React.MouseEvent>,
}

export const COMPONENT_NAME = 'MaKitButton' as const;
const cnButton = cn(COMPONENT_NAME);

export const Button: React.FC<ButtonProps> = (props) => {
    const {
        size = 'm',
        label,
        onClick,
        type = "button",
        disabled,
        title,
        className,
        view = 'neutral',
        form  = 'default',
        outline,
        width = 'default'
    } = props;

    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            title={title}
            className={cnButton(
                {
                    size,
                    view,
                    form,
                    disabled,
                    outline,
                    width
                },
                [className],
            )}
        >
            {label}
        </button>
    )
}