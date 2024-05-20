import React from "react";
import {cn, PropsWithHTMLAttributes} from "##/utils";
import {useForkRef} from "##/hooks";

import './Checkbox.css';
import {IconGeneralCheck01, IconGeneralMinus02} from "##/components/icons";

export const checkboxAligns = ['top', 'center'] as const;
type CheckboxAlign = typeof checkboxAligns[number];

const checkboxPropOnChangeDefault = () => {};

export type Props = {
    label?: string,
    hint?: string,
    checked: boolean | undefined,
    align?: CheckboxAlign,
    disabled?: boolean,
    intermediate?: boolean,
    name?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
    onFocus?: React.FocusEventHandler<HTMLInputElement>,
    onBlur?: React.FocusEventHandler<HTMLInputElement>,
    autoFocus?: boolean,
    readOnly?: boolean,
    required?: boolean,
    tabIndex?: number,
    inputRef?: React.Ref<HTMLInputElement>,
    children?: never,
    for?: string,
    inputId?: string,
}

export type CheckboxProps = PropsWithHTMLAttributes<Props, HTMLLabelElement>;

export const COMPONENT_NAME = 'MaKitCheckbox' as const;
export const cnCheckbox = cn(COMPONENT_NAME);

export const Checkbox = React.forwardRef<HTMLLabelElement, CheckboxProps>((props, ref) => {
    const checkboxRef = React.useRef<HTMLLabelElement>(null);

    const {
        checked = false,
        name,
        align = 'top',
        disabled,
        intermediate = false,
        className,
        label,
        hint,
        onChange = checkboxPropOnChangeDefault,
        onFocus,
        onBlur,
        readOnly,
        required,
        tabIndex,
        inputId,
        inputRef,
        ...otherProps
    } = props;

    return (
        <label
            {...otherProps}
            className={cnCheckbox(
                {
                    disabled,
                    checked,
                    intermediate,
                    align
                },
                [className]
            )}
            ref={useForkRef([ref, checkboxRef])}
        >
            <span className={cnCheckbox('CustomInput')}>
                {checked && (
                    <IconGeneralCheck01
                        className={cnCheckbox('Icon')}
                        size="s"
                        view="clear"
                    />
                )}
                {!checked && intermediate && (
                    <IconGeneralMinus02
                        className={cnCheckbox('Icon')}
                        size="s"
                        view="clear"
                    />
                )}
            </span>
            <input
                type="checkbox"
                name={name}
                className={cnCheckbox('Input')}
                checked={checked}
                id={inputId}
                disabled={disabled}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                readOnly={readOnly}
                required={required}
                tabIndex={tabIndex}
                ref={inputRef}
            />
            {label && <span className={cnCheckbox('Label')}>{label}</span>}
            {hint && <span className={cnCheckbox('Hint')}>{hint}</span>}
        </label>
    );
});