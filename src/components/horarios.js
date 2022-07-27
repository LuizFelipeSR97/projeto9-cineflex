import RenderizarHorariosFilme from "./renderizarHorariosFilme"

export default function Horarios () {
    return (
        <div className="home">
            <div class="header">
                CINEFLEX
            </div>
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
                </div>
            </div>
        </div>
        )
}