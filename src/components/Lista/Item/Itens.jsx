import style from './../style.module.scss'
const Itens = ({
  tarefa, 
  tempo,
  selected,
  completed,
  id
}: ITarefa) => {

  console.log('item atual', {
    tarefa, 
    tempo,
    selected,
    completed,
    id
  })
  return (
        <li className={style.item}>
            <h3>
                {tarefa}
            </h3>
            <span>{tempo}</span>
        </li>
  )
}

export default Itens