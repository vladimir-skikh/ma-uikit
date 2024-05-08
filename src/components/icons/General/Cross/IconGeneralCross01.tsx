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
                d="M3.08071 3.08096C3.58839 2.57327 4.41151 2.57327 4.91919 3.08096L12 10.1617L19.0807 3.08096C19.5884 2.57328 20.4115 2.57328 20.9192 3.08096C21.4269 3.58864 21.4269 4.41176 20.9192 4.91944L13.8384 12.0002L20.9192 19.081C21.4269 19.5886 21.4269 20.4117 20.9192 20.9194C20.4115 21.4271 19.5884 21.4271 19.0807 20.9194L12 13.8387L4.91919 20.9194C4.41151 21.4271 3.58839 21.4271 3.08071 20.9194C2.57303 20.4118 2.57303 19.5886 3.08071 19.081L10.1615 12.0002L3.08071 4.91943C2.57303 4.41175 2.57303 3.58864 3.08071 3.08096Z"
            />
        </svg>
    )
}

export const IconGeneralCross01 = createIconInner(SVG);