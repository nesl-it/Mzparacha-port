import React from 'react'

type Props = {
    className?:String
}

const Divider = ({className}: Props) => {
  return (
    <div className={`bg-primary h-0.5 w-16 ${className}`}/>
  )
}

export default Divider