import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface TextProps{
    size?: 'xs'| 'sm'| 'md';
    children: ReactNode;
    asChild?:boolean;
    className?: string;
}

export function Text({ size= 'md', children, asChild, className}: TextProps){ // padronizando size como medium
    const Comp = asChild ? Slot: 'span';
    return(
        <Comp className={clsx('text-gray-100 font-sans',
        {
            'text-xs': size==='xs',
            'text-sm': size==='sm',
            'text-md': size==='md',

        },
        className,
        )}
        >
            {children}
        </Comp>
    )
}