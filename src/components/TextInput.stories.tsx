import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputProps } from "./TextInput";

export default{
    title: 'Components/TextInput', // a barra cria subcategorias
    component: TextInput,
    args:{
    },
    argTypes:{}
} as Meta<TextInputProps>

export const Default: StoryObj<TextInputProps> = {} //exporto como objeto vazio, pois não terá muitas variações


 