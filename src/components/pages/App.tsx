import React, { useState } from 'react';
import { ITarefa } from '../../types/Tarefa';
import Cronometro from '../Cronometro/Cronometro';
import Formulario from '../Formulario/Formulario';
import Lista from '../Lista/Lista';
import style from './style.module.scss'

function App() 
{

  const [listJobs, setJobs] = useState<ITarefa[] | []>([])

  return (
    <div className={style.AppStyle}>
      <Formulario setJobs={setJobs}/>
      <Lista tarefas={listJobs}/>
      <Cronometro />
    </div>
  );
}

export default App;
