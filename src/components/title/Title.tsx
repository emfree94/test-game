import { FC } from 'react'
import './title.scss'

interface titleProps {
  text: string
  marginBottom?: string
  className?: string
}

export const Title: FC<titleProps> = ({
  text,
  marginBottom = '12px',
  className = 'title-semi-bold',
}) => {
  return (
    <h2 style={{ marginBottom: marginBottom }} className={className}>
      {text}
    </h2>
  )
}
