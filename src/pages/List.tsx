
import { CheckboxProps } from '@radix-ui/react-checkbox'
import clsx from 'clsx'
import { ClipboardText, ListChecks } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { Button } from '../components/Button'
import { Checkbox } from '../components/Checkbox'
import { Text } from '../components/Text'
import { TextInput } from '../components/TextInput'
import { Logo } from '../Logo'

import '../styles/global.css'

export function List({checked,children,...props}:CheckboxProps) {
    const [listTask, setListTask] = useState([{id:'', value:''}])
    const [newTask, setNewTask] = useState({id:'', value:''})
    const [ task, setTask ] = useState('Adicione uma nova tarefa')
    const [taskIsCheck, setTaskIsCheck ] = useState(0)
    const [value, setValue ] = useState('')
    const [createTask, setCreateTask ] = useState(0)

 
    /* Create new task in to do list */
    function handleCreateNewTask(event: FormEvent){
        event?.preventDefault();
        setListTask([...listTask,newTask])
        setCreateTask(listTask.length)
        setValue('') //clear input
    }
  
    function handleDeleteTask(id:string, e:string){
        const checkButton = document.getElementById(`${id}check`)
        const newListTask = listTask;

        listTask.map((e,i)=>{
            e.id===id?(
                newListTask.splice(i,1)
                
            ):''
        })
        checkButton?.ariaChecked==='true'?setTaskIsCheck(taskIsCheck-1):''
        
        setCreateTask(listTask.length-1)
    }

    function handleCheckTask(key:string){
        const contTask = taskIsCheck;
        const button = document.getElementById(key)
        button?.ariaChecked ==='true'?setTaskIsCheck(contTask+1):setTaskIsCheck(contTask-1)
       
    }
    function handleNewTask(event: ChangeEvent<HTMLInputElement>){
        let index = createTask+1;
        let val = event?.target.value;
        const id = value+index
        value!==''?event?.target.setCustomValidity(''):''
        setNewTask({id:`${id}`,value:`${val}`})
        setValue(val)

    }

    function handleNewTaskInvalid(event:InvalidEvent<HTMLInputElement>){
        event?.target.setCustomValidity('Não existe tarefa vazia, por favor preencha!')
    }
  return (
        <>
            <div className={createTask>5?clsx('w-screen h-full flex flex-col  text-gray-100 bg-gray-600'):clsx('w-screen h-screen flex flex-col  text-gray-100 bg-gray-600')}>
                <header className='flex flex-col items-center justify-center h-48 bg-gray-700'>
                    <Logo />
                </header>

                <main className='flex w-full justify-center items-center'>
                    <form onSubmit={handleCreateNewTask} className={clsx('flex w-4/5 items-center justify-center gap-2 absolute max-md:w-full px-8  border-gray-100')}>
                        <TextInput onChange={handleNewTask} placeholder={task} id='newTask' onInvalid={handleNewTaskInvalid} required value={value}/>
                        <Button isDelete={false} type='submit' >Criar</Button>
                    </form>
                </main>
                <div className={clsx('flex w-full mt-9 justify-center items-center')}>
                    <div className={clsx('flex w-3/4 mt-8 py-4 justify-between max-[400px]:w-full px-4')}>
                        <div className={clsx('flex gap-2')}>
                            <Text asChild={false} size='sm' className='text-blue-400 font-bold'>Tarefas Criadas</Text>
                            <Text asChild={false} size='sm' className='flex font-bold bg-gray-400 px-2 rounded-full'>{createTask}</Text>
                        </div>
                        <div className={clsx('flex gap-2')}>
                            <Text asChild={false} size='sm' className='text-purple-400 font-bold'>Concluídas</Text>
                            <Text asChild={false} size='sm' className='flex font-bold bg-gray-400 px-2 rounded-full'>{taskIsCheck} de {createTask}</Text>
                        </div>
                        
                    </div>

                </div>
                <footer className='flex h-2/4 flex-col items-center justify-center '>
                    {
                        listTask.length===1?(
                            <div className={clsx('flex w-3/4 h-full flex-col items-center justify-center box-border border-t border-gray-400')}>
                                <div className={clsx('flex flex-col items-center')}>
                                    <ClipboardText size={56} className={clsx('text-gray-400')}/>
                                    <Text asChild={false} size='sm' className='text-gray-300 font-bold'>Você ainda não tem tarefas cadastradas</Text>
                                    <Text asChild={false} size='sm' className='text-gray-300 font-normal'>Crie tarefas e organize seus itens a fazer</Text>
                                </div>
                            </div>
                            ):(
                                <div className={clsx('flex w-3/4 h-full flex-col items-center justify-start box-border')}>
                                    <div className={clsx('flex w-full flex-col items-center')}>
                                        {
                                            listTask.map((e,i)=>{
                                                return(
                                                    e.value!=='' && e.id!=='0'?(
                                                        <div key={e.id} className={clsx('flex w-full items-center justify-between rounded-lg gap-3 py-2 px-2 bg-gray-500 mt-2 last:mb-12')} id={e.id} >
                                                            <div className={clsx('flex gap-3 py-2 px-2')}>
                                                                <Checkbox id={`${e.id}check`} 
                                                                    onCheckedChange={()=>handleCheckTask(`${e.id}check`)} 
                                                                    asChild={false} 
                                                                    children={e.value}
                                                                    value={`${e.value}`}
                                                                />
                                                            </div>
                                                            <Button id={`${e}${i}`} isDelete onClick={()=>handleDeleteTask(e.id,e.value)}>{}</Button>
                                                        </div>
                                                    ):''
                        
                                                )
                                                
                                            })
                                        }
                                    </div>
                                </div>
                            )

                    }
                </footer>

            </div>
        </>
    )
}
