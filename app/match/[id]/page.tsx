import { notFound } from "next/navigation";
import TeamComponent from "@/Components/TeamComponent";
import UserComponent from "@/Components/UserComponent";
import prisma from "@/lib/prisma";
import { Time } from "@/Components/Time";


export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const match = await prisma.match.findFirst({
        where: {
            id: parseInt(id)
        },
        include: {
            homeTeam: { include: { teamAssigned: { include: { user: true } } } },
            awayTeam: { include: { teamAssigned: { include: { user: true } } } },
            stage: true
        },
    });
    if (!match) {
        return notFound();
    }

    const matchHasScore = match.homeTeamScore >= 0 && match.awayTeamScore >= 0;
    return (
        <div>
            <h1 className="flex gap-5 items-center">
                <div className="flex flex-col">
                    <TeamComponent team={match.homeTeam} />
                    {match.homeTeam.teamAssigned.map(teamAssigned => <UserComponent key={teamAssigned.id} user={teamAssigned.user} />)}
                </div>
                {matchHasScore ? `${match.homeTeamScore} - ${match.awayTeamScore}` : " vs "}
                <div className="flex flex-col">
                    <TeamComponent team={match.awayTeam} />
                    {match.awayTeam.teamAssigned.map(teamAssigned => <UserComponent key={teamAssigned.id} user={teamAssigned.user} />)}
                </div>
            </h1>
            <h2>{match.location}</h2>
            <h2><Time time={match.matchDate}/></h2>
            <h2>{match.stage.name}</h2>
        </div >
    );
}