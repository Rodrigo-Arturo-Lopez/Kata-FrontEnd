import Header from "./Components/Header";
import Tareas from "./Components/Tareas";

function App() {
  

  return (
    <div className='container'>
      <Header titulo='Administrador de tareas'/>
      <Tareas />
    </div>
  )
}

export default App
