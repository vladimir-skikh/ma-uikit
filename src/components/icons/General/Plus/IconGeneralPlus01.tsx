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
                d="M12 5.2002C12.4418 5.2002 12.8 5.55837 12.8 6.0002L12.8 11.2002H18C18.4418 11.2002 18.8 11.5584 18.8 12.0002C18.8 12.442 18.4418 12.8002 18 12.8002H12.8L12.8 18.0002C12.8 18.442 12.4418 18.8002 12 18.8002C11.5581 18.8002 11.2 18.442 11.2 18.0002L11.2 12.8002H5.99995C5.55812 12.8002 5.19995 12.442 5.19995 12.0002C5.19995 11.5584 5.55812 11.2002 5.99995 11.2002H11.2L11.2 6.0002C11.2 5.55837 11.5581 5.2002 12 5.2002Z"
            />
        </svg>
    )
}

export const IconGeneralPlus01 = createIconInner(SVG);