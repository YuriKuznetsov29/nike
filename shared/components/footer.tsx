import Link from 'next/link'
import React from 'react'
import Location from '../assets/icons/location.svg'

export const Footer = () => {
    return (
        <footer className="mx-auto p-[48px] max-w-[1920 px] min-h-[300px]">
            <div className="h-[1px] mb-[60px] bg-[var(--podium-cds-color-border-tertiary)]"></div>
            <div className="flex gap-[12px] w-full">
                <div className="flex flex-col w-full">
                    <h2 className="mb-6 font-bold">Resources</h2>
                    <Link
                        className="mb-2 font-bold text-[var(--podium-cds-color-text-secondary)]"
                        href={'/'}
                    >
                        Find a Store
                    </Link>
                    <Link
                        className="mb-2 font-bold text-[var(--podium-cds-color-text-secondary)]"
                        href={'/'}
                    >
                        Find a Store
                    </Link>
                    <Link
                        className="mb-2 font-bold text-[var(--podium-cds-color-text-secondary)]"
                        href={'/'}
                    >
                        Find a Store
                    </Link>
                    <Link
                        className="mb-2 font-bold text-[var(--podium-cds-color-text-secondary)]"
                        href={'/'}
                    >
                        Find a Store
                    </Link>
                    <Link
                        className="mb-2 font-bold text-[var(--podium-cds-color-text-secondary)]"
                        href={'/'}
                    >
                        Find a Store
                    </Link>
                </div>
                <div className="flex flex-col w-full">
                    <h2 className="mb-6 font-bold">Resources</h2>
                    <Link
                        className="mb-2 font-bold text-[var(--podium-cds-color-text-secondary)]"
                        href={'/'}
                    >
                        Find a Store
                    </Link>
                    <Link
                        className="mb-2 font-bold text-[var(--podium-cds-color-text-secondary)]"
                        href={'/'}
                    >
                        Find a Store
                    </Link>
                    <Link
                        className="mb-2 font-bold text-[var(--podium-cds-color-text-secondary)]"
                        href={'/'}
                    >
                        Find a Store
                    </Link>
                    <Link
                        className="mb-2 font-bold text-[var(--podium-cds-color-text-secondary)]"
                        href={'/'}
                    >
                        Find a Store
                    </Link>
                    <Link
                        className="mb-2 font-bold text-[var(--podium-cds-color-text-secondary)]"
                        href={'/'}
                    >
                        Find a Store
                    </Link>
                </div>
                <div className="flex flex-col w-full">
                    <h2 className="mb-6 font-bold">Resources</h2>
                    <Link
                        className="mb-2 font-bold text-[var(--podium-cds-color-text-secondary)]"
                        href={'/'}
                    >
                        Find a Store
                    </Link>
                    <Link
                        className="mb-2 font-bold text-[var(--podium-cds-color-text-secondary)]"
                        href={'/'}
                    >
                        Find a Store
                    </Link>
                    <Link
                        className="mb-2 font-bold text-[var(--podium-cds-color-text-secondary)]"
                        href={'/'}
                    >
                        Find a Store
                    </Link>
                    <Link
                        className="mb-2 font-bold text-[var(--podium-cds-color-text-secondary)]"
                        href={'/'}
                    >
                        Find a Store
                    </Link>
                    <Link
                        className="mb-2 font-bold text-[var(--podium-cds-color-text-secondary)]"
                        href={'/'}
                    >
                        Find a Store
                    </Link>
                </div>
                <div className="flex flex-col w-full">
                    <h2 className="mb-6 font-bold">Resources</h2>
                    <Link
                        className="mb-2 font-bold text-[var(--podium-cds-color-text-secondary)]"
                        href={'/'}
                    >
                        Find a Store
                    </Link>
                    <Link
                        className="mb-2 font-bold text-[var(--podium-cds-color-text-secondary)]"
                        href={'/'}
                    >
                        Find a Store
                    </Link>
                    <Link
                        className="mb-2 font-bold text-[var(--podium-cds-color-text-secondary)]"
                        href={'/'}
                    >
                        Find a Store
                    </Link>
                    <Link
                        className="mb-2 font-bold text-[var(--podium-cds-color-text-secondary)]"
                        href={'/'}
                    >
                        Find a Store
                    </Link>
                    <Link
                        className="mb-2 font-bold text-[var(--podium-cds-color-text-secondary)]"
                        href={'/'}
                    >
                        Find a Store
                    </Link>
                </div>
                <div className="flex flex-col w-full">
                    <Link
                        className="mb-2 font-bold text-[var(--podium-cds-color-text-secondary)] flex gap-2 items-center self-end"
                        href={'/'}
                    >
                        <Location />
                        United States
                    </Link>
                </div>
            </div>
        </footer>
    )
}
