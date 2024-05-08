import React from 'react';

import {
    forwardRefWithAs,
    PropsWithAsAttributes,
} from '##/utils/types';

import './Icon.css';

import {
    cnIcon,
    IconComponent,
    IconProps,
    SvgComponent,
} from './helpers';
import {Icon} from './Icon';

type innerIconProps = PropsWithAsAttributes<IconProps, 'span'>;

export const createIconInner = (
    svgComponent: SvgComponent,
): IconComponent<'span'> => {
    const Svg = svgComponent;
    return forwardRefWithAs<IconProps, 'span'>((props, ref) => {
        return (
            <Icon
                {...(props as innerIconProps)}
                ref={ref}
            >
                <Svg className={cnIcon('Svg')} />
            </Icon>
        );
    });
};