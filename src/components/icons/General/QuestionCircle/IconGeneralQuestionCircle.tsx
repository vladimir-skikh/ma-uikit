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
                d="M12.0001 3.74609C7.44167 3.74609 3.74634 7.44142 3.74634 11.9998C3.74634 16.5583 7.44167 20.2536 12.0001 20.2536C16.5585 20.2536 20.2538 16.5583 20.2538 11.9998C20.2538 7.44142 16.5585 3.74609 12.0001 3.74609ZM2.24634 11.9998C2.24634 6.613 6.61324 2.24609 12.0001 2.24609C17.3869 2.24609 21.7538 6.613 21.7538 11.9998C21.7538 17.3867 17.3869 21.7536 12.0001 21.7536C6.61324 21.7536 2.24634 17.3867 2.24634 11.9998ZM13.4007 10.021C13.3409 9.27237 12.6944 8.70535 11.9415 8.74705C11.9174 8.74839 11.8931 8.74856 11.869 8.74756C11.1814 8.71902 10.5709 9.18378 10.4154 9.85409C10.3218 10.2576 9.91878 10.5088 9.51529 10.4152C9.11179 10.3215 8.86059 9.91856 8.95421 9.51506C9.26999 8.15405 10.5017 7.2068 11.8949 7.24756C13.4635 7.18008 14.8017 8.38093 14.8995 9.95243C14.9005 9.96795 14.901 9.98349 14.901 9.99903C14.901 11.1449 14.0658 11.8502 13.5487 12.2706C13.4808 12.3258 13.4177 12.3765 13.3588 12.4237L13.3585 12.424L13.3582 12.4242C13.1541 12.588 13.0013 12.7106 12.878 12.8394C12.781 12.9408 12.7557 12.9936 12.75 13.0089C12.7454 13.4192 12.4114 13.7503 12.0001 13.7503C11.5859 13.7503 11.2501 13.4145 11.2501 13.0003C11.2501 12.4621 11.5436 12.0643 11.7943 11.8023C11.9932 11.5945 12.2486 11.3903 12.4629 11.2189C12.5119 11.1797 12.5588 11.1422 12.6024 11.1068C13.1493 10.6621 13.391 10.3699 13.4007 10.021ZM12.7486 13.0137C12.7486 13.0137 12.7487 13.0129 12.7493 13.0112C12.749 13.0128 12.7487 13.0137 12.7486 13.0137ZM12.0001 16.6265C12.4811 16.6265 12.8715 16.2383 12.8751 15.7581L12.8751 15.7513C12.8751 15.268 12.4834 14.8762 12.0001 14.8762C11.9864 14.8762 11.9728 14.8766 11.9594 14.8773C11.495 14.8986 11.125 15.2818 11.125 15.7514C11.125 16.2347 11.5168 16.6265 12.0001 16.6265Z"
            />
        </svg>
    )
}

export const IconGeneralQuestionCircle = createIconInner(SVG);