import * as React from 'react'
export interface IconButtonProps extends React.ComponentProps<'button'> {
    icon: React.ReactNode
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, ...props }) => (
    <button {...props} className="rounded-full p-[0.375rem] hover:bg-gray-200 cursor-pointer">
        <span>{icon}</span>
    </button>
)
