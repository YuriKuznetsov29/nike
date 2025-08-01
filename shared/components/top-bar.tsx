import Jordan from '@/shared/icons/jordan.svg'
import Image from 'next/image'

export const TopBar = () => {
    return (
        <div>
            <Image src={Jordan} alt="Jordan" width={24} height={24} />
            <Jordan />
        </div>
    )
}
