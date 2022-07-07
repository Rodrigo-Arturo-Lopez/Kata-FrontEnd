import { FaPlaystation } from 'react-icons/fa'

const Tarea = ({ tarea, onDelete, onToggle }) => {
  return (
    <div className={ `task ${tarea.terminada ? 'terminado' : ''}` } onDoubleClick={() => onToggle(tarea.id)}>
      <h3>{ tarea.texto } <FaPlaystation style={{ color: 'blue', cursor: 'pointer' }} onClick={() => onDelete(tarea.id)}/> </h3>
      <p>{ tarea.fecha }</p>
    </div>
  )
}

export default Tarea