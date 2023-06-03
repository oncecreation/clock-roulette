import React from 'react'
import { Button } from '../Button'
import Slider from '../Slider'
import { Input } from '@chakra-ui/react'

const ButtonPanel: React.FC = () => {
  return (
    <div className="flex flex-row">
      <Button>DEAL FOR $5005,500</Button>
      <Button>Hello</Button>
    </div>
  )
}

const ControlPan: React.FC = () => {
  return (
    <div className="flex flex-col">
      <ButtonPanel />
      <form className="flex  flex-col p-3">
        <div className="pt-4">
          <Input></Input>
        </div>
        <div className="pt-4">
          <Slider />
        </div>
      </form>
    </div>
  )
}
export default ControlPan
