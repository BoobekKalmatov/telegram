import React from 'react';
import styles from './Input.module.css';
import cn from 'classnames';

export const Input = React.forwardRef((props, ref) => {
  const checkbox = props.type === 'checkbox';
  return (
    <div className={cn(styles.wrapper, { [styles.checkboxWrapper]: checkbox })}>
      {props.label && (
        <label
          htmlFor={props.name}
          className={cn({
            [styles.label]: !checkbox,
            [styles.checkboxLabel]: checkbox,
          })}
        >
          {props.label}
        </label>
      )}
      <input
        ref={ref}
        id={props.name}
        className={cn({
          [props.className]: props.className,
          [styles.input]: !checkbox,
          [styles.checkbox]: checkbox,
        })}
        {...props}
      />
    </div>
  );
});
