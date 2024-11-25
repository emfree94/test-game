import { useState } from 'react'
import './radioButton.scss'

export const RadioButton = () => {
  const [selected, setSelected] = useState(true)

  return (
    <div className="row radio">
      <div className="radio">
        <input
          id="radio-1"
          name="radio"
          type="radio"
          checked={selected}
          onChange={() => setSelected(!selected)}
        />
        <label htmlFor="radio-1" className="radio-label" />
      </div>
    </div>
  )
}
