import React from 'react'
import Link from 'next/link'
import { Url } from 'next/dist/shared/lib/router/router'

type Props = {}

function Navbar({}: Props) {
  return (
    <nav className='flex w-full bg-white text-black'>
        <NavbarLink href='/'>Euro 2024 Sweepstake</NavbarLink>
        <NavbarLink href='/team'>Teams</NavbarLink>
        <NavbarLink href='/match'>Matches</NavbarLink>
        <NavbarLink href='/user'>Users</NavbarLink>
        <NavbarLink href='/group'>Groups</NavbarLink>
        <NavbarLink href='/knockout'>Knockout Stages</NavbarLink>
    </nav>
  )
}

type NavbarLinkProps = {
    href: Url
    children: React.ReactNode
}

function NavbarLink({href, children}:NavbarLinkProps): React.JSX.Element{
    return (<Link href={href} className='bg-white text-black hover:bg-black hover:text-white px-2'>{children}</Link>)
}

export default Navbar