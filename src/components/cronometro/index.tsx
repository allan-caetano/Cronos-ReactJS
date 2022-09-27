import Botao from './../button/index';
import Relogio from './relogio';
import style from './cronometro.module.scss'

const Cronometro = () => {
    return (
        <div className={style.cronometro}>
            <div className={style.titulo}>
                <p>Esolha uma Atividade para Iniciar</p>
            </div>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao texto='Iniciar!' />
        </div>
    )
}

export default Cronometro;