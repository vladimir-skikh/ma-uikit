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
                d="M11.9999 6.3999C12.4417 6.3999 12.7999 6.75807 12.7999 7.1999V11.1999L16.7999 11.1999C17.2417 11.1999 17.5999 11.5581 17.5999 11.9999C17.5999 12.4417 17.2417 12.7999 16.7999 12.7999H12.7999V16.7999C12.7999 17.2417 12.4417 17.5999 11.9999 17.5999C11.5581 17.5999 11.1999 17.2417 11.1999 16.7999L11.1999 12.7999H7.1999C6.75807 12.7999 6.3999 12.4417 6.3999 11.9999C6.3999 11.5581 6.75807 11.1999 7.1999 11.1999H11.1999L11.1999 7.1999C11.1999 6.75807 11.5581 6.3999 11.9999 6.3999Z"
            />
        </svg>
    )
}

export const IconGeneralPlus02 = createIconInner(SVG);