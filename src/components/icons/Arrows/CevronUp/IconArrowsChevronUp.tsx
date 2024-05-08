import React from "react";
import {createIconInner} from '##/components/icons/Icon/createIconInner';

const SVG: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.40999 14.8306C6.7084 15.1565 7.21445 15.1787 7.54027 14.8803L12.0007 10.7952L16.4595 14.8802C16.7853 15.1787 17.2914 15.1565 17.5898 14.8307C17.8883 14.505 17.8661 13.9989 17.5404 13.7005L12.5412 9.12045C12.2354 8.84032 11.7663 8.84028 11.4605 9.12036L6.45964 13.7004C6.13381 13.9988 6.11158 14.5048 6.40999 14.8306Z"
            />
        </svg>
    )
}

export const IconArrowsChevronUp = createIconInner(SVG);