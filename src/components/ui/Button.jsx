import React from 'react';
import styles from './Button.module.css';

/**
 * Button UI component
 *
 * @param {string}   variant   - 'primary' | 'secondary' | 'danger' | 'ghost'  (default: 'primary')
 * @param {string}   size      - 'sm' | 'md' | 'lg'  (default: 'md')
 * @param {boolean}  disabled  - disables the button
 * @param {function} onClick   - click handler
 * @param {string}   type      - button type attribute (default: 'button')
 * @param {node}     children  - button content
 * @param {object}   ...rest   - any other native button props forwarded
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  type = 'button',
  children,
  className = '',
  ...rest
}) => {
  const classNames = [
    styles.btn,
    styles[variant] ?? styles.primary,
    styles[size]    ?? styles.md,
    disabled ? styles.disabled : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={classNames}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      aria-disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
