import React from "react";
import {createIconInner} from '##/components/icons/Icon/createIconInner';

const SVG: React.FC<React.SVGProps<SVGSVGElement>> = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.40999 9.16984C6.7084 8.84402 7.21445 8.82179 7.54027 9.1202L12.0007 13.2053L16.4595 9.12029C16.7853 8.82182 17.2914 8.84397 17.5898 9.16975C17.8883 9.49553 17.8661 10.0016 17.5404 10.3L12.5412 14.88C12.2354 15.1602 11.7663 15.1602 11.4605 14.8801L6.45964 10.3001C6.13381 10.0017 6.11158 9.49567 6.40999 9.16984Z"
            />
        </svg>
    )
}

export const IconArrowsChevronDown = createIconInner(SVG);