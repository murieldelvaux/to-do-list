import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import {rest} from 'msw'
import { List } from './List'

export default{
    title: 'Pages/ List', // a barra cria subcategorias
    component: List,
    args:{},
    argTypes:{},
    parameters: {
        msw: {
            handlers: [
              rest.post('/sessions', (req, res, ctx) => {
                return res(ctx.json({
                  message: 'Task criada!'
                }))
              })
            ],
          },
        }
} as Meta

export const Default: StoryObj = {
    play: async ({ canvasElement })=>{
        const canvas = within(canvasElement)

        userEvent.type(canvas.getByPlaceholderText('Adicione uma nova tarefa'), 'task1')

        userEvent.click(canvas.getByRole('button'))

       
    }
} 