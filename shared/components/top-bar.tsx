import Jordan from '@/shared/assets/icons/jordan.svg'
import Converse from '@/shared/assets/icons/converse.svg'
import Image from 'next/image'
import Link from 'next/link'

export const TopBar = () => {
    return (
        <div className="flex items-center justify-between h-[36px] max-w-1920 px-[48px] bg-[var(--podium-cds-color-bg-secondary)] z-10">
            <nav>
                <ul className="flex items-center gap-[24px]">
                    <li>
                        <Jordan />
                    </li>
                    <li>
                        <Converse />
                    </li>
                </ul>
            </nav>
            <nav>
                <ul className="flex items-center">
                    <li>
                        <Link href={'/'}>
                            <p className="text-[12px] font-medium">Find a Store</p>
                        </Link>
                    </li>
                    <div className="m-[12px] h-[12px] border-r-[1px]"></div>
                    <li>
                        <Link href={'/'}>
                            <p className="text-[12px] font-medium">Help</p>
                        </Link>
                    </li>
                    <div className="m-[12px] h-[12px] border-r-[1px]"></div>
                    <li>
                        <Link href={'/'}>
                            <p className="text-[12px] font-medium">Join Us</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
