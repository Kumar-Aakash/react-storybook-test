import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

export interface ButtonProps {
  label?: string,
  type?: 'primary' | 'secondary' | 'link' | 'default';
  shape?: 'circle' | 'simple' | 'round';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  type = 'default',
  shape,
  size = 'default',
  ...props
}) => {
  const classNames = [
    size === 'sm' ? styles['b-button-size-sm'] : 
    size === 'xs' ? styles['b-button-size-xs'] :
    size === 'md' ? styles['b-button-size-md'] :
    size === 'lg' ? styles['b-button-size-lg'] :
    size === 'xl' ? styles['b-button-size-xl'] : '',    

    // for the type 
    type === 'primary' ? styles['b-button-type-primary']
    : type === 'secondary' ? styles['b-button-type-secondary']
    : type === 'link' ? styles['b-button-type-link']
    : styles['b-button-type-default'],

    // for the shape
    shape === 'circle' ? styles['b-button-shape-circle']
    : shape === 'simple' ? styles['b-button-shape-simple']
    : shape === 'round'  ? styles['b-button-shape-round']
    : '',
  ].join(' ');

  return (
    <button  className={classNames}  {...props} >
      {label || 'Button test'} 
    </button>
  );
};

export default Button;