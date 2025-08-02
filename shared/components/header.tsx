import Link from 'next/link'
import React from 'react'
import Nike from '@/shared/icons/nike.svg'
import Favorites from '@/shared/icons/favorites.svg'
import Bag from '@/shared/icons/bag.svg'
import Image from 'next/image'
import { IconButton } from '../ui/icon-button'

export const Header = () => {
    return (
        <header className="bg-[var(--podium-cds-color-bg-primary)] w-full max-w-[100%] h-[60px] px-[48px] grid grid-cols-3">
            <Link href={'/'}>
                <Nike className="w-[80px] h-[80px]" />
            </Link>
            <nav className="flex items-center justify-center">
                <ul className="flex items-center justify-center gap-[24px]">
                    <li>
                        <Link href={'/'}>Men</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Women</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Kids</Link>
                    </li>
                </ul>
            </nav>
            <div className="flex items-center justify-end gap-[4px]">
                <Link href={'/'}>
                    <IconButton icon={<Favorites />} />
                </Link>
                <Link href={'/'}>
                    <IconButton icon={<Bag />} />
                </Link>
            </div>
        </header>
    )
}
