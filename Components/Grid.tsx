import React, { FC, ReactNode } from 'react'

type Props = {
    children:ReactNode
}

export default function Grid({children}: Props) {
  return (
    <div className=' grid grid-cols-4 gap-3'>{children}</div>
  )
}