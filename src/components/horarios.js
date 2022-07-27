import RenderizarHorariosFilme from "./renderizarHorariosFilme"
import { Link } from "react-router-dom"

export default function Horarios () {
    return (
        <div className="pagHorarios">
            <Link to="/"><div class="header">
            CINEFLEX
        </div></Link>
            <div class="content">
                <div className="titulo">
                    Selecione o horário
                </div>
                <div className="listaHorariosFilme">
                    <RenderizarHorariosFilme />
                    <RenderizarHorariosFilme />
                    <RenderizarHorariosFilme />
                    <RenderizarHorariosFilme />
                    <RenderizarHorariosFilme />
                    <RenderizarHorariosFilme />
                    <RenderizarHorariosFilme />
                    <RenderizarHorariosFilme />
                    <RenderizarHorariosFilme />
                </div>
            </div>
        </div>
        )
}