import { FC, ReactNode } from 'react'
import { Button } from '@components/buttons/button/Button'
import failEmojiImg from '@assets/img/emojiSmile.png'
import successEmojiImg from '@assets/img/emojiSuccess.png'
import goDownIcon from '@assets/icon/go_down.svg'
import iconPlay from '@assets/icon/play_arrow.svg'
import './contentMessage.scss'

interface ContentMessageProps {
  text: string
  buttonText?: string
  variant?: 'success' | 'fail'
  hideButtonIcon?: boolean
  description?: string
  children?: ReactNode
  hideButton?: boolean
}

const ContentMessage: FC<ContentMessageProps> = ({
  text,
  buttonText = 'Поповнити рахунок',
  variant = 'success',
  hideButtonIcon,
  hideButton,
  description = 'Це завжди можна виправити!',
  children,
}) => (
  <div className="content-message">
    <img
      className="content-message--emoji"
      src={variant === 'success' ? successEmojiImg : failEmojiImg}
      alt="emoji-smile"
    />
    <p className="content-message--text text-semi-bold">{text}</p>
    <div className="wrapper-text">
      <p className="text-regular">{description}</p>
      <img src={goDownIcon} alt="icon-go-down" />
    </div>

    {children
      ? children
      : !hideButton && (
          <Button
            buttonIcon={!hideButtonIcon ? iconPlay : undefined}
            text={buttonText}
            colorVariant="yellow"
          />
        )}
  </div>
)

export default ContentMessage
