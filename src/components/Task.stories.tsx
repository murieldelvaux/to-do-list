import { Meta, StoryObj } from '@storybook/react'
import clsx from 'clsx';
import { Children } from 'react';
import { Button } from './Button';
import { Checkbox } from './Checkbox';
import { Task, TaskProps } from "./Task";
import { Text } from './Text';

export default{
    title: 'Components/Task', // a barra cria subcategorias
    component: Task,
    args:{
    },
    argTypes:{},
    
} as Meta<TaskProps>

export const Default: StoryObj<TaskProps> = {} //exporto como objeto vazio, pois não terá muitas variações