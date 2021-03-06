import React from "react";
import styled from "styled-components";

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
        };
        this.input = React.createRef();
        this.focus = this.focus.bind(this);
    }

    focus() {
        this.input.focus();
    }

    render() {
        const {
            autoFocus,
            className,
            disabled,
            id,
            name,
            onBlur,
            onFocus,
            onChange,
            onKeyDown,
            placeholder,
            type,
            value,
            label,
            mask,
            variant,
            autoComplete,
            options,
            helpText,
            ...otherProps
        } = this.props;

        return (
            <InputWrapper className={className} variant={variant}>
                <StyledInput
                    autoFocus={autoFocus}
                    value={value}
                    disabled={disabled}
                    id={id}
                    name={name}
                    onFocus={(e) => {
                        if (onFocus) {
                            onFocus(e);
                        }
                    }}
                    onBlur={onBlur}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    placeholder={placeholder}
                    variant={variant}
                    type={type}
                    ref={this.input}
                    autoComplete={autoComplete}
                    {...otherProps}
                />
            </InputWrapper>
        );
    }
}

export const InputWrapper = styled.div`
    display: block;
    margin-bottom: 0;
    position: relative;
`;

const StyledInput = styled.input`
    display: block;
    width: 100%;
    min-height: 44px;
    margin: 0 auto;
    border: 1px solid #cbcbcb;
    border-radius: 3px;
    padding-left: 12px;
    padding-right: 12px;
    font-size: 16px;
    -webkit-appearance: none;
    appearance: none;
    -moz-appearance: textfield;

    &:hover,
    &:focus,
    &:active {
        outline: none;
        background-color: #f7f7ff;
    }

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

export default Input;
