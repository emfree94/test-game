import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RangeSlider, MantineProvider } from '@mantine/core'
import { Button } from '@components/buttons/button/Button'
import { ButtonArrow } from '@components/buttons/buttonArrow/ButtonArrow'
import { Title } from '@components/title/Title'
import { CountryAccordion } from '@components/countryAccordion/CountryAccordion'
import '@mantine/core/styles.css'
import './gamesGoldenFilterPage.scss'

export const GamesGoldenFilterPage = () => {
  const [activeComponent] = useState('gold')
  const [range, setRange] = useState<[number, number]>([10, 50])

  const navigate = useNavigate()

  const marks = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' },
    { value: 40, label: '40' },
    { value: 50, label: '50' },
    { value: 60, label: '60' },
    { value: 70, label: '70' },
    { value: 80, label: '80' },
    { value: 90, label: '90' },
    { value: 100, label: '100' },
  ]

  const handleRangeChange = (value: [number, number]) => {
    setRange(value)

    console.log('filter-value:', value)
  }

  return (
    <div className="games-filter">
      <div className="games-filter-title">
        <ButtonArrow
          onClick={() => navigate('/active-games')}
          arrowBack
        />
        <Title text="Фільтр" />
      </div>
      <div className="games-filter-buttons">
        <Button
          text="Silver"
          size="medium"
          colorVariant={activeComponent === 'silver' ? 'yellow' : 'light'}
          className=""
          onClick={() => navigate('/active-games/filter-silver')}
        />
        <Button
          text="Golden"
          size="medium"
          fontSize="text-bold"
          colorVariant={activeComponent === 'gold' ? 'yellow' : 'light'}
        />
      </div>

      <div className="games-filter-slider">
        <MantineProvider>
          <RangeSlider
            classNames={{ label: 'slider-label' }}
            minRange={5}
            min={10}
            max={100}
            step={5}
            onChange={handleRangeChange}
            value={range}
            marks={marks}
          />
        </MantineProvider>
      </div>

      <div className="games-filter-accordion">
        <CountryAccordion isMultiOption />
      </div>
    </div>
  )
}
