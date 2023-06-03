import React, { useRef, useEffect } from 'react'

const Canvas: React.FC = (): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null)
  useEffect(() => {
    // Initialize
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext('2d')
    }
  }, [])
  useEffect(() => {
    // Initialize
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext('2d')
      const ctx = canvasCtxRef.current // Assigning to a temp variable
      ctx!.beginPath() // Note the Non Null Assertion
      ctx!.arc(95, 50, 40, 0, 2 * Math.PI)
      ctx!.stroke()
    }
  }, [])
  return <canvas ref={canvasRef} />
}

export default Canvas
