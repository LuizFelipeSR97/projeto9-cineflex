import { Link } from "react-router-dom"

export default function RenderizarHorariosFilme({horariosFilme}){

    return ( horariosFilme.map(hora => 
                <div className="horario">
                    <Link to={`/assentos/${hora.id}`}><div className="opcoesHorario">
                        {hora.name}
                    </div></Link>
                </div>
    ))   
}