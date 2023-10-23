import React from 'react'

interface Props {
  content: string
  btnClass: string
}

export const Button: React.FC<Props> = ({ btnClass, content }) => {
  return (
    <button className={`button ${btnClass}`}>{content}</button>
  )
}
