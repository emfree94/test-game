import Select, { components } from 'react-select'
import bitcoinIcon from '@assets/icon/currency_bitcoin.svg'
import searchIcon from '@assets/icon/search.svg'
import shibaIcon from '@assets/icon/shiba_inu.svg'
import { useState } from 'react'


interface coinOption {
  coinImg: string
  value: string | number
  label: string
}

const coinsOption: coinOption[] = [
  {
    coinImg: shibaIcon,
    value: 1000,
    label: 'Text',
  },
  {
    coinImg: shibaIcon,
    value: 1001,
    label: 'Text',
  },
  {
    coinImg: shibaIcon,
    value: 1002,
    label: 'Text',
  },
]

const customOption = (props: any) => {
  const { innerRef, innerProps, data, isSelected } = props
  return (
    <div
      ref={innerRef}
      {...innerProps}
      className={`custom-option custom-coin ${isSelected && 'selected'}`}
    >
      <span className="custom-option--wrapper">
        <img src={data.coinImg} alt={data.coinImg} className="flag-image" />
        {data.label}
      </span>
      <p className="custom-option-coin text-tiny-regular">{data.value}</p>
    </div>
  )
}

const customInput = (props: any) => {
  const { selectProps } = props
  const { value, inputValue } = selectProps
  const showIcon = value && inputValue === ''

  return (
    <>
      <div className="custom-input-container">
        <img src={searchIcon} alt="Search" className="search-icon" />
        <components.Input {...props} />
      </div>
      {showIcon && value && (
        <img
          src={value.coinImg}
          alt="selected coin"
          className="selected-flag-input-language "
        />
      )}
    </>
  )
}

export const DepositAccordion = () => {
  const [selectedOption, setSelectedOption] = useState<coinOption | null>(
    null
  )

  const handleChange = (selectedOption: coinOption | null) => {
    setSelectedOption(selectedOption)
    console.log('Selected deposit:', selectedOption)
  }

  return (
    <div className="language-accordion">
      <div className="tab">
        <input type="checkbox" name="accordion-1" id="language-accordion" />
        <label htmlFor="language-accordion" className="tab__label text-regular">
          <img className="icon-globe" src={bitcoinIcon} alt="icon-bitcoin" />
          <span className="label-text">
            Монети
            {selectedOption && (
              <img
                src={selectedOption.coinImg}
                alt={selectedOption.label}
                className="selected-flag"
              />
            )}
          </span>
        </label>
        <div className="tab__content">
          <Select
            defaultMenuIsOpen
            className="react-select-container-language"
            classNamePrefix="react-select-language"
            value={selectedOption}
            onChange={handleChange}
            options={coinsOption}
            placeholder="Пошук"
            isClearable
            components={{
              Option: customOption,
              Input: customInput,
            }}
          />
        </div>
      </div>
    </div>
  )
}
