import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'

import { List } from './List'

export default{
    title: 'Pages/ List', // a barra cria subcategorias
    component: List,
    args:{},
    argTypes:{},
    parameters: {
       
      }
} as Meta

export const Default: StoryObj = {
} 