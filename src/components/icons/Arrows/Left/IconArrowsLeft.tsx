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
                d="M11.2183 4.42089C11.5383 4.7256 11.5506 5.23198 11.2459 5.55192L5.86662 11.2002L20 11.2002C20.4418 11.2002 20.7999 11.5584 20.7999 12.0002C20.7999 12.442 20.4418 12.8002 20 12.8002L5.86662 12.8002L11.2459 18.4485C11.5506 18.7684 11.5383 19.2748 11.2183 19.5795C10.8984 19.8842 10.392 19.8719 10.0873 19.5519L3.42064 12.5519C3.12639 12.243 3.12639 11.7574 3.42064 11.4485L10.0873 4.44847C10.392 4.12853 10.8984 4.11618 11.2183 4.42089Z"
            />
        </svg>
    )
}

export const IconArrowsLeft = createIconInner(SVG);