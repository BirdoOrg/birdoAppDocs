import React, { CSSProperties } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

// Build the Button component with the specified props
const Button = ({
    size = null, // The size of the button (e.g., 'sm', 'lg', or null)
    outline = false, // Whether the button should be an outline button
    variant = 'primary', // The color variant of the button
    block = false, // Whether the button should be a block-level button
    disabled = false, // Whether the button should be disabled
    className, // Custom classes for the button
    style, // Custom styles for the button
    link, // The URL the button should link to
    img, //img object (teste leo)
    label // The text of the button
}) => {
    const sizeMap = {
        sm: 'sm',
        small: 'sm',
        lg: 'lg',
        large: 'lg',
        medium: null,
    };
    const buttonSize = size ? sizeMap[size] : '';
    const sizeClass = buttonSize ? `button--${buttonSize}` : '';
    const outlineClass = outline ? 'button--outline' : '';
    const variantClass = variant ? `button--${variant}` : '';
    const blockClass = block ? 'button--block' : '';
    const disabledClass = disabled ? 'disabled' : '';
    const image = img ? <img src={img} width='100' /> : '';

    // If the button is disabled, set the destination to null.
    const destination = disabled ? null : link;
    return (
        <Link to={destination}>
            <button
                className={clsx('button', sizeClass, outlineClass, variantClass, blockClass, disabledClass, className)}
                style={style}
                role="button"
                aria-disabled={disabled}
            >
                {image}
                {label}
            </button>
        </Link>
    );
};

export default Button;