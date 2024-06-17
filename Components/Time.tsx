'use client';

type Props ={
    time:Date
}


export const Time = ({time}:Props) => {
    return <>{time.toLocaleString()}</>
}