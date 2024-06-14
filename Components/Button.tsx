'use client';
import React, { ReactNode } from 'react'

type Props = {onClick?:()=>void; text?:string; children:ReactNode, link?:string}

export default function Button({onClick, text, children}: Props) {
  return (
    <button className=' bg-white rounded-sm border-1 border-black text-black px-2 py-1' onClick={onClick}>{text}{children}</button>
  )
}