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
                d="M5.22209 5.22208C5.65166 4.79251 6.34814 4.79251 6.77772 5.22208L11.9999 10.4443L17.2221 5.22209C17.6517 4.79251 18.3481 4.79251 18.7777 5.22209C19.2073 5.65166 19.2073 6.34815 18.7777 6.77772L13.5555 11.9999L18.7777 17.2221C19.2073 17.6517 19.2073 18.3481 18.7777 18.7777C18.3481 19.2073 17.6517 19.2073 17.2221 18.7777L11.9999 13.5555L6.77772 18.7777C6.34814 19.2073 5.65166 19.2073 5.22208 18.7777C4.79251 18.3481 4.79251 17.6517 5.22208 17.2221L10.4443 11.9999L5.22209 6.77772C4.79251 6.34814 4.79251 5.65166 5.22209 5.22208Z"
            />
        </svg>
    )
}

export const IconGeneralCross02 = createIconInner(SVG);