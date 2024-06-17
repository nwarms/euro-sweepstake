import { notFound } from "next/navigation";
import MatchComponent from "@/Components/MatchComponent";
import { getAllMatchesForTeam, sortMatches } from "@/Helpers/MatchHelper";
import TeamComponent from "@/Components/TeamComponent";
import Grid from "@/Components/Grid";

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const user = await prisma.user.findFirst({
        where: {
            id: parseInt(id)
        },
        include: {
            teamsAssigned: {
                include: {
                    team: {
                        include: {
                            homeMatches: {
                                include: { stage: true, homeTeam: true, awayTeam: true }
                            },
                            awayMatches: {
                                include: { stage: true, homeTeam: true, awayTeam: true }
                            }
                        }
                    }
                }
            }
        }
    });
    if (!user) {
        return notFound();
    }
    const matches = sortMatches(user.teamsAssigned.map(teamAssigned => getAllMatchesForTeam(teamAssigned.team)).flat());
    return (
        <div>
            <h1>{user.username}</h1>
            <h2>Teams</h2>
            <Grid>
                {user.teamsAssigned.map(teamAssigned => <TeamComponent key={teamAssigned.id} team={teamAssigned.team} />)}
            </Grid>
            <h2>Matches</h2>
            <div className="grid grid-cols-4">
                {matches.map((match) =>
                    <MatchComponent match={match} key={match.id} />
                )}
            </div>
        </div>
    );
}