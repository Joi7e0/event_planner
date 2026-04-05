import React from 'react';
import styles from './Card.module.css';

/**
 * Card UI component
 *
 * Renders a card shell with an optional header zone, body zone and footer zone.
 *
 * @param {node}    children   - placed inside the body zone by default
 * @param {node}    header     - content for the header zone (optional)
 * @param {node}    footer     - content for the footer zone (optional)
 * @param {string}  elevation  - 'flat' | 'raised'  (default: undefined → base shadow)
 * @param {string}  className  - extra class names for the root element
 * @param {object}  ...rest    - forwarded to the root <div>
 */
const Card = ({
  children,
  header,
  footer,
  elevation,
  className = '',
  ...rest
}) => {
  const rootClass = [
    styles.card,
    elevation ? styles[elevation] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClass} {...rest}>
      {header && <div className={styles.header}>{header}</div>}
      <div className={styles.body}>{children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
};

export default Card;
