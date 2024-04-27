import React from "react";
import { cn } from "##/utils";

import './Button.css';

type ButtonSize = 'xs' | 's' | 'm' | 'l' | 'xl';
type ButtonView = 'primary' | 'accent' | 'neutral';

type ButtonProps = {
    size: ButtonSize,
    type?: 'button' | 'reset' | 'submit',
    disabled?: boolean,
    loading?: boolean,
    label?: string | number,
    title?: string,
    onClick?: React.EventHandler<React.MouseEvent>,
    children?: never,
    className?: string,
    view?: ButtonView,
}

export const COMPONENT_NAME = 'MaKitButton' as const;
const cnButton = cn(COMPONENT_NAME);

export const Button: React.FC<ButtonProps> = (props) => {
    const {
        size = 'm',
        label,
        onClick,
        type,
        disabled,
        title,
        className,
        view = 'neutral'
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
                    view
                },
                [className],
            )}
        >
            {label}
        </button>
    )
}