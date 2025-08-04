import Link from 'next/link'

export const Menu = () => {
    return (
        <nav className=" mx-auto h-[110px] flex items-center justify-center">
            <ul className="flex items-center justify-center gap-[24px]">
                <li>
                    <Link className="font-bold" href={'/'}>
                        Find a Store
                    </Link>
                </li>
                <li>
                    <Link className="font-bold" href={'/'}>
                        Help
                    </Link>
                </li>
                <li>
                    <Link className="font-bold" href={'/'}>
                        Join Us
                    </Link>
                </li>
                <li>
                    <Link className="font-bold" href={'/'}>
                        Sign in
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
