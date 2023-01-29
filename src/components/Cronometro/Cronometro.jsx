import React from 'react'
import Relogio from './Relogio/Relogio'
import Button from './../Button/Button'

import style from './Cronometro.module.scss'

const Cronometro = () => {
  return (
    <div className={style.cronometro}>
        <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
        <div className={style.relogioWrapper}>
            <Relogio />
        </div>
        <Button>
            Começar!
        </Button>
    </div>
  )
}

export default Cronometro

