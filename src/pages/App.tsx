import Cronometro from '../components/cronometro';
import Formulario from '../components/formulario';
import Lista from '../components/lista'; 
import style from './app.module.scss'
import { useState } from 'react';

function App() {

  let [tarefas, setTarefas] = useState( [{
    tarefa: "Exemplo",
    tempo: "10:00:10" 
}]
)
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas}/>
      <Cronometro />
    </div>
  );
}

export default App;
