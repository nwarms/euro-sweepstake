import KnockoutMatch from "@/Components/KnockoutMatch";
import prisma from "@/lib/prisma";

export default async function Page() {
    const matches = await prisma.match.findMany({ where: { stageId: { not: 1 } }, include: { stage: true, homeTeam: { include: { teamAssigned: { include: { user: true } } } }, awayTeam: { include: { teamAssigned: { include: { user: true } } } } } });
    const roundOf16 = await prisma.stage.findFirstOrThrow({ where: { id: 2 }, include: { matches: { include: { stage: true, homeTeam: { include: { teamAssigned: { include: { user: true } } } }, awayTeam: { include: { teamAssigned: { include: { user: true } } } } } } } });
    const quaterFinal = await prisma.stage.findFirstOrThrow({ where: { id: 3 }, include: { matches: { include: { stage: true, homeTeam: { include: { teamAssigned: { include: { user: true } } } }, awayTeam: { include: { teamAssigned: { include: { user: true } } } } } } } });
    const semiFinal = await prisma.stage.findFirstOrThrow({ where: { id: 4 }, include: { matches: { include: { stage: true, homeTeam: { include: { teamAssigned: { include: { user: true } } } }, awayTeam: { include: { teamAssigned: { include: { user: true } } } } } } } });
    const Final = await prisma.stage.findFirstOrThrow({ where: { id: 5 }, include: { matches: { include: { stage: true, homeTeam: { include: { teamAssigned: { include: { user: true } } } }, awayTeam: { include: { teamAssigned: { include: { user: true } } } } } } } });
    return (
        <main className="flex flex-col gap-5">
            <div>
                <h2>
                    Round of 16
                </h2>
                <div className="flex">
                    {roundOf16.matches.map(match => {
                        return <KnockoutMatch match={match} key={match.id} />
                    })}
                </div>
            </div>
            <div>
                <h2>
                    Quater Finals
                </h2>
                <div className="flex">
                    {quaterFinal.matches.map(match => {
                        return <KnockoutMatch match={match} key={match.id} />
                    })}
                </div>
            </div>
            <div>
                <h2>
                    Semi Finals
                </h2>
                <div className="flex">
                    {semiFinal.matches.map(match => {
                        return <KnockoutMatch match={match} key={match.id} />
                    })}
                </div>
            </div>
            <div>
                <h2>
                    Final
                </h2>
                <div className="flex">
                    {Final.matches.map(match => {
                        return <KnockoutMatch match={match} key={match.id} />
                    })}
                </div>
            </div>
        </main>
    );
}