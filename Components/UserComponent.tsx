import React from 'react'
import { User } from '@prisma/client';
import Link from 'next/link';

type Props = {
    user?: User;
}

export default function UserComponent({ user }: Props) {
    const divClassName = 'flex justify-between gap-2 bg-inherit hover:bg-slate-600 p-2'
    if(!user){
        return <div className={divClassName}>User not found</div>
    }
    return (
        <Link href={`/user/${user.id}`} key={user.id} className={divClassName}>
            {user.username}
        </Link>
    )
}