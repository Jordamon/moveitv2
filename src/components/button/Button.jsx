import React from 'react';
import styles from './Button.module.css';  // Import as `styles` for scoped CSS
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle = 'btn--primary',
    buttonSize = 'btn--medium' 
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? styles[buttonStyle]  // Access CSS module class name
        : styles[STYLES[0]];

    const checkButtonSize = SIZES.includes(buttonSize)
        ? styles[buttonSize]
        : styles[SIZES[0]];

    return (
        <Link to='/Products' className={styles.btnMobile}> {/* Scoped class */}
            <button
                className={`${styles.btn} ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    );
};
