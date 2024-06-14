import React from 'react'
import Link from 'next/link'
import { Url } from 'next/dist/shared/lib/router/router'

type Props = {}

function Navbar({}: Props) {
  return (
    <nav className='flex w-full bg-white text-black gap-5'>
        <NavbarLink href='/'>Euro 2024 Sweepstake</NavbarLink>
    </nav>
  )
}

type NavbarLinkProps = {
    href: Url
    children: React.ReactNode
}

function NavbarLink({href, children}:NavbarLinkProps): React.JSX.Element{
    return (<Link href={href} className='bg-white text-black'>{children}</Link>)
}

export default Navbar