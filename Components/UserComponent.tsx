import React from 'react'
import { User } from '@prisma/client';

type Props = {
    user?: User;
}

export default function UserComponent({ user }: Props) {
    const divClassName = 'flex justify-between gap-2 bg-inherit'
    if(!user){
        return <div className={divClassName}>User not found</div>
    }
    return (
        <div key={user.id} className={divClassName}>
            {user.username}
        </div>
    )
}