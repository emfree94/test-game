import React, { useState } from 'react'
import Select, { components } from 'react-select'
import globe from '@assets/icon/language.svg'
import searchIcon from '@assets/icon/search.svg'
import checkmarkIcon from '@assets/icon/check_circle_success.svg'
import './languageAccordion.scss'

interface LanguageOption {
  value: string
  label: string
  flag: string
}

const languageOptions: LanguageOption[] = [
  {
    value: 'ua',
    label: 'Українська',
    flag: 'https://flagcdn.com/w320/ua.png', 
  },
  {
    value: 'ru',
    label: 'Москальська',
    flag: 'https://flagcdn.com/w320/ru.png', 
  },
  {
    value: 'en',
    label: 'Англійська',
    flag: 'https://flagcdn.com/w320/gb.png', 
  },
]

const customOption = (props: any) => {
  const { innerRef, innerProps, data, isSelected } = props
  
  return (
    <div ref={innerRef} {...innerProps} className={`custom-option ${isSelected && 'selected'}`}>
      <img src={data.flag} alt={data.label} className="flag-image" />
      {data.label}
      {isSelected && (
        <img src={checkmarkIcon} alt="Selected" className="checkmark-icon" />
      )}
    </div>
  )
}

const customInput = (props: any) => {
  const { selectProps } = props
  const { value, inputValue } = selectProps
  const showFlag = value && inputValue === ''

  return (
    <>
      <div className="custom-input-container">
        <img src={searchIcon} alt="Search" className="search-icon" />
        <components.Input {...props} />
      </div>
      {showFlag && value && (
        <img
          src={value.flag}
          alt="Selected Country Flag"
          className="selected-flag-input-language "
        />
      )}
    </>
  )
}

export const LanguageAccordion = () => {
  const [selectedLanguage, setSelectedLanguage] =
    useState<LanguageOption | null>(null)

  const handleChange = (selectedOption: LanguageOption | null) => {
    setSelectedLanguage(selectedOption)
    console.log('Selected language:', selectedOption)
  }

  return (
    <div className="language-accordion">
      <div className="tab">
        <input type="checkbox" name="accordion-1" id="language-accordion" />
        <label htmlFor="language-accordion" className="tab__label text-regular">
          <img className="icon-globe" src={globe} alt="icon-globe" />
          <span className="label-text">
            Мова
            {selectedLanguage && (
              <img
                src={selectedLanguage.flag}
                alt={selectedLanguage.label}
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
            value={selectedLanguage}
            onChange={handleChange}
            options={languageOptions}
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
