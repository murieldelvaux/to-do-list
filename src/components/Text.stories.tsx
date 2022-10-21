import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from "./Text";

export default{
    title: 'Components/Text', // a barra cria subcategorias
    component: Text,
    args:{
        children: 'Lorem Ipsum.',
        size: 'sm',
    },
    argTypes:{
        size:{
            options:['xs','sm','md'],
            control:{
                type: 'inline-radio'
            }
        }
    }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {} //exporto como objeto vazio, pois não terá muitas variações
export const Xsmall: StoryObj<TextProps> = {
    args:{
        size: 'xs' //configurando o tamanho da varição
    }
} 
export const Small: StoryObj<TextProps> = {
    args:{
        size: 'sm' //configurando o tamanho da varição
    }
} 
export const Medium: StoryObj<TextProps> = {
    args:{
        size: 'md' //configurando o tamanho da varição
    }
} 
 