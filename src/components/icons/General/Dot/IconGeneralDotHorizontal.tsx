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
                d="M8.33325 12C8.33325 12.8284 7.66168 13.5 6.83325 13.5C6.00482 13.5 5.33325 12.8284 5.33325 12C5.33325 11.1716 6.00482 10.5 6.83325 10.5C7.66168 10.5 8.33325 11.1716 8.33325 12Z"
            />
            <path
                d="M13.8333 12C13.8333 12.8284 13.1617 13.5 12.3333 13.5C11.5048 13.5 10.8333 12.8284 10.8333 12C10.8333 11.1716 11.5048 10.5 12.3333 10.5C13.1617 10.5 13.8333 11.1716 13.8333 12Z"
            />
            <path
                d="M19.3333 12C19.3333 12.8284 18.6617 13.5 17.8333 13.5C17.0048 13.5 16.3333 12.8284 16.3333 12C16.3333 11.1716 17.0048 10.5 17.8333 10.5C18.6617 10.5 19.3333 11.1716 19.3333 12Z"
            />
        </svg>
    )
}

export const IconGeneralDotHorizontal = createIconInner(SVG);