import { ButtonSwitcher } from '@components/buttons/buttonSwitcher/ButtonSwitcher'
import './actionBlock.scss'
import { FC } from 'react'

interface ActionBlockProps {
  title: string
}

export const ActionBlock: FC<ActionBlockProps> = ({ title }) => {
  return (
    <div className="action-block">
      <ButtonSwitcher />
      <p className='title text-regular'>{title}</p>
    </div>
  )
}
