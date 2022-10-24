import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import clsx from 'clsx'
import { Check} from 'phosphor-react'
import { useState } from 'react'
import { Text } from './Text'

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps{
    checked?: boolean,
    children: string,
    id?:string,
}

export function Checkbox({id,checked,...props}: CheckboxProps){ // padronizando size como medium
    const [check, setCheck]= useState(false)    
    function handleDataState(){
        checked= !check
        setCheck(checked)
        
        return checked;  
    }
    return(
        <>
            <CheckboxPrimitive.Checkbox id={id} className={check? clsx('flex items-center w-6 h-6 p-[2px] outline-none bg-purple-900 border-2 border-purple-900 rounded-full hover:bg-purple-400 hover:border-purple-400'):clsx('flex items-center w-6 h-6 p-[2px] outline-none bg-gray-600 border-2 border-blue-400 rounded-full hover:border-blue-900')} {...props} onClick={handleDataState} checked={checked}>
                <CheckboxPrimitive.Indicator asChild >
                    <Check weight='bold' className='flex w-full rounded-full text-gray-100' />
                </CheckboxPrimitive.Indicator>
            </CheckboxPrimitive.Checkbox>
            < Text className={check? clsx('line-through text-gray-300'):''}>{props.children}</Text>
        </>
    )
}
