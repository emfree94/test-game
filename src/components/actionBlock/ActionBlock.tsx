import { ButtonSwitcher } from '@components/buttons/buttonSwitcher/ButtonSwitcher'
import './actionBlock.scss'

interface ActionBlockProps {
  title: string
}

export const ActionBlock = ({ title }) => {
  return (
    <div className="action-block">
      <ButtonSwitcher />
      <p className='title text-regular'>{title}</p>
    </div>
  )
}
