import React from 'react'
import Itens from './Item/Itens'
import style from './style.module.scss'

import {ITarefa} from './../../types/Tarefa'


export const Lista = ({tarefas}: {tarefas: ITarefa[]}) => 
{

   

  return (

    <aside className={style.listaTarefas}>
        <h2> Estudo do dia </h2>
        <ul>
            {
                tarefas.map((data, index) => 
                (
                    <Itens 
                        key={index}
                        {...data}
                    />
                ))
            }
        </ul>
    </aside>
  )
}

export default Lista
