'use client';
import { Team  } from "@prisma/client";
import Image from "next/image";
import React from 'react'

type Props = {
    team?: Team
}

function TeamComponent({team}: Props) {
  const divClassName = "flex flex-col items-center bg-inherit"
  if(!team){
    return <div className={divClassName}>Team not found</div>
}
  return (
    <div className={divClassName} >{team.name}<Image src={team.icon_url} alt={`Flag of ${team.name}`} height={30} width={30} /></div>
  )
}

export default TeamComponent
