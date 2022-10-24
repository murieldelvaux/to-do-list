import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { PlusCircle, Trash } from 'phosphor-react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    asChild?:boolean;
    className?: string;
    isDelete: boolean;
    id?: string
}

export function Button({ id, children, asChild, isDelete, className, ...props}: ButtonProps){ // padronizando size como medium
    const Comp = asChild ? Slot: 'button';
    const Icon = isDelete? Trash: PlusCircle;

   
    const ClassName = isDelete? className='flex gap-2 items-center justify-items-center py-4 px-4  bg-transparent rounded-md font-bold text-gray-300 hover:text-danger hover:bg-gray-400': className='flex gap-2 items-center justify-items-center py-4 px-4  bg-blue-900 rounded-lg font-bold text-gray-100 hover:bg-blue-400';
    return(
        <Comp className={ClassName}
        id={id}
        {...props}
        >
            {children}
            <Icon id={id} size={16}/>
        </Comp>
    )
}