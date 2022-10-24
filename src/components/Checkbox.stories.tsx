import { Meta, StoryObj } from '@storybook/react'
import clsx from 'clsx';
import { Checkbox, CheckboxProps } from "./Checkbox";
import { Text } from './Text';

export default{
    title: 'Components/Checkbox', // a barra cria subcategorias
    component: Checkbox,
    args:{
        id:''
    },
    argTypes:{},
    decorators:[
        (Story)=>(
            <div className='flex items-center gap-2'>
                <Story />
                
            </div>
            
        )
    ]
   
} as Meta< CheckboxProps>

export const Check: StoryObj<CheckboxProps> = {   
} 

