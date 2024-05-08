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
                d="M5.99995 11.2002L18 11.2002C18.4418 11.2002 18.8 11.5584 18.8 12.0002C18.8 12.442 18.4418 12.8002 18 12.8002L5.99995 12.8002C5.55812 12.8002 5.19995 12.442 5.19995 12.0002C5.19995 11.5584 5.55812 11.2002 5.99995 11.2002Z"
            />
        </svg>
    )
}

export const IconGeneralMinus01 = createIconInner(SVG);