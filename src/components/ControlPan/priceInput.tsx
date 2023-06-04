import React from 'react'
import { Button } from '../Button'
const PriceInput: React.FC = () => {
  return (
    <div className="relative">
      <label>price</label>
      <div>
        <input
          type="text"
          className="border border-black-400 py-2 pl-4 pr-12 w-full focus:outline-none focus:border-blue-500"
        />
      </div>
    </div>
  )
}

export default PriceInput
