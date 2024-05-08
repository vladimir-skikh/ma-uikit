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
                d="M12 21.75C6.61523 21.75 2.25 17.3848 2.25 12C2.25 6.61523 6.61523 2.25 12 2.25C17.3848 2.25 21.75 6.61523 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75ZM3.75 12C3.75 16.5563 7.44366 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44366 16.5563 3.75 12 3.75C7.44366 3.75 3.75 7.44366 3.75 12ZM12 6.75C12.4142 6.75 12.75 7.08579 12.75 7.5V12.5C12.75 12.9142 12.4142 13.25 12 13.25C11.5858 13.25 11.25 12.9142 11.25 12.5V7.5C11.25 7.08579 11.5858 6.75 12 6.75ZM13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z"
            />
        </svg>
    )
}

export const IconGeneralAttentionCircle = createIconInner(SVG);