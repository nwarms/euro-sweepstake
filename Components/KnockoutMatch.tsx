import React from 'react'
import { MatchWithUsersAssigned } from '@/Types/prismaExtendedTypes';
import Link from 'next/link';
import { Time } from './Time';
import TeamComponent from './TeamComponent';
import UserComponent from './UserComponent';

type Props = {
    match?: MatchWithUsersAssigned;
}

export default function KnockoutMatch({ match }: Props) {
    const divClassName = 'grid'
    if (!match) {
        return <div className={divClassName}>Match not found</div>
    }
    const matchHasScore = match.homeTeamScore >= 0 && match.awayTeamScore >= 0;
    return (
        <div className="flex items-center gap-1">
            <div className="flex flex-col">
                <TeamComponent team={match.homeTeam} />
                {match.homeTeam.teamAssigned.map(teamAssigned => (<UserComponent user={teamAssigned.user} key={teamAssigned.user.id} />))}
            </div>
            <Link href={`/match/${match.id}`}>
                <h1>{matchHasScore ? `${match.homeTeamScore} - ${match.awayTeamScore}` : 'vs'}</h1>
            </Link>
            <div className="flex flex-col">
                <TeamComponent team={match.awayTeam} />
                {match.awayTeam.teamAssigned.map(teamAssigned => (<UserComponent user={teamAssigned.user} key={teamAssigned.user.id} />))}
            </div>
        </div>
    )
}