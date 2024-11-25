import  { useState } from 'react'
import Select, { components } from 'react-select'
import globe from '@assets/icon/language.svg'
import searchIcon from '@assets/icon/search.svg'
import checkmarkIcon from '@assets/icon/check_circle_success.svg'

interface NetworkOption {
  label: string
  id: number
}

const networkOptions: NetworkOption[] = [
  {
    label: 'Мережа 1',
    id: 1,
  },
  {
    label: 'Мережа 2',
    id: 2,
  },
  {
    label: 'Мережа 3',
    id: 3,
  },
]

const customOption = (props: any) => {
  const { innerRef, innerProps, data, selectProps } = props
  const isSelectedNetwork = selectProps.value?.id === data.id
  
  return (
    <div
      ref={innerRef}
      {...innerProps}
      className={`custom-option ${isSelectedNetwork ? 'selected' : ''}`}
    >
      {data.label}
      {isSelectedNetwork && (
        <img src={checkmarkIcon} alt="Selected" className="checkmark-icon" />
      )}
    </div>
  )
}

const customInput = (props: any) => {
  return (
    <>
      <div className="custom-input-container">
        <img src={searchIcon} alt="Search" className="search-icon" />
        <components.Input {...props} />
      </div>
    </>
  )
}

export const NetworkAccordion = () => {
  const [selectedNetwork, setSelectedNetwork] = useState<NetworkOption | null>(
    networkOptions[0]
  )

  const handleChange = (selectedOption: NetworkOption | null) => {
    setSelectedNetwork(selectedOption)
    console.log('Selected network:', selectedOption)
  }

  return (
    <div className="language-accordion network">
      <div className="tab">
        <input type="checkbox" name="accordion-1" id="language-accordion" />
        <label htmlFor="language-accordion" className="tab__label text-regular">
          <img className="icon-globe" src={globe} alt="icon-globe" />
          <span className="label-text">{selectedNetwork?.label}</span>
        </label>
        <div className="tab__content">
          <Select
            defaultMenuIsOpen
            className="react-select-container-language"
            classNamePrefix="react-select-language"
            value={selectedNetwork}
            onChange={handleChange}
            options={networkOptions}
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
