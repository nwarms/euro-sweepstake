import Grid from "@/Components/Grid";
import MatchComponent from "@/Components/MatchComponent";
import TeamComponent from "@/Components/TeamComponent";
import prisma from "@/lib/prisma";

export default async function Page() {
    const matches = await prisma.match.findMany({ include: { homeTeam: true, awayTeam: true, stage: true }, orderBy: { matchDate: 'asc' } });
    return (
        <div><h2>Matches</h2>
            <div className="grid grid-cols-4">
                {matches.map(match => {
                    return (
                        <MatchComponent key={match.id} match={match} />
                    )
                })}
            </div>
        </div>
    );
}