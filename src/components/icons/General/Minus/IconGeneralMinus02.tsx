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
                d="M7.1999 11.2002L16.7999 11.2002C17.2417 11.2002 17.5999 11.5584 17.5999 12.0002C17.5999 12.442 17.2417 12.8002 16.7999 12.8002L7.1999 12.8002C6.75807 12.8002 6.3999 12.442 6.3999 12.0002C6.3999 11.5584 6.75807 11.2002 7.1999 11.2002Z"
            />
        </svg>
    )
}

export const IconGeneralMinus02 = createIconInner(SVG);