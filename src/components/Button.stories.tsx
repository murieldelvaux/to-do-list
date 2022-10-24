import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from "./Button";

export default{
    title: 'Components/Button', // a barra cria subcategorias
    component: Button,
    args:{
        children: 'Lorem Ipsum.',
        isDelete: false,
        className:'flex gap-2 items-center justify-items-center py-4 px-4  bg-blue-900 rounded-lg font-bold text-gray-100 hover:bg-blue-400'
    },
    argTypes:{}
} as Meta<ButtonProps>

export const Create: StoryObj<ButtonProps> = {} //exporto como objeto vazio, pois não terá muitas variações
export const Delete: StoryObj<ButtonProps> = {
    args:{
        children: '',
        isDelete: true,
    }
} 

 