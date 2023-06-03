import React, { ReactElement, useState } from 'react'
import { Container } from '@chakra-ui/react'
import './App.css'
import Slider from './components/Slider'
import Stack from './components/base/Stack'
import Roulette from './components/Roulette'
import { createContext, useContext } from 'react'
import ControlPan from './components/ControlPan'

type STORE = {
  started: any
}
type APP_CONTEXT = {
  store: STORE
}
export const AppContext = createContext<APP_CONTEXT>({
  store: { started: null }
})

function App(): ReactElement {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Roulette />
        <ControlPan />
      </div>
    </div>
  )
}
export default () => {
  const [started, setStarted] = useState<boolean>(false)

  const store = { started: [started, setStarted] }
  return (
    <AppContext.Provider value={{ store: store }}>
      <App />
    </AppContext.Provider>
  )
}
