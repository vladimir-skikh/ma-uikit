import React from 'react';
import {cn} from "##/utils";

import './Loader.css';

export type LoaderSize = 'xs' | 's' | 'm' | 'l' | 'xl';
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
        size = 'xl',
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
            <svg
                width="66"
                height="66"
                className={cnLoader('Svg')}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 66 66"
                fill="none">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M33 66C51.2254 66 66 51.2254 66 33C66 14.7746 51.2254 0 33 0C14.7746 0 0 14.7746 0 33C0 51.2254 14.7746 66 33 66ZM33 59.2C18.5301 59.2 6.8 47.4699 6.8 33C6.8 18.5301 18.5301 6.8 33 6.8C47.4699 6.8 59.2 18.5301 59.2 33C59.2 47.4699 47.4699 59.2 33 59.2Z"
                    fill="#3395F7"
                />
                <path
                    d="M0.0928556 35.4728C0.517809 41.1287 2.39505 46.5948 5.5616 51.3339C9.18769 56.7607 14.3416 60.9904 20.3715 63.4881C26.4015 65.9858 33.0367 66.6393 39.4381 65.366C45.8395 64.0927 51.7195 60.9498 56.3346 56.3346C60.9498 51.7195 64.0927 45.8395 65.366 39.4381C66.6393 33.0367 65.9858 26.4015 63.4881 20.3715C60.9904 14.3416 56.7607 9.18769 51.3339 5.56161C46.5948 2.39505 41.1287 0.517809 35.4728 0.0928557C33.521 -0.0537982 32.0001 1.54412 32.0001 3.4001C32.0001 5.29797 33.5284 6.7445 35.3089 6.90201C39.6762 7.28835 43.8901 8.76612 47.556 11.2156C51.8646 14.0945 55.2227 18.1864 57.2057 22.9738C59.1888 27.7612 59.7076 33.0292 58.6967 38.1115C57.6857 43.1938 55.1904 47.8622 51.5263 51.5263C47.8622 55.1904 43.1938 57.6857 38.1115 58.6967C33.0292 59.7076 27.7612 59.1888 22.9738 57.2057C18.1864 55.2227 14.0945 51.8646 11.2156 47.556C8.76611 43.8901 7.28835 39.6762 6.90201 35.3089C6.7445 33.5284 5.29797 32.0001 3.4001 32.0001C1.54412 32.0001 -0.0537979 33.5209 0.0928556 35.4728Z"
                    fill="#DDEEFE"
                />
            </svg>
        </div>

    )
}