import React from 'react';
import {forwardRefWithAs} from '##/utils/types';

import './Icon.css';

import {cnIcon, IconComponent, IconProps} from './helpers';

export const Icon: IconComponent = forwardRefWithAs<
    IconProps,
    'span'
>((props, ref) => {
    const {
        size = 'm',
        className,
        view = 'neutral',
        as = 'span',
        children,
        ...otherProps
    } = props;

    const Tag = as as string;

    return (
        <Tag
            {...otherProps}
            className={cnIcon({size, view}, [className])}
            ref={ref}
        >
            {children}
        </Tag>
    );
});