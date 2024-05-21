import React from 'react';
import {cn} from "##/utils";

import './Loader.css';

export type LoaderSize = 'xs' | 's' | 'm' | 'l';
export type LoaderView = 'primary' | 'accent' | 'neutral';
export type LoaderVariant = 'primary' | 'secondary';

export const COMPONENT_NAME = 'MaKitLoader';
const cnLoader = cn(COMPONENT_NAME);

type Props = {
    size?: LoaderSize,
    view?: LoaderView,
    variant?: LoaderVariant,
    className?: string,
}

export const Loader: React.FC<Props> = (props) => {
    const {
        size = 'l',
        view = 'primary',
        variant = 'primary',
        className
    } = props;

    return (
        <div
            className={cnLoader({
                size,
                view,
                variant,
            }, [className])}>
            <div className={cnLoader('Circle', {position: 'left'})}></div>
            <div className={cnLoader('Circle', {position: 'center'})}></div>
            <div className={cnLoader('Circle', {position: 'right'})}></div>
        </div>

    )
}