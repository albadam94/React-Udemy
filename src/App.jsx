import { useState }from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import Listadopacientes from './components/Listadopacientes'
function App() {

  const [pacientes, setPacientes] = useState([ ]);
  const [paciente, setPaciente]= useState({ });

  const eliminarPaciente=id=>{
    const pacienteActualizados = pacientes.filter(paciente=>paciente.id!==id)
    setPacientes(pacienteActualizados)
  }

  return (
    <div className="container mx-auto mt-5">
    <Header/>
    <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <Listadopacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
          
          
        /> 
    </div>
    </div>
  )
}

export default App
