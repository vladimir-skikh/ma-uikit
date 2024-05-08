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
                d="M15.3 12.0002C15.3 12.2124 15.2158 12.4159 15.0657 12.5659L10.0657 17.5659C9.75331 17.8783 9.24678 17.8783 8.93436 17.5659C8.62194 17.2535 8.62194 16.7469 8.93436 16.4345L13.3687 12.0002L8.93436 7.56588C8.62194 7.25346 8.62194 6.74693 8.93436 6.43451C9.24678 6.12209 9.75331 6.12209 10.0657 6.43451L15.0657 11.4345C15.2158 11.5845 15.3 11.788 15.3 12.0002Z"
            />
        </svg>
    )
}

export const IconArrowsChevronRight = createIconInner(SVG);