import React from 'react'
import { Button } from '../Button'
const ChanceInput: React.FC = () => {
  const buttons = ['Min', '10%', '25%', '50%', 'Max']
  return (
    <div className="relative">
      <label>chance</label>
      <div>
        <input
          type="text"
          className="border border-black-400 py-2 pl-4 pr-12 w-full focus:outline-none focus:border-blue-500"
        />
        <div className="absolute right-0 bottom-0 px-4 py-2">
          {buttons.map((el, index) => (
            <Button color="green" size="sm" key={index}>
              <span className="text-xs">{el}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChanceInput
