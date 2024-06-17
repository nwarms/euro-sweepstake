import React from 'react'
import { Match } from '@prisma/client';
import { MatchFull } from '@/Types/prismaExtendedTypes';

type Props = {
    match?: MatchFull;
}

export default function MatchComponent({ match }: Props) {
    const divClassName = 'flex justify-between gap-2 bg-inherit'
    if(!match){
        return <div className={divClassName}>Match not found</div>
    }
    const matchHasScore = match.homeTeamScore >= 0 && match.awayTeamScore >= 0;
    return (
        <div key={match.id} className={divClassName}>
            <h1>{matchHasScore ? `${match.homeTeam.name} ${match.homeTeamScore} - ${match.awayTeamScore} ${match.awayTeam.name}` : `${match.homeTeam.name} vs ${match.awayTeam.name}`}</h1>
            <h2>{match.location}</h2>
            <h2>{match.stage.name}</h2>
        </div>
    )
}