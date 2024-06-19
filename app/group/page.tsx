import prisma from "@/lib/prisma";
import { GroupTable } from "@/Components/GroupTable";

export default async function Page() {
    const groups = await prisma.group.findMany({ include: { teams: { include: { homeMatches: { include: { stage: true } }, awayMatches: { include: { stage: true } } } } }, orderBy: { name: 'asc' } });
    return (
        <div>
            <h1>Groups</h1>
            <div className="flex flex-col gap-5">
                {groups.map(group => (<GroupTable group={group} key={group.id} />))}
            </div>
        </div>
    );
}
