import React, {useRef} from "react";
import {cn, forwardRefWithAs} from "##/utils";

import './Button.css';
import {Loader, LoaderSize, LoaderVariant} from "##/components/Loader";
import {IconComponent, IconSize} from "##/components/icons/Icon/helpers";
import {useForkRef} from "##/hooks";

export const buttonSizes = ['xs', 's', 'm', 'l', 'xl'] as const;
export const buttonViews = ['primary', 'accent', 'neutral'] as const;
export const buttonForms = ['brick', 'round'] as const;
export const buttonWidths = ['default', 'full'] as const;

type ButtonSize = typeof buttonSizes[number];
type ButtonView = typeof buttonViews[number];
type ButtonForm = typeof buttonForms[number];
type ButtonWidth = typeof buttonWidths[number];

export type ButtonProps = {
    label: string | number,
    size?: ButtonSize,
    view?: ButtonView,
    form?: ButtonForm,
    type?: 'button' | 'reset' | 'submit',
    disabled?: boolean,
    loading?: boolean,
    title?: string,
    children?: never,
    className?: string,
    outline?: boolean,
    width?: ButtonWidth,
    onClick?: React.EventHandler<React.MouseEvent<HTMLButtonElement>>,
    iconLeft?: IconComponent,
    iconRight?: IconComponent,
    onlyIcon?: boolean,
}

export const COMPONENT_NAME = 'MaKitButton' as const;
const cnButton = cn(COMPONENT_NAME);

const loaderVariantMap: Record<ButtonView, Record<LoaderVariant, LoaderVariant>> = {
    primary: {
        primary: 'secondary',
        secondary: 'primary',
    },
    accent: {
        primary: 'secondary',
        secondary: 'primary',
    },
    neutral: {
        primary: 'primary',
        secondary: 'primary',
    },
}

const loaderSizeMap: Record<ButtonSize, LoaderSize> = {
    xs: 'xs',
    s: 's',
    m: 's',
    l: 'm',
    xl: 'l',
}

const iconSizeMap: Record<ButtonSize, IconSize> = {
    xs: 'xs',
    s: 's',
    m: 'm',
    l: 'm',
    xl: 'l',
}

export const Button = forwardRefWithAs<ButtonProps, 'button'>((props, ref) => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const {
        as = 'button',
        size = 'm',
        label,
        onClick,
        type = "button",
        disabled,
        loading,
        title,
        className,
        view = 'neutral',
        form = 'brick',
        outline,
        width = 'default',
        iconLeft,
        iconRight,
        onlyIcon,
        tabIndex,
        ...otherProps
    } = props;

    const Tag = as as string;
    const IconOnly = (!label || onlyIcon) && (iconLeft || iconRight);
    const IconLeft = iconLeft;
    const IconRight = iconRight;

    return (
        <Tag
            {...otherProps}
            ref={useForkRef([ref, buttonRef])}
            onClick={onClick}
            type={type}
            disabled={disabled}
            title={title}
            tabIndex={tabIndex}
            className={cnButton(
                {
                    size,
                    view,
                    form,
                    disabled,
                    loading,
                    outline,
                    width,
                    onlyIcon: !!IconOnly,
                },
                [className],
            )}
        >
            {IconOnly && (
                <IconOnly
                    className={cnButton('Icon')}
                    size={iconSizeMap[size]}
                />
            )}
            {!IconOnly && (
                (IconLeft || IconRight) && label ? (
                    <>
                        {IconLeft && (
                            <IconLeft
                                className={cnButton('Icon')}
                                size={iconSizeMap[size]}
                            />
                        )}
                        <span className={cnButton('Label')}>{label}</span>
                        {IconRight && (
                            <IconRight
                                className={cnButton('Icon')}
                                size={iconSizeMap[size]}
                            />
                        )}
                    </>
                ) : (
                    label
                )
            )}
            {loading && (
                <Loader
                    size={loaderSizeMap[size]}
                    view={view}
                    variant={!outline ? loaderVariantMap[view]['primary'] : loaderVariantMap[view]['secondary']}
                    className={cnButton('Loader')}
                />
            )}
        </Tag>
    );
});