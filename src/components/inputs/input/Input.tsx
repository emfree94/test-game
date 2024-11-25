import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { getIcon } from '@utils/utils'
import './input.scss'

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  type: 'text' | 'email' | 'password' | 'number'
  placeholder: string
  errorMessage?: string
  isValid?: boolean
  inputLength?: string | number
  coinIcon?: boolean
  isSilverCoin?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      errorMessage,
      type,
      placeholder,
      isValid,
      coinIcon,
      isSilverCoin,
      inputLength,
      ...rest
    },
    ref
  ) => {
    const icon = getIcon({ isSilverCoin, coinIcon, errorMessage, isValid })

    return (
      <div className="input-block">
        <div className="input-wrapper">
          <input
            className={`input ${errorMessage && 'input-error'}`}
            {...rest}
            type={type}
            placeholder={placeholder}
            ref={ref}
          />
          <img className="input-icon" src={icon} alt="input-icon" />
          {!!errorMessage && (
            <span className="input-error-text text-error">{errorMessage}</span>
          )}
          {!errorMessage && !!inputLength && type === 'text' && (
            <span className="input-length-text text-error">
              {inputLength}/32
            </span>
          )}
        </div>
      </div>
    )
  }
)
