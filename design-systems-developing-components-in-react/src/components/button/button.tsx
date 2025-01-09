import React from 'react';
import { ButtonProps } from './button.types';
import { StyledButton } from './button.styles';

export const Button: React.FC<ButtonProps> = ({ 
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;