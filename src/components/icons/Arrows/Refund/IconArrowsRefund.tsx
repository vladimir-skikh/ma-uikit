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
                d="M11.2001 19.2C11.2001 19.6418 11.5583 20 12.0001 20L17.6001 20C20.2511 20 22.4001 17.851 22.4001 15.2L22.4001 13.4155C22.4001 10.7645 20.2511 8.61549 17.6001 8.61549L4.31326 8.61549L7.52344 5.36187C7.83375 5.04736 7.83035 4.54084 7.51584 4.23052C7.20132 3.92021 6.6948 3.92361 6.38449 4.23813L1.83062 8.85362C1.52326 9.16515 1.52326 9.66583 1.83062 9.97736L6.38449 14.5929C6.6948 14.9074 7.20132 14.9108 7.51584 14.6005C7.83035 14.2901 7.83375 13.7836 7.52344 13.4691L4.31326 10.2155L17.6001 10.2155C19.3674 10.2155 20.8001 11.6482 20.8001 13.4155L20.8001 15.2C20.8001 16.9673 19.3674 18.4 17.6001 18.4L12.0001 18.4C11.5583 18.4 11.2001 18.7582 11.2001 19.2Z"
            />
        </svg>
    )
}

export const IconArrowsRefund = createIconInner(SVG);