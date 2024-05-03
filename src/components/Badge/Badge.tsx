import React from 'react';
import {cn} from "##/utils";

import './Badge.css';

type BadgeSize = 'xs' | 's';
type BadgeView = 'brand' | 'neutral' | 'success' | 'warning' | 'error';
type BadgeVariant = 'primary' | 'secondary';
type BadgeForm = 'default' | 'round';

type BadgeProps = {
    label?: string | number,
    size?: BadgeSize,
    view?: BadgeView,
    variant?: BadgeVariant,
    form?: BadgeForm,
    dot?: boolean,
    onlyDot?: boolean,
    className?: string,
}

export const COMPONENT_NAME = 'MaKitBadge' as const;
const cnBadge = cn(COMPONENT_NAME);


export const Badge: React.FC<BadgeProps> = (props) => {
    const {
        size = 's',
        view = 'neutral',
        variant = 'primary',
        form = 'default',
        label,
        onlyDot,
        dot,
        className
    } = props;

    return (
        <div
            className={cnBadge(
                {
                    size,
                    view,
                    variant,
                    form,
                    onlyDot
                },
                [className]
            )}
        >
            {(onlyDot || dot) && <div className={cnBadge('Dot')} />}
            {!onlyDot && label}
        </div>
    );
}