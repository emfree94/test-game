import React from 'react'
import './button.scss'

interface ButtonProps {
  size?: 'large' | 'medium' | 'small'
  width?: string
  text: string
  marginBottom?: string
  colorVariant?: 'light' | 'yellow' | 'transparent' | 'gray'
  className?: string
  onClick?: () => void
  buttonIcon?: string
  disabled?: boolean
  fontSize?: string
  type?: 'submit' | 'button'
}

export const Button: React.FC<ButtonProps> = ({
  text,
  marginBottom,
  fontSize = 'text-semi-bold',
  colorVariant = 'light',
  className,
  width,
  onClick,
  buttonIcon,
  size,
  disabled,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`button-component ${className} ${
        colorVariant && colorVariant
      } ${size && size} ${fontSize && fontSize}`}
      style={{ marginBottom, width }}
      onClick={onClick}
    >
      {text}
      {buttonIcon && (
        <img className="button-img" src={buttonIcon} alt="button-icon" />
      )}
    </button>
  )
}
