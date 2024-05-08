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
                d="M8.19995 4.05902C8.19995 3.07612 8.96337 2.2002 9.99995 2.2002H14C15.0365 2.2002 15.8 3.07612 15.8 4.05902V5.11784C15.8 5.20514 15.7939 5.29159 15.7822 5.37667H20C20.4418 5.37667 20.7999 5.73484 20.7999 6.17667C20.7999 6.61849 20.4418 6.97667 20 6.97667H18.7822C18.7939 7.06174 18.8 7.14819 18.8 7.23549V18.8825C18.8 20.4502 17.5888 21.8002 16 21.8002H7.99995C6.41109 21.8002 5.19995 20.4502 5.19995 18.8825V7.23549C5.19995 7.14819 5.20597 7.06174 5.21767 6.97667H3.99995C3.55812 6.97667 3.19995 6.61849 3.19995 6.17667C3.19995 5.73484 3.55812 5.37667 3.99995 5.37667H8.21767C8.20597 5.29159 8.19995 5.20514 8.19995 5.11784V4.05902ZM6.99995 6.97667C6.93196 6.97667 6.79995 7.04885 6.79995 7.23549V18.8825C6.79995 19.654 7.37968 20.2002 7.99995 20.2002H16C16.6202 20.2002 17.2 19.654 17.2 18.8825V7.23549C17.2 7.04885 17.0679 6.97667 17 6.97667H6.99995ZM9.99995 3.8002C9.93196 3.8002 9.79995 3.87238 9.79995 4.05902V5.11784C9.79995 5.30448 9.93196 5.37667 9.99995 5.37667H14C14.0679 5.37667 14.2 5.30448 14.2 5.11784V4.05902C14.2 3.87238 14.0679 3.8002 14 3.8002H9.99995ZM9.99995 9.61196C10.4418 9.61196 10.8 9.97013 10.8 10.412V16.7649C10.8 17.2067 10.4418 17.5649 9.99995 17.5649C9.55812 17.5649 9.19995 17.2067 9.19995 16.7649V10.412C9.19995 9.97013 9.55812 9.61196 9.99995 9.61196ZM14 9.61196C14.4418 9.61196 14.8 9.97013 14.8 10.412V16.7649C14.8 17.2067 14.4418 17.5649 14 17.5649C13.5581 17.5649 13.2 17.2067 13.2 16.7649V10.412C13.2 9.97013 13.5581 9.61196 14 9.61196Z"
            />
        </svg>
    )
}

export const IconGeneralTrash01 = createIconInner(SVG);