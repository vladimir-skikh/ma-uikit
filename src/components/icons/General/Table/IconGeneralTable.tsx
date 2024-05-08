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
                d="M1.6001 6.0001C1.6001 3.57004 3.57004 1.6001 6.0001 1.6001H18.0001C20.4301 1.6001 22.4001 3.57005 22.4001 6.0001V18.0001C22.4001 20.4301 20.4301 22.4001 18.0001 22.4001H6.0001C3.57005 22.4001 1.6001 20.4301 1.6001 18.0001V6.0001ZM9.8001 20.8001H18.0001C19.5465 20.8001 20.8001 19.5465 20.8001 18.0001V9.8001H9.8001V20.8001ZM8.2001 9.8001V20.8001H6.0001C4.4537 20.8001 3.2001 19.5465 3.2001 18.0001V9.8001H8.2001ZM9.8001 8.2001H20.8001V6.0001C20.8001 4.4537 19.5465 3.2001 18.0001 3.2001H9.8001V8.2001ZM8.2001 3.2001V8.2001H3.2001V6.0001C3.2001 4.4537 4.4537 3.2001 6.0001 3.2001H8.2001Z"
            />
        </svg>
    )
}

export const IconGeneralTable = createIconInner(SVG);