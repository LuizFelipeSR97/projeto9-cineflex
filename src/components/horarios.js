import RenderizarHorariosFilme from "./renderizarHorariosFilme"
import { Link } from "react-router-dom"

export default function Horarios () {
    return (
        <div className="pagHorarios">
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
            <div className="footer">
                <div className="center">
                    <div className="poster">
                        <div className="fundoFilme">
                            <div className="imagemFilme">
                                <img src="https://br.web.img2.acsta.net/c_310_420/pictures/20/02/03/15/22/4954456.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="titulo">
                        <h1>TITULO</h1>
                    </div>
                </div>
            </div>
        </div>
        )
}