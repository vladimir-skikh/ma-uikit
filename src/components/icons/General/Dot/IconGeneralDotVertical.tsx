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
                d="M12 8.3335C11.1716 8.3335 10.5 7.66192 10.5 6.8335C10.5 6.00507 11.1716 5.3335 12 5.3335C12.8284 5.3335 13.5 6.00507 13.5 6.8335C13.5 7.66192 12.8284 8.3335 12 8.3335Z"
            />
            <path
                d="M12 13.8335C11.1716 13.8335 10.5 13.1619 10.5 12.3335C10.5 11.5051 11.1716 10.8335 12 10.8335C12.8284 10.8335 13.5 11.5051 13.5 12.3335C13.5 13.1619 12.8284 13.8335 12 13.8335Z"
            />
            <path
                d="M12 19.3335C11.1716 19.3335 10.5 18.6619 10.5 17.8335C10.5 17.0051 11.1716 16.3335 12 16.3335C12.8284 16.3335 13.5 17.0051 13.5 17.8335C13.5 18.6619 12.8284 19.3335 12 19.3335Z"
            />
        </svg>
    )
}

export const IconGeneralDotVertical = createIconInner(SVG);