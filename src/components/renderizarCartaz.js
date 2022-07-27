import Horarios from "./horarios"
import { Link } from "react-router-dom"

export default function RenderizarCartaz({listaFilmes}){
    return (listaFilmes.map (filme => 
        <div className="cartazFilme">
            <div className="fundoFilme">
                <div className="imagemFilme">
                    <Link to="/sessoes/idFilme"><img src={filme.posterURL} alt="" /></Link>
                </div>
            </div>
        </div>
    ))
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