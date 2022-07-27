import { Link } from "react-router-dom"

export default function RenderizarHorariosFilme(){
    return (
        <div className="datas">
            <h1>Quinta-feira - 24/06/2021</h1>
            <div className="teste">
                <div className="horario">
                    <Link to="/assentos/idSessao"><div className="opcoesHorario">
                        10:00
                    </div></Link>
                    <Link to="/assentos/idSessao"><div className="opcoesHorario">
                        12:00
                    </div></Link>
                    <Link to="/assentos/idSessao"><div className="opcoesHorario">
                        14:00
                    </div></Link>
                    <Link to="/assentos/idSessao"><div className="opcoesHorario">
                        16:00
                    </div></Link>
                </div>
            </div>
        </div>
    )
}

// export default function RenderizarCartaz([listaFilmes]){
//     listaFilmes.map(filme =>
//         <div className="cartazFilme">
//             <div className="fundoFilme">
//                 <div className="imagemFilme">
//                     <img src={filme} alt=""/>
//                 </div>
//             </div>
//         </div>
//     )
// }