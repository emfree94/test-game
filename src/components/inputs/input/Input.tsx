import { ComponentPropsWithoutRef, forwardRef, useState } from 'react'
import goldenCoinIcon from '@assets/icon/golden_coins2.svg'
import circleIcon from '@assets/icon/check_circle.svg'
import errorIcon from '@assets/icon/error.svg'
import successIcon from '@assets/icon/check_circle_success.svg'
import './input.scss'

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  type: 'text' | 'email' | 'tel' | 'password' | 'number'
  placeholder: string
  country?: 'UA' | 'FR' | 'US' | 'PL'
  errorMessage?: string
  isValid?: boolean
  inputLength?: string | number
  coinIcon?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { errorMessage, type, placeholder, country = 'UA', isValid,coinIcon, inputLength, ...rest },
    ref
  ) => {

    const getCountryPrefix = (country: string) => {
      switch (country) {
        case 'UA':
          return '+380'
        case 'FR':
          return '+33'
        case 'US':
          return '+1'
        case 'PL':
          return '+48'
        default:
          return ''
      }
    }

    const formatPhoneNumber = (input: string, country: string) => {
      const digits = input.replace(/\D/g, '')
      let formatted = ''

      switch (country) {
        case 'UA':
          formatted = `(${digits.slice(0, 2)}) ${digits.slice(
            2,
            5
          )}-${digits.slice(5, 7)}-${digits.slice(7, 9)}`
          break
        case 'FR':
          formatted = `${digits.slice(0, 1)} ${digits.slice(
            1,
            3
          )} ${digits.slice(3, 5)} ${digits.slice(5, 7)} ${digits.slice(7, 9)}`
          break
        case 'US':
          formatted = `(${digits.slice(0, 3)}) ${digits.slice(
            3,
            6
          )}-${digits.slice(6, 10)}`
          break
        case 'PL':
          formatted = `${digits.slice(0, 3)} ${digits.slice(
            3,
            6
          )} ${digits.slice(6, 9)}`
          break
        default:
          formatted = input
      }

      return formatted.trim()
    }

    const countryPrefix = getCountryPrefix(country || 'UA')
    const [value, setValue] = useState(countryPrefix)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let input = e.target.value

      if (input.length < value.length) {
        const currentDigits = value
          .replace(countryPrefix, '')
          .replace(/\D/g, '')
        const newDigits = currentDigits.slice(0, -1)
        const formattedValue =
          countryPrefix + ' ' + formatPhoneNumber(newDigits, country || 'UA')
        input = formattedValue
      } else {
        if (!input.startsWith(countryPrefix)) {
          input =
            countryPrefix + input.replace(/\D/g, '').slice(countryPrefix.length)
        }

        const digits = input.replace(countryPrefix, '').replace(/\D/g, '')
        const formattedValue =
          countryPrefix + ' ' + formatPhoneNumber(digits, country || 'UA')
        input = formattedValue
      }
      setValue(input)
    }

    let icon = circleIcon
    if(coinIcon) {
      icon = goldenCoinIcon
    }
    if (errorMessage) {
      icon = errorIcon
    } else if (isValid) {
      icon = successIcon
    }

    return (
      <div className="input-block">
        <div className="input-wrapper">
          {type === 'tel' ? (
            <input
              {...rest}
              className={`input ${errorMessage && 'input-error'}`}
              type={type}
              placeholder={placeholder}
              ref={ref}
              value={value}
              onChange={handleChange}
            />
          ) : (
            <input
              className={`input ${errorMessage && 'input-error'}`}
              {...rest}
              type={type}
              placeholder={placeholder}
              ref={ref}
            />
          )}
          <img className="input-icon" src={icon} alt="input-icon" />
          {!!errorMessage && (
            <span className="input-error-text text-error">{errorMessage}</span>
          )}
          {!errorMessage && type === 'text' && (
            <span className="input-length-text text-error">
              {inputLength}/32
            </span>
          )}
        </div>
      </div>
    )
  }
)
