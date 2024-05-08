import React from "react";
import {createIconInner} from '##/components/icons/Icon/createIconInner';

const SVG: React.FC<React.SVGProps<SVGSVGElement>> = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.93427 12.566C8.62185 12.2536 8.62185 11.747 8.93427 11.4346L13.9343 6.43461C14.2467 6.12219 14.7532 6.12219 15.0656 6.43461C15.3781 6.74703 15.3781 7.25356 15.0656 7.56598L10.6313 12.0003L15.0656 16.4346C15.3781 16.747 15.3781 17.2536 15.0656 17.566C14.7532 17.8784 14.2467 17.8784 13.9343 17.566L8.93427 12.566Z"
            />
        </svg>
    )
}

export const IconArrowsChevronLeft = createIconInner(SVG);