import React from 'react'

type ButtonProps = {
  children?: React.ReactNode
  onClick?: () => void
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  onClick = () => {}
}: ButtonProps) => {
  const baseClasses =
    'border-2 outline-none focus:outline-none normal-case tracking-wide font-semibold rounded shadow-xl text-xs px-4 py-2'

  const colourClasses =
    'border-primary active:bg-primary-background text-primary bg-sec-background'

  /**
   * Render the button
   */
  return (
    <button
      className="
      bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 
      focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
      focus-visible:outline-indigo-600 px-4 mx-2"
      type="button"
      onClick={() => onClick()}
    >
      {children}
    </button>
  )
}
