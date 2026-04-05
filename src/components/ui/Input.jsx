import React, { useId } from 'react';
import styles from './Input.module.css';

/**
 * Input UI component
 *
 * @param {string}  label        - visible label text (optional)
 * @param {string}  placeholder  - input placeholder text
 * @param {boolean} disabled     - disables the input
 * @param {string}  error        - error message shown below the input
 * @param {string}  hint         - hint/helper text shown below the input
 * @param {string}  id           - explicit id; auto-generated if omitted
 * @param {string}  className    - extra class for the wrapper
 * @param {object}  ...rest      - forwarded to the <input> element
 */
const Input = ({
  label,
  placeholder,
  disabled = false,
  error,
  hint,
  id: externalId,
  className = '',
  ...rest
}) => {
  const autoId = useId();
  const inputId = externalId ?? autoId;

  const inputClass = [
    styles.input,
    error ? styles.inputError : '',
    disabled ? styles.disabled : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={`${styles.wrapper} ${className}`}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={inputClass}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={!!error}
        aria-describedby={
          error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
        }
        {...rest}
      />
      {error && (
        <span id={`${inputId}-error`} className={styles.errorMsg} role="alert">
          {error}
        </span>
      )}
      {!error && hint && (
        <span id={`${inputId}-hint`} className={styles.hint}>
          {hint}
        </span>
      )}
    </div>
  );
};

export default Input;
