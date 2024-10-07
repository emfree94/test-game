import React, { FC, useEffect, useState } from 'react'
import Select, { components } from 'react-select'
import globe from '@assets/icon/globe_asia.svg'
import checkmarkIcon from '@assets/icon/check_circle_success.svg'
import searchIcon from '@assets/icon/search.svg'
import './countryAccordion.scss'

interface Accordion {
  isMultiOption?: boolean
}

interface CountryOption {
  value: string
  label: string
  flag: string
}

const fetchCountryOptions = async (): Promise<CountryOption[]> => {
  const response = await fetch('https://restcountries.com/v3.1/all')
  const data = await response.json()

  const sortedCountries = data
    .map((country: any) => ({
      value: country.cca2.toLowerCase(),
      label: country.name.common,
      flag: country.flags.svg,
    }))
    .sort((a: CountryOption, b: CountryOption) =>
      a.label.localeCompare(b.label)
    )

  return sortedCountries
}

const customOption = (props: any) => {
  const { innerRef, innerProps, data, isSelected } = props

  return (
    <div
      ref={innerRef}
      {...innerProps}
      className={`custom-option ${isSelected && 'selected'}`}
    >
      <img src={data.flag} alt={data.label} className="flag-image" />
      {data.label}
      {isSelected && (
        <img src={checkmarkIcon} alt="Selected" className="checkmark-icon" />
      )}
    </div>
  )
}

const customInput = (props: any) => {
  const { selectProps, ...inputProps } = props
  const { value, inputValue } = selectProps
  const showFlag = value && inputValue === ''

  return (
    <>
      <div className="custom-input-container">
        <img src={searchIcon} alt="Search" className="search-icon" />
        <components.Input {...inputProps} placeholder="Пошук" />
      </div>
      {selectProps.isMultiOption && value && (
        <div className="selected-flags-container">
          {value.map((country: CountryOption) => (
            <img
              key={country.value}
              src={country.flag}
              alt={country.label}
              className="selected-flag-input"
            />
          ))}
        </div>
      )}
      {!selectProps.isMultiOption && showFlag && value && (
        <img
          src={value.flag}
          alt="Selected Country Flag"
          className="selected-flag-input"
        />
      )}
    </>
  )
}

export const CountryAccordion: FC<Accordion> = ({ isMultiOption }) => {
  const [selectedCountries, setSelectedCountries] = useState<
    CountryOption[] | CountryOption | null
  >(null)
  const [countryOptions, setCountryOptions] = useState<CountryOption[]>([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const loadCountries = async () => {
      try {
        const options = await fetchCountryOptions()
        setCountryOptions(options)
      } catch (error) {
        console.error('Error fetching country data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadCountries()
  }, [])

  

  // const handleChange = (selectedOptions: CountryOption[] | null) => {
  //   if (isMultiOption) {
  //     if (selectedOptions && selectedOptions.length <= 3) {
  //       setSelectedCountries(selectedOptions)
  //     }
  //   } else {
  //     setSelectedCountries(selectedOptions)
  //   }

  //   console.log('Selected countries:', selectedOptions)
  // }

  return (
    <div className="accordion">
      <div className="tab">
        <input type="checkbox" name="accordion-1" id="cb1" />
        <label htmlFor="cb1" className="tab__label text-regular">
          <img className="icon-globe" src={globe} alt="icon-globe" />
          <span className="label-text">
            Країна
            {isMultiOption &&
            Array.isArray(selectedCountries) &&
            selectedCountries.length > 0 ? (
              selectedCountries.map((country) => (
                <img
                  key={country.value}
                  src={country.flag}
                  alt={country.label}
                  className="selected-flag"
                />
              ))
            ) : selectedCountries &&
              (selectedCountries as CountryOption).flag ? (
              <img
                src={(selectedCountries as CountryOption).flag}
                alt={(selectedCountries as CountryOption).label}
                className="selected-flag"
              />
            ) : null}
          </span>
        </label>
        <div className="tab__content">
          <Select
            defaultMenuIsOpen
            className="react-select-container"
            classNamePrefix="react-select"
            value={selectedCountries}
            // onChange={handleChange}
            options={countryOptions}
            placeholder="Пошук"
            isMulti={isMultiOption}
            hideSelectedOptions={false}
            components={{
              Option: customOption,
              Input: (inputProps) =>
                customInput({
                  ...inputProps,
                  selectProps: { ...inputProps.selectProps, isMultiOption },
                }),
            }}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  )
}
