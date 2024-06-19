import React from 'react'
import TeamComponent from './TeamComponent'
import { GroupWithTeams, TeamWithFullMatches } from '@/Types/prismaExtendedTypes'
import { TeamScore, calculateScoreForTeam } from '@/Helpers/TeamHelper'
import { Stage } from '@prisma/client'

type Props = {
    group: GroupWithTeams
    groupStage?: Stage
}

type TeamWithScore = {
    team:TeamWithFullMatches
    score:TeamScore
}

export const GroupTable = (props: Props) => {

    const teams = props.group.teams.map(team => ({team, score:calculateScoreForTeam(team, props.groupStage)})).sort((a,b) => {
        const pointDifference = b.score.points-a.score.points;
        const goalDifference = b.score.goalDifference-a.score.goalDifference;
        const goalsFor = b.score.goalsFor - a.score.goalsFor;
        const goalsAgainst = a.score.goalsAgainst- b.score.goalsAgainst;
        if(pointDifference === 0){
            if(goalDifference === 0){
                if(goalsFor === 0){
                    return goalsAgainst;
                }
                return goalsFor;
            }
            return goalDifference;
        }
        return pointDifference;
    });

    return (
        <div className='lg:max-w-[75%]'>
            <h1>{props.group.name}</h1>
            <div className="grid grid-cols-8 gap-2">
                <div className='grid grid-cols-subgrid col-span-8 gap-2'>
                    <h2 className='col-start-1'>Team</h2>
                    <h2 className='col-start-2'>Wins</h2>
                    <h2 className='col-start-3'>Draws</h2>
                    <h2 className='col-start-4'>Loses</h2>
                    <h2 className='col-start-5'>Goals for</h2>
                    <h2 className='col-start-6'>Goals against</h2>
                    <h2 className='col-start-7'>Goal difference</h2>
                    <h2 className='col-start-8'>Points</h2>
                </div>
                {teams.map(team => {
                    const { points, wins, draws, losses, goalsFor, goalsAgainst, goalDifference } = team.score;
                    return (<div key={team.team.id} className='grid grid-cols-subgrid col-span-8 gap-2'>
                        <div className='col-start-1'><TeamComponent team={team.team} /></div>
                        <div className='col-start-2'>{wins}</div>
                        <div className='col-start-3'>{draws}</div>
                        <div className='col-start-4'>{losses}</div>
                        <div className='col-start-5'>{goalsFor}</div>
                        <div className='col-start-6'>{goalsAgainst}</div>
                        <div className='col-start-7'>{goalDifference}</div>
                        <div className='col-start-8'>{points}</div>
                    </div>)
                })}
            </div>
        </div>
    )
}