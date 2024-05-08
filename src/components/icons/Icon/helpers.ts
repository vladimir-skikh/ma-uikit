import {AsTags, ComponentWithAs} from '##/utils/types';

import {cn} from '##/utils/bem';
import React, {JSX} from "react";

export const iconSizes = ['xs', 's', 'm', 'l'] as const;
export const iconViews = [
    'neutral',
    'primary',
    'accent',
    'brand',
    'success',
    'warning',
    'error',
    'disabled',
] as const;

export type IconSize = typeof iconSizes[number];
export type IconView = typeof iconViews[number];

export type IconProps = {
    view?: IconView;
    size?: IconSize;
};

export type IconComponent<AS extends AsTags = 'span'> = ComponentWithAs<
    IconProps,
    AS
>;

export const cnIcon = cn('MaKitIcon');

export type SvgProps = JSX.IntrinsicElements['svg'];

export type SvgComponent = React.FC<SvgProps>;