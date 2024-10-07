import { CountryAccordion } from '@components/countryAccordion/CountryAccordion'
import { LanguageAccordion } from '@components/languageAccordion/LanguageAccordion'
import { ActionBlock } from '@components/actionBlock/ActionBlock'
import { Title } from '@components/title/Title'

export const Settings = () => {
  return (
    <div className="settings-container">
      <Title text='Налаштування' />
      <div>
        <CountryAccordion />
        <LanguageAccordion />
        <ActionBlock title='Звук' />
        <ActionBlock title='Вібрація' />
      </div>
    </div>
  )
}
