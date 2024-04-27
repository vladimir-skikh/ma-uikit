import React from 'react';
import { cn } from '##/utils';
import { PropsWithHTMLAttributes } from "##/utils";

import './Theme.css';

type Props = {};

type ThemeProps = PropsWithHTMLAttributes<Props, HTMLDivElement>;

const cnTheme = cn('MaKitTheme');

export const Theme = React.forwardRef<HTMLDivElement, ThemeProps>(
    (props, ref) => {
        const { className, children, ...otherProps } = props;

        return (
            <div {...otherProps} ref={ref} className={cnTheme(null, [className])}>
                {children}
            </div>
        );
    },
);