import React from 'react';

export interface ButtonProps {
  label?: string,
  type?: 'primary' | 'secondary' | 'link' | 'default';
  shape?: 'circle' | 'simple' | 'round';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  children?: React.ReactNode;
  onClick?: () => void;

}

const Button2: React.FC<ButtonProps> = ({
  label,
  type = 'default',
  shape,
  size = 'default',
  ...props
}) => {
  const classNames = [
    'btn',
    
    // Size classes
    size === 'xs' ? 'text-xs px-2 py-1' :
    size === 'sm' ? 'text-sm px-3 py-2' : 
    size === 'md' ? 'text-sm px-4 py-3' : 
    size === 'lg' ? 'text-base px-5 py-3' :  
    size === 'xl' ? 'text-base px-6 py-4' : '', 

    // Type classes
    type === 'primary' ? 'bg-[#5850EC] px-2 py-1 font-medium text-white hover:bg-white hover:text-[#5850EC] hover:border hover:border-[#5850EC] ' :
    type === 'secondary' ? 'bg-[#F0F5FF] font-medium  text-[#5850EC] py-1 px-2 hover:bg-[#5850EC] hover:text-[#F0F5FF] ':
    type === 'link' ? 'text-[#5850EC] font-medium bg-white hover:underline hover:text-blue-500' :
    'text-[#5850EC] border border-[#E5EDFF]  font-medium px-4 py-3 hover:bg-[#5850EC] hover:text-[#F0F5FF]',

    // Shape classes
    shape === 'circle' ? 'rounded-full' :
    shape === 'simple' ? '' :
    shape === 'round' ? 'rounded-lg' : '',
  ].join(' ');

  return (
    <button className={classNames} {...props}>
      {label || 'Button test'}
    </button>
  );
};

export default Button2;
