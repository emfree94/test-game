import { FC } from 'react'
import arrowIcon from '@assets/icon/arrow_forward.svg'
import arrowBackIcon from '@assets/icon/arrow_back.svg'
import './buttonArrow.scss'

interface buttonArrowProps {
  arrowBack?: boolean
  onClick: () => void
}

export const ButtonArrow: FC<buttonArrowProps> = ({arrowBack, onClick}) => {
  return (
    <button
      onClick={onClick}
      className="button-arrow"
    >
      <img src={arrowBack ? arrowBackIcon : arrowIcon } alt="arrow-icon" />
    </button>
  )
}
