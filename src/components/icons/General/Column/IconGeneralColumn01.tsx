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
                d="M19.0273 2.2002C20.5586 2.2002 21.7999 3.44153 21.7999 4.9728V19.0276C21.7999 20.5589 20.5586 21.8002 19.0273 21.8002H4.97255C3.44129 21.8002 2.19995 20.5589 2.19995 19.0276L2.19995 4.9728C2.19995 3.44153 3.44129 2.2002 4.97255 2.2002L19.0273 2.2002ZM14.3126 3.8002L9.90233 3.8002V20.2002H14.3126V3.8002ZM15.9126 20.2002V3.8002H19.0273C19.675 3.8002 20.1999 4.32519 20.1999 4.9728V19.0276C20.1999 19.6752 19.675 20.2002 19.0273 20.2002H15.9126ZM8.30233 20.2002V3.8002H4.97255C4.32494 3.8002 3.79995 4.32519 3.79995 4.9728L3.79995 19.0276C3.79995 19.6752 4.32494 20.2002 4.97255 20.2002H8.30233Z"
            />
        </svg>
    )
}

export const IconGeneralColumn01 = createIconInner(SVG);