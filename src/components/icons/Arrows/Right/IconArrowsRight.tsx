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
                d="M12.7816 4.42089C13.1015 4.11618 13.6079 4.12853 13.9126 4.44847L20.5793 11.4485C20.8735 11.7574 20.8735 12.243 20.5793 12.5519L13.9126 19.5519C13.6079 19.8719 13.1015 19.8842 12.7816 19.5795C12.4616 19.2748 12.4493 18.7684 12.754 18.4485L18.1333 12.8002L3.99995 12.8002C3.55812 12.8002 3.19995 12.442 3.19995 12.0002C3.19995 11.5584 3.55812 11.2002 3.99995 11.2002L18.1333 11.2002L12.754 5.55192C12.4493 5.23198 12.4616 4.7256 12.7816 4.42089Z"
            />
        </svg>
    )
}

export const IconArrowsRight = createIconInner(SVG);