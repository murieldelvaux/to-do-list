
import clsx from 'clsx';
import { InputHTMLAttributes} from 'react';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement>{}

export function TextInput(props: TextInputProps){ // padronizando size como medium
    
    return(
        <input className={clsx('flex placeholder:text-gray-300 text-md text-gray-300 bg-gray-500 rounded-lg py-4 px-4 gap-2 w-full outline-none border border-gray-700 focus-within:outline-purple-900 focus:text-gray-100')}
        placeholder='Adicione uma nova tarefa'
        {...props}
        />
    )
}

TextInput.displayName ='TextInput'