import React from 'react'
import { MatchFull } from '@/Types/prismaExtendedTypes';
import Link from 'next/link';
import { Time } from './Time';

type Props = {
    match?: MatchFull;
}

export default function MatchComponent({ match }: Props) {
    const divClassName = 'grid'
    if(!match){
        return <div className={divClassName}>Match not found</div>
    }
    const matchHasScore = match.homeTeamScore >= 0 && match.awayTeamScore >= 0;
    return (
        <Link href={`/match/${match.id}`} key={match.id} className="grid grid-cols-subgrid col-span-4 hover:bg-slate-600">
            <h1 className=' col-start-1 bg-inherit'>{matchHasScore ? `${match.homeTeam.name} ${match.homeTeamScore} - ${match.awayTeamScore} ${match.awayTeam.name}` : `${match.homeTeam.name} vs ${match.awayTeam.name}`}</h1>
            <h2 className=' col-start-2 bg-inherit'>{match.location}</h2>
            <h2 className=' col-start-3 bg-inherit'>{match.stage.name}</h2>
            <h2 className=' col-start-4 bg-inherit'><Time time={match.matchDate}/></h2>
        </Link>
    )
}