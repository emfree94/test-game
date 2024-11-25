import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonSwitcher } from '@components/buttons/buttonSwitcher/ButtonSwitcher'
import editIcon from '@assets/icon/edit.svg'
import './actionBlock.scss'

interface ActionBlockProps {
  title: string
  isPassword?: boolean
}

export const ActionBlock: FC<ActionBlockProps> = ({ title, isPassword }) => {

  const navigate = useNavigate()

  return (
    <div className={`action-block ${isPassword && 'space-between'}`}>
      {isPassword ? (
        <>
          <p className="text-medium">{title}</p>
          <div className="action-block--wrapper" onClick={() => navigate('password')}>
            <p className="text-regular">Змінити</p>
            <img src={editIcon} alt="edit-icon" />
          </div>
        </>
      ) : (
        <>
          <ButtonSwitcher />
          <p className="title text-regular">{title}</p>
        </>
      )}
    </div>
  )
}
