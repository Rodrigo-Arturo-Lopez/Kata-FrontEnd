const tareas = [
  {
    id: 1,
    texto: 'Ir al dotor',
    fecha: '5 Julio 2022',
    terminada: true,

  },
  {
    id: 2,
    texto: 'Ir al cine',
    fecha: '10 Julio 2022',
    terminada: false,
  },
  {
    id: 3,
    texto: 'Ir al super',
    fecha: '11 Julio 2022',
    terminada: false,
  },
];
const Tareas = () => {
  return (
    <>
      {tareas.map((tarea) => (<h3 key={tarea.id}>{ tarea.texto }</h3>))}
    </>
  )
}

export default Tareas