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
                d="M11.4482 3.42088C11.7572 3.12663 12.2427 3.12663 12.5517 3.42088L19.5517 10.0876C19.8716 10.3923 19.884 10.8986 19.5793 11.2186C19.2746 11.5385 18.7682 11.5509 18.4482 11.2462L12.8 5.86686V20.0002C12.8 20.442 12.4418 20.8002 12 20.8002C11.5581 20.8002 11.2 20.442 11.2 20.0002V5.86686L5.55168 11.2462C5.23173 11.5509 4.72535 11.5385 4.42064 11.2186C4.11593 10.8986 4.12828 10.3923 4.44823 10.0876L11.4482 3.42088Z"
            />
        </svg>
    )
}

export const IconArrowsUp = createIconInner(SVG);