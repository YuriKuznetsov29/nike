import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
// import { Loader } from 'lucide-react'

const buttonVariants = cva(
    'cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default:
                    'bg-[var(--podium-cds-button-color-bg-primary-on-dark)] color-[var(--podium-cds-color-text-primary-on-light)] weight-500 text-primary-foreground shadow-xs hover:bg-[var(--podium-cds-button-color-bg-primary-hover-on-dark)]',

                link: 'text-primary underline-offset-4 hover:underline',
            },
            size: {
                default: 'h-9 px-4 py-2 rounded-3xl has-[>svg]:px-3',
                sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
                lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
                icon: 'size-9',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)

// font: var(--podium-cds-typography-body1-strong);
// text-align: center;
// -webkit-text-decoration: none;
// text-decoration: none;
// box-sizing: border-box;
// display: -webkit-box;
// display: -webkit-flex;
// display: -ms-flexbox;
// display: flex;
// -webkit-box-pack: center;
// -webkit-justify-content: center;
// -ms-flex-pack: center;
// justify-content: center;
// -webkit-align-items: center;
// -webkit-box-align: center;
// -ms-flex-align: center;
// align-items: center;
// position: relative;
// cursor: pointer;
// padding: var(--podium-cds-button-padding-top-s) var(--podium-cds-button-padding-sides-s) var(--podium-cds-button-padding-bottom-s);
// min-height: var(--podium-cds-button-height-s);
// position: relative;
// overflow: hidden;
// -webkit-transform: translate3d(0,0,0);
// -ms-transform: translate3d(0,0,0);
// transform: translate3d(0,0,0);
// background: var(--podium-cds-button-color-bg-primary-on-dark);
// color: var(--podium-cds-color-text-primary-on-light);
// border: none;
// border-radius: var(--podium-cds-button-border-radius);
// outline: none;

function Button({
    className,
    variant,
    size,
    loading,
    disabled,
    children,
    ...props
}: React.ComponentProps<'button'> &
    VariantProps<typeof buttonVariants> & {
        loading?: boolean
    }) {
    return (
        <button
            disabled={disabled || loading}
            data-slot="button"
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        >
            {!loading ? children : 'loading...'}
        </button>
    )
}

export { Button, buttonVariants }
