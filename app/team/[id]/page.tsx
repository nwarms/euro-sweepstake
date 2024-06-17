import TeamComponent from "@/Components/TeamComponent";
import { notFound } from "next/navigation";
import { useRouter } from "next/router";
import Image from "next/image";
import { Match } from "@prisma/client";
import MatchComponent from "@/Components/MatchComponent";
import { MatchFull } from "@/Types/prismaExtendedTypes";

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const team = await prisma.team.findFirst({
        where: {
            OR: [{ id: parseInt(id) }, { name: id }]
        },
        include: {
            team_assigned: {
                include:{
                    user:true
                }
            },
            group: {
                include:{
                    teams:true
                }
            },
            homeMatches: {
                include:{
                    homeTeam:true,
                    awayTeam:true,
                    stage:true
                }
            },
            awayMatches: {
                include:{
                    homeTeam:true,
                    awayTeam:true,
                    stage:true
                }
            }
        }
    });
    if (!team) {
        return notFound();
    }
    const matches:MatchFull[] = team.homeMatches.concat(team.awayMatches);
    return (
        <div>
            <h1>{team.name}</h1>
            <Image src={team.icon_url} alt={`Flag of ${team.name}`} height={30} width={30} />
            <h2>Matches</h2>
            {matches.map((match) => 
                <MatchComponent match={match} key={match.id}/>
            )}
            <h2>Group</h2>
            <h2>Users</h2>
        </div>
    );
}