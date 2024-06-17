import Grid from "@/Components/Grid";
import UserComponent from "@/Components/UserComponent";
import Link from "next/link";
import prisma from "@/lib/prisma";

export default async function Page() {
    const user = await prisma.user.findMany({include:{
        teamsAssigned:true,
        
    }});
    return (
        <div><h2>Users</h2>
            <ul>
                <Grid>
                    {user.map(user => {
                        return (
                            <Link href={`/user/${user.id}`} key={user.id}><UserComponent user={user} /></Link>
                        )
                    })}
                </Grid>
            </ul></div>
    );
}