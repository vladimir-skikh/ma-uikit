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
                d="M8.00005 11.2998L16 11.2998C16.3866 11.2998 16.7 11.6132 16.7 11.9998C16.7 12.3864 16.3866 12.6998 16 12.6998L8.00005 12.6998C7.61345 12.6998 7.30005 12.3864 7.30005 11.9998C7.30005 11.6132 7.61345 11.2998 8.00005 11.2998Z"
            />
        </svg>
    )
}

export const IconGeneralMinus03 = createIconInner(SVG);