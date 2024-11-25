import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RangeSlider, MantineProvider } from '@mantine/core'
import { Button } from '@components/buttons/button/Button'
import { ButtonArrow } from '@components/buttons/buttonArrow/ButtonArrow'
import { Title } from '@components/title/Title'
import { CountryAccordion } from '@components/countryAccordion/CountryAccordion'

export const GamesSilverFilterPage: FC = () => {
  const [activeComponent] = useState('silver')
  const [range, setRange] = useState<[number, number]>([100, 400])

  const navigate = useNavigate()

  const marks = [
    { value: 100, label: '100' },
    { value: 200, label: '200' },
    { value: 300, label: '300' },
    { value: 400, label: '400' },
    { value: 500, label: '500' },
    { value: 600, label: '600' },
    { value: 700, label: '700' },
    { value: 800, label: '800' },
    { value: 900, label: '900' },
    { value: 1000, label: '1000' },
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
          fontSize="text-bold"
        />
        <Button
          text="Golden"
          size="medium"
          colorVariant={activeComponent === 'gold' ? 'yellow' : 'light'}
          onClick={() => navigate('/active-games/filter-gold')}
        />
      </div>

      <div className="games-filter-slider">
        <MantineProvider>
          <RangeSlider
            classNames={{ label: 'slider-label' }}
            minRange={50}
            min={100}
            max={1000}
            step={50}
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
