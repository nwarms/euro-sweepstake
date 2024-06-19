import { notFound } from "next/navigation";
import Image from "next/image";
import MatchComponent from "@/Components/MatchComponent";
import { GroupWithTeamsIncludes, MatchFull, TeamAssignedFull } from "@/Types/prismaExtendedTypes";
import UserComponent from "@/Components/UserComponent";
import { getAllMatchesForTeam, sortMatches } from "@/Helpers/MatchHelper";
import prisma from "@/lib/prisma";
import { GroupTable } from "@/Components/GroupTable";


export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const team = await prisma.team.findFirst({
        where: { id: parseInt(id) },
        include: {
            teamAssigned: {
                include: {
                    user: true,
                    team: true
                }
            },
            group: {
                include: GroupWithTeamsIncludes
            },
            homeMatches: {
                include: {
                    homeTeam: true,
                    awayTeam: true,
                    stage: true
                },
                orderBy: {
                    matchDate: 'asc'
                }
            },
            awayMatches: {
                include: {
                    homeTeam: true,
                    awayTeam: true,
                    stage: true
                },
                orderBy: {
                    matchDate: 'asc'
                }
            }
        }
    });
    if (!team) {
        return notFound();
    }
    const matches: MatchFull[] = sortMatches(getAllMatchesForTeam(team));
    return (
        <div className="p-2">
            <h1>{team.name}</h1>
            <Image src={team.iconUrl} alt={`Flag of ${team.name}`} height={30} width={30} />
            <h2>Matches</h2>
            <div className="grid grid-cols-4">
                {matches.map((match) =>
                    <MatchComponent match={match} key={match.id} />
                )}
            </div>
            <h2>Users</h2>
            <ul>
                {team.teamAssigned.map((teamAssigned: TeamAssignedFull) => <UserComponent user={teamAssigned.user} key={teamAssigned.id} />)}
            </ul>
            {team.group !== null ? <GroupTable group={team.group}/> : ''}
            
        </div>
    );
}