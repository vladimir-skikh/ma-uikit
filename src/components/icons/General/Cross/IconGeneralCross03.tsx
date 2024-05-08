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
                d="M7.43427 7.43451C7.74669 7.12209 8.25322 7.12209 8.56564 7.43451L12 10.8688L15.4343 7.43451C15.7467 7.12209 16.2532 7.12209 16.5656 7.43451C16.8781 7.74693 16.8781 8.25346 16.5656 8.56588L13.1313 12.0002L16.5656 15.4345C16.8781 15.7469 16.8781 16.2535 16.5656 16.5659C16.2532 16.8783 15.7467 16.8783 15.4343 16.5659L12 13.1316L8.56564 16.5659C8.25322 16.8783 7.74669 16.8783 7.43427 16.5659C7.12185 16.2535 7.12185 15.7469 7.43427 15.4345L10.8686 12.0002L7.43427 8.56588C7.12185 8.25346 7.12185 7.74693 7.43427 7.43451Z"
            />
        </svg>
    )
}

export const IconGeneralCross03 = createIconInner(SVG);