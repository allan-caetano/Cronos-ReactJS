import { useState } from "react"
import Botao from "../button"
import './style.scss'
import { ITarefa } from './../../types/tarefas';

interface props{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

const Formulario = ({setTarefas} : props)=> {

    const [tempo, setTempo] = useState('00:00')
    const [tarefa, setTarefa] = useState('')

    function addTarefa(evento: React.FormEvent) {
        evento.preventDefault()
        setTarefas(tarefaAntiga => [...tarefaAntiga, {tarefa, tempo}])
    }

    return (
        <form className="novaTarefa" onSubmit={addTarefa}>
            <div className="inputContainer">
                <label htmlFor="tarefa">Escolha uma Tarefa </label>
                <input
                    value={tarefa}
                    onChange={evento => setTarefa(evento.target.value)}
                    type="text" name="tarefa" id="tarefa"
                    placeholder="Esolha uma tarefa" required />
            </div>
            <div className="inputContainer">
                <label htmlFor="time"></label>
                <input
                    value={tempo}
                    onChange={(evento) => setTempo(evento.target.value)}
                    type="time" step="1" name="time"
                    id="time" min="00:00:00" max="01:30:00" required
                />
            </div>
            <Botao texto="Aplicar" type="submit" />
        </form>
    )
}

export default Formulario