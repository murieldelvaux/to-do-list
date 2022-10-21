
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx'
import { HTMLAttributes, ReactNode, useState } from 'react'
import { Button } from './Button';
import { Checkbox, CheckboxProps } from './Checkbox';
import CheckboxStories from './Checkbox.stories';
import { Text } from './Text';

export interface TaskProps extends CheckboxProps{
    
}

export function Task({checked,...props}: TaskProps){ // padronizando size como medium
    
    let className = '';
    checked==true?className='line-through text-gray-300':''
    return(
        <div className={clsx('flex items-center justify-between rounded-lg gap-3 py-2 px-2 bg-gray-500')}>
            <div className={clsx('flex gap-3 py-2 px-2')}>
                <Checkbox id='CheckboxTask' onCheckedChange={()=>checked}/>
                
            </div>
            <Button isDelete>{}</Button>
        </div>
    )
    
}