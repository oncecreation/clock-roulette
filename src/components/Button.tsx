import React, { useEffect, useState } from 'react'
interface ButtonProps {
  size: string
  color: string
  pending: boolean
  disabled: boolean
  children?: React.ReactNode
  callback: () => Promise<void>
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  color = 'green',
  pending = false,
  disabled = false,
  size,
  callback = () => new Promise(() => {})
}: ButtonProps) => {
  const [_pending, setPending] = useState<boolean>(false)
  const className = `
      bg-${color}-600 
      mx-${size == 'md' ? 2 : 1}
      px-${size == 'md' ? 3.5 : 2} 
      py-${
        size == 'md' ? 2.5 : 1
      } text-sm font-semibold text-white shadow-sm hover:bg-${color}-500 
      focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
      focus-visible:outline-indigo-600
      `
  const handleClick = () => {
    setPending(true)
    callback().then(() => {
      setPending(false)
    })
  }

  useEffect(() => {
    setPending(pending)
  }, [pending])
  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  )
}
