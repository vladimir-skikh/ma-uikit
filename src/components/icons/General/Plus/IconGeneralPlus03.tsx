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
                d="M12 7.2998C12.3866 7.2998 12.7 7.61321 12.7 7.9998V11.2998L16 11.2998C16.3866 11.2998 16.7 11.6132 16.7 11.9998C16.7 12.3864 16.3866 12.6998 16 12.6998H12.7V15.9998C12.7 16.3864 12.3866 16.6998 12 16.6998C11.6134 16.6998 11.3 16.3864 11.3 15.9998L11.3 12.6998H8.00005C7.61345 12.6998 7.30005 12.3864 7.30005 11.9998C7.30005 11.6132 7.61345 11.2998 8.00005 11.2998H11.3V7.9998C11.3 7.61321 11.6135 7.2998 12 7.2998Z"
            />
        </svg>
    )
}

export const IconGeneralPlus03 = createIconInner(SVG);