import prisma from "@/lib/prisma";
import { GroupTable } from "@/Components/GroupTable";
import { GroupWithTeamsIncludes } from "@/Types/prismaExtendedTypes";

export default async function Page() {
    const groups = await prisma.group.findMany({ include: GroupWithTeamsIncludes });
    return (
        <div>
            <h1>Groups</h1>
            <div>
                {groups.map(group => (<GroupTable group={group} key={group.id}/>))}
            </div>
        </div>
    );
}
