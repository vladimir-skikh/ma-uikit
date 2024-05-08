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
                d="M17.3642 7.83282C17.6775 8.14436 17.679 8.65089 17.3674 8.96419L10.2079 16.1642C10.0578 16.3152 9.85358 16.4001 9.64063 16.4001C9.42767 16.4001 9.22351 16.3152 9.07335 16.1642L6.63287 13.7099C6.32133 13.3966 6.32276 12.8901 6.63606 12.5785C6.94936 12.267 7.45589 12.2684 7.76742 12.5817L9.64063 14.4655L16.2329 7.83601C16.5444 7.52271 17.0509 7.52128 17.3642 7.83282Z"
            />
        </svg>
    )
}

export const IconGeneralCheck01 = createIconInner(SVG);