import * as React from 'react'
import Canvas from './Canva'
import explosion from '@assets/explosion.gif'
import purchase from '@assets/car.png'
import needle from '@assets/needle.svg'
import { AppContext } from '../../App'
enum _R_STATE {
  None = 'N',
  Prepare = 'P',
  Rolling = 'R'
}

const GradientCircle: React.FC = ({ children }) => {
  return (
    <div className="absolute w-80 h-80 rounded-full bg-gradient-to-b from-yellow-500 to-grey-500">
      {children}
    </div>
  )
}
const LightingImage: React.FC = () => {
  return <img src={explosion} className="absolute z-1" />
}
const PurchaseImg: React.FC = () => {
  return <img src={purchase} className="absolute w-40 z-9" />
}
const Needle: React.FC = () => {
  return <img src={needle} className="absolute h-40" />
}
const NoPurchase: React.FC = () => {
  return (
    <div className="text-center m-auto">
      <h4>Select An Item</h4>
      <h4>To Start</h4>
    </div>
  )
}
const InnerArea: React.FC = ({ children }) => {
  return (
    <div className="absolute flex w-80 h-80 m-auto flex-col justify-center items-center">
      {children}
    </div>
  )
}

const Roulette: React.FC = () => {
  const [started, setStarted] = React.useContext(AppContext).store.started

  const [state, setState] = React.useState<_R_STATE>(_R_STATE.None)
  return (
    <div className="h-96 flex justify-center flex-col items-center">
      <GradientCircle>
        <InnerArea>
          {!started ? (
            <NoPurchase />
          ) : (
            <>
              <PurchaseImg />
            </>
          )}
        </InnerArea>
        {/* This is the area for needle and explosion, if started is true, this become activated 👍 */}
        {started && (
          <InnerArea>
            <LightingImage />
            <Needle />
          </InnerArea>
        )}
      </GradientCircle>

      <Canvas />
    </div>
  )
}
export default Roulette
