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
                d="M3.19995 7.0002C3.19995 6.55837 3.55812 6.2002 3.99995 6.2002H20C20.4418 6.2002 20.7999 6.55837 20.7999 7.0002C20.7999 7.44202 20.4418 7.8002 20 7.8002H3.99995C3.55812 7.8002 3.19995 7.44202 3.19995 7.0002ZM5.66149 12.0002C5.66149 11.5584 6.01966 11.2002 6.46149 11.2002H17.5384C17.9802 11.2002 18.3384 11.5584 18.3384 12.0002C18.3384 12.442 17.9802 12.8002 17.5384 12.8002H6.46149C6.01966 12.8002 5.66149 12.442 5.66149 12.0002ZM9.3538 17.0002C9.3538 16.5584 9.71197 16.2002 10.1538 16.2002H13.8461C14.2879 16.2002 14.6461 16.5584 14.6461 17.0002C14.6461 17.442 14.2879 17.8002 13.8461 17.8002H10.1538C9.71197 17.8002 9.3538 17.442 9.3538 17.0002Z"
            />
        </svg>
    )
}

export const IconGeneralFilter = createIconInner(SVG);