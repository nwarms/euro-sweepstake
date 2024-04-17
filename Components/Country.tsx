'use client';
import Image from "next/image";
import React from 'react'

type Props = {
    country: Country
}

function Country({country:{name, flag}}: Props) {
  return (
    <div className="flex flex-col items-center">{name}<Image src={flag} alt={`Flag of ${name}`} height={30} width={30} /></div>
  )
}

export default Country
