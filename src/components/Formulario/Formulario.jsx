import React from "react";
import Botao from './../Button/Button'
import style from './style.module.scss'
import { ITarefa } from "../../types/Tarefa";

import  {v4 as uuidv4 } from 'uuid'

class Formulario extends React.Component<{
    setJobs: React.Dispatch<React.SetStateAction<ITarefa[]>>
}>
{
    state = {
        tempo: "00:00:00",
        tarefa: ""
    }
    
    adicionarTarefa = (e: React.FormEvent) => 
    {
        e.preventDefault()

        this.props.setJobs(old => 
            [
                ...old, 
                {
                    ...this.state,
                    selected: false,
                    completed: false,
                    id: uuidv4()
                }
            ])

        this.setState({
            tarefa: "",
            tempo: "00:00:00"
        })
    }

    render()
    {

        return(
            <form  className={style.novaTarefa} onSubmit={this.adicionarTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input 
                    type="text" 
                    name="tarefa"
                    value={this.state.tarefa}
                    onChange={e => this.setState({...this.state, tarefa: e.target.value})}
                    id="tarefa"
                    placeholder="O que você quer estudar"
                    required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input 
                    type="time" 
                    step={1}
                    name="tempo"
                    value={this.state.tempo} 
                    onChange={e => this.setState({...this.state, tempo: e.target.value})}
                    id="tempo" 
                    min={"00:00:00"}
                    max={"01:30:00"}
                    required
                    />
                </div>
                <Botao type="submit">
                    Adicionar
                </Botao>
            </form>
        )
    }
}

export default Formulario;