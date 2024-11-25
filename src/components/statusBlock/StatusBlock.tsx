import { FC } from 'react'
import './statusBlock.scss'

interface StatusBlockProps {
  status: string
}

export const StatusBlock: FC<StatusBlockProps> = ({ status }) => {
  return (
    <div className={`status-block ${status && status}`}>
      <p className="status-text text-tiny-lite">
      {status}
      </p>
    </div>
  )
}
