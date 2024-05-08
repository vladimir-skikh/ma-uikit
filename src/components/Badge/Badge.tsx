import React, {useRef} from 'react';
import {cn, forwardRefWithAs} from "##/utils";

import './Badge.css';
import {useForkRef} from "##/hooks";

export const badgeSizes = ['xs', 's'] as const;
export const badgeViews = ['brand', 'neutral', 'success', 'warning', 'error'] as const;
export const badgeVariants = ['primary', 'secondary'] as const;
export const badgeForms = ['brick', 'round'] as const;

type BadgeSize = typeof badgeSizes[number];
type BadgeView = typeof badgeViews[number];
type BadgeVariant = typeof badgeVariants[number];
type BadgeForm = typeof badgeForms[number];

export type BadgeProps = {
    label?: string | number,
    size?: BadgeSize,
    view?: BadgeView,
    variant?: BadgeVariant,
    form?: BadgeForm,
    dot?: boolean,
    className?: string,
}

export const COMPONENT_NAME = 'MaKitBadge' as const;
const cnBadge = cn(COMPONENT_NAME);


export const Badge = forwardRefWithAs<BadgeProps, 'span'>((props, ref) => {
    const badgeRef = useRef<HTMLSpanElement | null>(null);

    const {
        as = 'span',
        size = 's',
        view = 'neutral',
        variant = 'primary',
        form = 'default',
        label,
        dot = false,
        className,
        ...otherProps
    } = props;

    const Tag = as as string;

    return (
        <Tag
            {...otherProps}
            ref={useForkRef([ref, badgeRef])}
            className={cnBadge(
                {
                    size,
                    view,
                    variant,
                    form,
                },
                [className]
            )}
        >
            {dot && <div className={cnBadge('Dot')} />}
            {label}
        </Tag>
    );
})